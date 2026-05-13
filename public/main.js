

    // Toggle a sidebar section open/closed
    function toggleSection(sectionName, element) {
      const subMenu = document.getElementById('sub-' + sectionName);
      const chevron = element.querySelector('.chevron-icon');
      
      // Close all other submenus
      document.querySelectorAll('.notion-submenu').forEach(sub => {
        if (sub.id !== 'sub-' + sectionName) sub.style.display = 'none';
      });
      document.querySelectorAll('.chevron-expanded').forEach(c => {
        if (c !== chevron) c.classList.remove('chevron-expanded');
      });
      
      // Toggle this one
      if (subMenu.style.display === 'none') {
        subMenu.style.display = 'block';
        if (chevron) chevron.classList.add('chevron-expanded');
      } else {
        subMenu.style.display = 'none';
        if (chevron) chevron.classList.remove('chevron-expanded');
      }
      
      // Set top-level active
      document.querySelectorAll('.notion-nav > a').forEach(a => a.classList.remove('active'));
      element.classList.add('active');
    }

    // Accordion panels inside loaded pages (e.g. Change Password, Personal Details)
    function togglePanel(id) {
      const el = document.getElementById(id);
      const chevron = document.getElementById(id + '-chevron');
      if (!el) return;
      if (el.style.display === 'none') {
        el.style.display = 'block';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      } else {
        el.style.display = 'none';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      }
    }

    // Tab switching inside loaded pages and modals
    function switchTab(tabId, btn) {
      // Find the parent container (card or wizard layout) to scope tab switching
      const parent = btn.closest('.wizard-layout') || btn.closest('.card') || document;
      parent.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
      parent.querySelectorAll('.tab-btn, .wizard-nav button').forEach(b => b.classList.remove('active'));
      document.getElementById(tabId).style.display = 'block';
      btn.classList.add('active');
    }

    // Global Modal System
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        // Subtly animate entry
        const win = modal.querySelector('.modal-window');
        if (win) {
          win.style.opacity = '0';
          win.style.transform = 'translateY(10px) scale(0.98)';
          setTimeout(() => {
            win.style.transition = 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
            win.style.opacity = '1';
            win.style.transform = 'translateY(0) scale(1)';
          }, 10);
        }
      }
    }
    
    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        const win = modal.querySelector('.modal-window');
        if (win) {
          win.style.opacity = '0';
          win.style.transform = 'translateY(10px) scale(0.98)';
          setTimeout(() => {
            modal.style.display = 'none';
          }, 200);
        } else {
            modal.style.display = 'none';
        }
      }
    }

    // Close modal when clicking outside overlay
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal-overlay')) {
        const win = event.target.querySelector('.modal-window');
        if (win) {
          win.style.opacity = '0';
          win.style.transform = 'translateY(10px) scale(0.98)';
          setTimeout(() => {
            event.target.style.display = 'none';
          }, 200);
        } else {
            event.target.style.display = 'none';
        }
      }
    });

    // Bulk Action Logic
    function checkBulkActions() {
      const checkedBoxes = document.querySelectorAll('.row-checkbox:checked');
      const fab = document.getElementById('bulkActionBar');
      if(fab) {
        if(checkedBoxes.length > 0) {
          document.getElementById('bulkActionCount').innerText = checkedBoxes.length + " Selected";
          fab.classList.add('visible');
        } else {
          fab.classList.remove('visible');
        }
      }
    }

    document.addEventListener('change', function(e) {
      if(e.target.classList.contains('row-checkbox') || e.target.classList.contains('select-all-checkbox')) {
        // Handle select all
        if(e.target.classList.contains('select-all-checkbox')) {
          const isChecked = e.target.checked;
          const checkboxes = document.querySelectorAll('.row-checkbox');
          checkboxes.forEach(cb => cb.checked = isChecked);
        }
        checkBulkActions();
      }
    });

    // â”€â”€ Dashboard Settings â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const themeColorMap = {
      '#4f46e5': { hover: '#4338ca', subtle: 'rgba(79,70,229,0.08)', light: '#e0e7ff' },
      '#0ea5e9': { hover: '#0284c7', subtle: 'rgba(14,165,233,0.08)', light: '#e0f2fe' },
      '#3b82f6': { hover: '#2563eb', subtle: 'rgba(59,130,246,0.08)', light: '#dbeafe' },
      '#7c3aed': { hover: '#6d28d9', subtle: 'rgba(124,58,237,0.08)', light: '#ede9fe' },
      '#059669': { hover: '#047857', subtle: 'rgba(5,150,105,0.08)', light: '#d1fae5' },
      '#0891b2': { hover: '#0e7490', subtle: 'rgba(8,145,178,0.08)', light: '#cffafe' },
      '#e11d48': { hover: '#be123c', subtle: 'rgba(225,29,72,0.08)', light: '#ffe4e6' },
      '#334155': { hover: '#1e293b', subtle: 'rgba(51,65,85,0.08)', light: '#e2e8f0' },
    };

    function toggleDashboardSettings() {
      const panel = document.getElementById('dashboard-settings-panel');
      if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }

    // Close settings panel when clicking outside
    document.addEventListener('click', function(e) {
      const panel = document.getElementById('dashboard-settings-panel');
      if (!panel || panel.style.display === 'none') return;
      const cogBtn = e.target.closest('button[onclick*="toggleDashboardSettings"]');
      if (cogBtn) return;
      if (!panel.contains(e.target)) panel.style.display = 'none';
    });

    function setThemeColor(color) {
      const root = document.documentElement;
      const map = themeColorMap[color];
      if (!map) return;
      root.style.setProperty('--primary-color', color);
      root.style.setProperty('--primary-hover', map.hover);
      root.style.setProperty('--primary-subtle', map.subtle);
      root.style.setProperty('--primary-light', map.light);
      localStorage.setItem('hrp-theme-color', color);
      // Update active swatch indicator
      document.querySelectorAll('.theme-color-btn').forEach(btn => {
        btn.style.outline = '2px solid transparent';
        btn.style.outlineOffset = '0px';
      });
      const activeBtn = document.querySelector(`.theme-color-btn[onclick*="${color}"]`);
      if (activeBtn) {
        activeBtn.style.outline = '2px solid ' + color;
        activeBtn.style.outlineOffset = '3px';
      }
    }

    function toggleWidget(widgetId, checkboxEl) {
      const el = document.getElementById(widgetId);
      if (!el) return;
      const isChecked = checkboxEl.checked !== undefined ? checkboxEl.checked : checkboxEl;
      
      if (!isChecked) {
        el.style.display = 'none';
      } else {
        el.style.display = '';
      }
      
      // Save state
      const widgetStates = JSON.parse(localStorage.getItem('hrp-widget-states') || '{}');
      widgetStates[widgetId] = isChecked;
      localStorage.setItem('hrp-widget-states', JSON.stringify(widgetStates));
    }

    function restoreDashboardSettings() {
      // Restore theme color
      const savedColor = localStorage.getItem('hrp-theme-color');
      if (savedColor && themeColorMap[savedColor]) setThemeColor(savedColor);
      // Restore widget visibility
      const widgetStates = JSON.parse(localStorage.getItem('hrp-widget-states') || '{}');
      for (const [id, visible] of Object.entries(widgetStates)) {
        const el = document.getElementById(id);
        if (el) el.style.display = visible ? '' : 'none';
        // Sync checkbox
        const cb = document.querySelector(`input[onchange*="${id}"]`);
        if (cb) cb.checked = visible;
      }
    }

    // Init
    
  
// Initialize theme on page load
(function() {
  const savedTheme = localStorage.getItem('hrp-theme-color');
  if (savedTheme) {
    toggleTheme(savedTheme);
  }
})();