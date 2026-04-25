import os
from bs4 import BeautifulSoup
import re

files = [f for f in os.listdir('public/pages') if f.startswith('approve-') or f.startswith('view-')]

for f in files:
    path = os.path.join('public/pages', f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        soup = BeautifulSoup(content, 'html.parser')
    
    modified = False
    for wrapper in soup.find_all('div', style=re.compile(r'max-width:\s*\d+px')):
        grids = wrapper.find_all('div', style=re.compile(r'grid-template-columns.*140px'))
        
        if not grids:
            continue
            
        modified = True
        
        wrapper['style'] = "display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end; background: var(--bg-app); border-radius: 8px; padding: 20px; border: 1px solid var(--border-light);"
        
        for grid in grids:
            label = grid.find('label')
            input_div = grid.find('div', style=re.compile(r'padding-left'))
            
            if label and input_div:
                span_colon = label.find('span', style=re.compile(r'float:\s*right'))
                if span_colon:
                    span_colon.decompose()
                
                new_group = soup.new_tag('div', attrs={'class': 'form-group', 'style': 'margin-bottom: 0; min-width: 150px; flex: 1;'})
                new_group.append(label)
                
                input_el = input_div.find(['input', 'select', 'textarea'])
                if input_el:
                    if input_el.has_attr('style'):
                        input_el['style'] = re.sub(r'max-width:\s*\d+px;?', '', input_el['style'])
                    new_group.append(input_el)
                
                grid.replace_with(new_group)
        
        btn_div = wrapper.find('div', style=re.compile(r'margin-left:'))
        if btn_div:
            btn_div['style'] = "display:flex; gap:12px; margin-bottom: 2px;"
            
    if modified:
        with open(path, 'w', encoding='utf-8') as file:
            # Format nicely
            html = str(soup)
            html = html.replace('></input>', '>')
            file.write(html)
            print(f"Updated {f}")
