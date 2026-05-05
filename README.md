# Webtel HR Pearls

A modern, **SaaS-inspired HR Portal** UI prototype built for Webtel Electrosoft Ltd. This is a complete front-end redesign of the legacy HR Pearls payroll/HR management system, reimagined as a clean, component-driven Single Page Application (SPA).

---

## 🚀 Latest Changes & Status

### Phase 3 — Dashboard Customization & Responsiveness
- **Dynamic Accent Theming:** Users can switch between 8 curated accent colors (Indigo, Sky Blue, Blue, Purple, Emerald, Cyan, Rose, Slate) via a settings panel. Theme selection persists in `localStorage`.
- **Fluid Dashboard Layout:** Rebuilt the dashboard from rigid CSS Grid into a **Flexbox wrap** architecture. KPI cards, Leave Utilization, Recent Activity, My Team, and Quick Links all live in a unified `.dashboard-grid` container.
  - Hiding a KPI card causes remaining cards to **expand and fill the row** automatically.
  - Hiding Quick Links no longer stretches Recent Activity — panels stay contained.
- **Individual Widget Toggles:** Each KPI card (Training Target, Pending Approvals, Earned Leave, Upcoming Holiday) and section (Leave Utilization, My Team, Recent Activity, Quick Links) can be independently toggled on/off. States persist in `localStorage`.
- **Responsive Breakpoints:** Added full media queries for **desktop**, **tablet (1024px)**, **mobile (768px)**, and **small mobile (480px)** — including horizontal sidebar navigation, stacking widgets to single column, and responsive modals/wizards.
- **Edit Profile Overhaul:** The Edit Profile wizard modal now contains fully populated forms for all 7 sections:
  - Personal Details, Address Information, Family Details (with children detail table), Phone & Email, Emergency Contacts (dual contact layout), Passport Information, Other Information (including resume upload and previous experience).

### Phase 2 — Premium SaaS Design System
- **Global Heading Standardization:** Swept across all 40+ pages to implement a unified `.page-title` block.
- **Form Grid Optimization:** Converted legacy single-column forms into responsive CSS Grids (2 and 3 columns).
- **Redundant UI Cleanup:** Removed duplicate static buttons, shifting to the unified Floating Action Bar.
- **Reports Dashboard Completed:** Built and integrated complex report formats with the unified SaaS aesthetic.
- **Calm Design Framework:** Complete CSS rewrite with subtle borders, deep shadow elevations, pill badges, and custom scrollbars.
- **Phosphor Icon Migration:** Globally replaced FontAwesome with modern **Phosphor Icons** (`ph-`).
- **Split Bento Sidebar:** Two-part floating layout: scrollable nav + fixed Profile Bento card.

---

## 🏗️ Architecture

```
webtel-hrpearls/
├── index.html          # SPA shell — global sidebar + content router + JS logic
├── index.css           # Complete design system (tokens, components, responsive queries)
├── package.json        # Dev server config
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── pages/          # Modular HTML templates loaded dynamically (40+ Files)
│       ├── home.html               # Dashboard — fluid KPI grid, leave report, team, activity
│       ├── view.html               # My Profile hub (Profile + Edit Wizard + Change Password)
│       ├── details-*.html          # 10+ Self-Service Detail Pages
│       ├── approve-*.html          # 13 Manager Approval Pages
│       ├── report-*.html           # 6 HR Report Dashboards
│       ├── view-*.html             # 14 Admin Setup Pages
│       └── investment.html         # 4-Step Investment Declaration Wizard
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/V1KHYAT/webtel-payroll.git
cd webtel-payroll

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Quick Start (No Build)

You can also open `index.html` directly with any static file server:

```bash
npx -y live-server --port=5500
```

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build
```

---

## 🧩 Key Features

### Dashboard Customization
- **Accent Color Picker** — 8 curated colors, persisted in `localStorage`
- **Widget Visibility Toggles** — Show/hide individual KPI cards and sections
- **Fluid Grid Reflow** — Remaining widgets auto-resize when others are hidden

### Navigation
- **Global Sidebar** with expandable dropdown sections
- **SPA routing** — all pages load dynamically via `fetch()`, no full-page reloads

