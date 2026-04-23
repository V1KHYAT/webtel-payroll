# Webtel HR Pearls

A modern, **Notion-inspired HR Portal** UI prototype built for Webtel Electrosoft Ltd. This is a complete front-end redesign of the legacy HR Pearls payroll/HR management system, reimagined as a clean, document-centric Single Page Application (SPA).

---

## 🚀 Latest Changes & Status

### Core Features Overhauled (Latest Update)
- **Approve Requisitions Complete (13 Pages):** Built and wired all 13 approval pages (e.g. Leave, Expense, Overtime, Clearance) replacing old teal styles with a Premium Notion-inspired design system. Populated key modules like Expense and Leave with functional mock data tables.
- **Bulk Floating Action Bar (FAB):** Engineered a dynamic, sticky frosted-glass action drawer. When managers select multiple rows in huge tables, the FAB smoothly slides up, offering immediate access to `APPROVE ALL` and `REJECT ALL` buttons.
- **Advanced "View Profile" Modal:** Upgraded the legacy profile view into an expansive, segmented pop-up interface housing Personal, Statutory, Contact, and structured Family Relationship data tables.
- **Dashboard Refinement & Bug Fixes:** Removed the Quick Shortcuts widget to maintain a strictly minimalist dashboard overview. Standardized global JavaScript `switchTab()` functions to resolve tab-switching bugs inside nested wizard modes (like the Edit Profile module).
- **Navigation Redesign:** Reorganized the primary Sidebar schema, explicitly bisecting "Self Service" utilities from "HR Admin" configurations.

- **Next Steps:** Implement advanced interactions (Glass-morphic Side Drawers over PDF links, customized Empty State SVGs, Skeleton loading) and systematically tackle the 'Reports' dashboard implementation.

- **Notion-inspired**: Clean, minimal, white-space-focused interface with a persistent sidebar
- **Webtel Corporate Blue** (`#0284c7`) accent throughout
- **Inter font family** for modern, professional typography
- **Design Language** — Pure flat, editorial design language
- **Fluid layouts** that maximize horizontal screen real estate

---

## 🏗️ Architecture

```
webtel-hrpearls/
├── index.html          # SPA shell — global sidebar + content router
├── index.css           # Complete design system (tokens, components, utilities)
├── package.json        # Vite dev server config
├── pages/              # Modular HTML templates loaded dynamically
│   ├── home.html               # Dashboard with KPIs, leave report, team details
│   ├── view.html               # My Profile hub (merged: profile + password + personal details)
│   ├── view-suggestions.html   # Send Your Suggestions
│   ├── view-holiday.html       # Select Your Holiday
│   ├── view-compoff.html       # Assign Compensatory Off
│   ├── view-helpdesk.html      # Ticket Help Desk
│   ├── view-documents.html     # Upload Documents
│   ├── view-loan.html          # Loan And Advance Request
│   ├── view-activities.html    # Extra Curricular Activities
│   ├── view-shift-import.html  # Assign Shift Through Import
│   ├── view-category-master.html   # Category Master (PMS)
│   ├── view-category-param.html    # Create Category Parameter
│   ├── view-appraisal.html         # Create Period, Appraisee And Appraiser
│   ├── view-shortlist.html         # Shortlist And Rate Candidate
│   ├── view-assign-shift.html      # Assign Shift To Employee's
│   ├── view-weekly-off.html        # Assign Weekly Off To Employee's
│   ├── details.html            # Leave Requisition (Details section)
│   ├── approve.html            # Leave Approval (Approve Requisitions section)
│   └── reports.html            # Daily Attendance Report (Reports section)
└── public/
    ├── favicon.svg
    └── icons.svg
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

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build
```

---

## 🧩 Key Features

### Navigation
- **Global Notion-style sidebar** with expandable dropdown sections
- **Active state highlighting** with Webtel Blue accent
- **SPA routing** — all pages load dynamically via `fetch()`, no full-page reloads