### Section Breakdown (40+ pages)
| Category | Description |
|----------|-------------|
| **Details (Self-Service)** | Leaves, Outduty, References, Accidents, Other Income, Team Punch, Activities, and all variations of Salary Slips. |
| **Approve Requisitions (Manager)** | 13 complete approval workflows (Leaves, Reimbursements, Exits, Clearance, Overtime) with a global Floating Action Bar for bulk processing. |
| **Reports** | Daily Attendance, Tickets Helpdesk, Rosters, Employee Assessments, and Feedback. |
| **Operations & Setup (Admin)** | Extra Curricular Activities, Shift Import, Category Master, Appraisal Period/Appraisee Setup, Shortlisting. |
| **Investment Declaration** | Premium 4-step wizard for populating Section 80C and Other Deductions. |
| **Edit Profile Wizard** | 7-tab modal covering Personal Details, Address, Family, Phone & Email, Emergency Contacts, Passport, and Other Info. |

---

## 🎨 Design System

### CSS Tokens (defined in `index.css`)

| Token | Default | Usage |
|-------|---------|-------|
| `--primary-color` | `#4f46e5` | Vibrant Indigo — buttons, links, accents (user-swappable) |
| `--primary-hover` | `#4338ca` | Darker shade for hover states |
| `--primary-subtle` | `rgba(79,70,229,0.08)` | Tinted backgrounds |
| `--text-main` | `#0f172a` | Primary body text |
| `--text-secondary` | `#475569` | Supporting text |
| `--text-muted` | `#94a3b8` | Disabled/tertiary text |
| `--border-color` | `#e2e8f0` | Card/input borders |
| `--border-light` | `#f1f5f9` | Subtle separators |
| `--bg-app` | `#f8f9fb` | Global body background |
| `--bg-card` | `#ffffff` | White card background |

### Component Classes

| Class | Description |
|-------|-------------|
| `.card` | Bordered container with padding and border-radius |
| `.btn-primary` | Filled vibrant accent button |
| `.btn-secondary` | Outlined/ghost button |
| `.form-control` | Text inputs, selects, textareas |
| `.page-title` | Global header structure for all pages |
| `.table` | Styled data table with subtle borders |
| `.badge` | Inline pill-shaped status badges |
| `.floating-action-bar` | Bulk action bar used in Approval screens |
| `.dashboard-grid` | Flex-wrap container for dashboard widgets |
| `.widget-kpi` | Flex item for KPI cards (~25% width, grows to fill) |
| `.widget-main` | Flex item for primary panels (~65% width) |
| `.widget-side` | Flex item for sidebar panels (~30% width) |

### Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `> 1200px` | Full desktop — 4 KPIs across, 2-column content |
| `≤ 1200px` | Narrower sidebar, tighter padding |
| `≤ 1024px` | Widgets stack to full width |
| `≤ 768px` | Sidebar collapses to horizontal nav bar, single column, responsive modals |
| `≤ 480px` | KPIs stack to full width, reduced padding |

---

## 📋 Developer Notes

### Adding a New Page

1. Create `public/pages/your-page.html` (HTML fragment — no `<html>`, `<head>`, or `<body>` tags)
2. Add a `div.page-title` at the very top of the file for standardization.
3. Add a sidebar link in `index.html`:
   ```html
   <a href="#" onclick="loadSubPage('your-page', this)">
     <i class="ph ph-icon-name"></i> Page Title
   </a>
   ```

### Dashboard Widget Customization

Widget visibility is controlled by:
- **HTML**: Each widget has a unique `id` (e.g., `kpi-training`, `widget-leave`)
- **Settings Panel**: Checkbox toggles call `toggleWidget(id, checkbox)` in `index.html`
- **Persistence**: States saved in `localStorage` under key `hrp-widget-states`
- **Theme**: Accent color saved under key `hrp-theme-color`

### Important Constraints
- **No `<script>` tags inside page templates** — They won't execute when loaded via `innerHTML`. All JS functions must be defined globally in `index.html`.
- **External Dependencies** — Phosphor Icons (CDN), Google Fonts Inter (CDN). No npm runtime dependencies.

---

## 🛣️ Roadmap
- [x] Migrate remaining Details sub-pages
- [x] Migrate remaining Approve Requisitions sub-pages
- [x] Migrate remaining Reports sub-pages
- [x] Add Investment Declaration page
- [x] Implement Global Title Standardization & Grid Optimizations
- [x] Dashboard Customization (Theming + Widget Toggles)
- [x] Responsive Breakpoints for Mobile/Tablet
- [x] Edit Profile Form Completion (all 7 sections)
- [ ] Implement Major IA UX Architecture Changes (Role-Based Hubs)
- [ ] Backend API integration