### View Section (17 pages)
| Category | Pages |
|----------|-------|
| **Account** | My Profile (merged hub with collapsible Change Password & Edit Profile) |
| **Requests & Help** | Suggestions, Holiday Selection, Comp Off, Help Desk |
| **Documents & Finance** | Upload Documents, Loan & Advance Request |
| **HR Admin** | Extra Curricular Activities, Shift Import, Category Master, Category Parameter, Appraisal Period/Appraisee, Shortlist Candidates, Assign Shifts, Weekly Off |

### Other Sections
- **Dashboard** — KPI cards, leave balance bars, team directory, documents & links
- **Details** — Leave requisition with calendar-based request form
- **Approve Requisitions** — 13 complete manager approval workflows with unified styling and bulk-action processing
- **Reports** — Daily attendance with date-range search

---

## 🎨 Design System

### CSS Tokens (defined in `index.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--primary-color` | `#0284c7` | Webtel corporate blue — buttons, links, accents |
| `--text-main` | `#1e293b` | Primary body text |
| `--text-secondary` | `#475569` | Supporting text |
| `--text-muted` | `#94a3b8` | Disabled/tertiary text |
| `--border-color` | `#e2e8f0` | Card/input borders |
| `--border-light` | `#f1f5f9` | Subtle separators, readonly fields |
| `--sidebar-bg` | `#f4f9fd` | Sidebar background tint |
| `--accent-green` | `#10b981` | Success states |
| `--accent-red` | `#ef4444` | Error/danger states |
| `--accent-orange` | `#f59e0b` | Warning/pending states |

### Component Classes

| Class | Description |
|-------|-------------|
| `.card` | Bordered container with padding and border-radius |
| `.btn-primary` | Filled blue button |
| `.btn-secondary` | Outlined/ghost button |
| `.form-control` | Text inputs, selects, textareas |
| `.form-group` | Label + input wrapper |
| `.table` | Styled data table |
| `.table-wrapper` | Scrollable table container |
| `.badge` / `.badge-green` | Inline status badges |
| `.tab-btn` | Tab bar button |
| `.tab-panel` | Tab content panel |
| `.notion-sidebar` | Global sidebar |
| `.notion-nav` | Sidebar navigation links |
| `.notion-submenu` | Expandable sidebar sub-items |
| `.notion-group` | Sidebar section label |

---

## 📋 Developer Notes

### Adding a New Page

1. Create `pages/your-page.html` (HTML fragment — no `<html>`, `<head>`, or `<body>` tags)
2. Add a sidebar link in `index.html`:
   ```html
   <a href="#" onclick="loadSubPage('your-page', this)">
     <i class="fa-solid fa-icon-name"></i> Page Title
   </a>
   ```
3. Use the existing CSS classes (`.card`, `.form-group`, `.btn-primary`, `.table`, etc.)

### Global JavaScript Functions (defined in `index.html`)

| Function | Purpose |
|----------|---------|
| `loadPage(name)` | Load a top-level page and set sidebar active state |
| `loadSubPage(name, element)` | Load a sub-page and highlight it in the sidebar |
| `toggleSection(name, element)` | Expand/collapse a sidebar dropdown |
| `togglePanel(id)` | Toggle accordion sections within loaded pages |
| `switchTab(tabId, btn)` | Switch between tab panels within a page |

### Important Constraints

- **No `<script>` tags inside page templates** — They won't execute when loaded via `innerHTML`. All JS functions must be defined globally in `index.html`.
- **External Dependencies** — FontAwesome 6.4 (CDN), Google Fonts Inter (CDN). No npm runtime dependencies.
- **State** — No client-side state management. This is a UI prototype. Backend integration will require replacing the static HTML with dynamic data binding.

---

## 🛣️ Roadmap

- [ ] Migrate remaining Details sub-pages (Tour Request, Income Details, Salary Slip, etc.)
- [x] Migrate remaining Approve Requisitions sub-pages
- [ ] Migrate remaining Reports sub-pages
- [ ] Add Investment Declaration page
- [ ] Implement role-based sidebar visibility (Employee vs HR Admin)
- [ ] Add breadcrumb navigation bar
- [ ] Add toast notification system for form actions
- [ ] Client-side form validation
- [ ] Backend API integration

---

## 📄 License

Proprietary — Webtel Electrosoft Ltd. Internal use only.
