# Webtel HR Pearls

A modern, **SaaS-inspired HR Portal** UI prototype built for Webtel Electrosoft Ltd. This is a complete front-end redesign of the legacy HR Pearls payroll/HR management system, reimagined as a clean, component-driven Single Page Application (SPA).

---

## 🚀 Latest Changes & Status

### Premium SaaS Design System (Phase 2 Finalized)
- **Global Heading Standardization:** Swept across all 40+ pages to extract inline `<h2>` tags from cards and implemented a unified, premium `.page-title` block (Header + Subtitle) at the top of every page.
- **Form Grid Optimization:** Converted legacy, single-column stacked forms (like Outduty Approval, Reimbursement Approval, Personal Details) into modern, responsive CSS Grids (2 and 3 columns) to maximize horizontal screen real estate.
- **Redundant UI Cleanup:** Hunted down and removed duplicate static "Approve/Reject" buttons from all approval pages, completely shifting reliance to the sleek, unified Floating Action Bar for bulk processing.
- **Reports Dashboard Completed:** Built and integrated the remaining complex report formats (My Daily Attendance, Tickets, Roster, Appraisals) with the unified SaaS aesthetic.
- **Calm Design Framework:** Complete CSS rewrite shifting the interface to a lighter, premium aesthetic inspired by Linear and Stripe. Features new CSS variable tokens, subtle borders, deep shadow elevations, pill badges, and custom scrollbars.
- **Phosphor Icon Migration:** Globally deprecated all FontAwesome icons across all files, replacing them with modern, thin-outline **Phosphor Icons** (`ph-`).
- **Split Bento Sidebar:** Redesigned the monolithic sidebar into a modern, two-part floating layout: a scrollable navigation container on top, and a fixed "Profile Bento" card displaying user initials, role, and quick-links at the bottom.
- **Fluid Layout Refinement:** Eliminated "dead space" inside cards globally by removing hard `max-width` constraints, ensuring data grids and forms utilize horizontal space gracefully.

---

## 🏗️ Architecture

```
webtel-hrpearls/
├── index.html          # SPA shell — global sidebar + content router
├── index.css           # Complete design system (tokens, components, utilities)
├── package.json        # Vite dev server config
├── pages/              # Modular HTML templates loaded dynamically (40+ Files)
│   ├── home.html               # Dashboard with KPIs, leave report, team details
│   ├── view.html               # My Profile hub (Profile + Change Password + Details)
│   ├── details-*.html          # 10+ Self-Service Detail Pages (Accident, Income, Punch)
│   ├── approve-*.html          # 13 Manager Approval Pages (Leaves, Expenses, Exit)
│   ├── report-*.html           # 6 HR Report Dashboards (Attendance, Tickets)
│   ├── view-*.html             # 14 Admin Setup Pages (Shifts, Appraisals, Masters)
│   └── investment.html         # 4-Step Investment Declaration Wizard
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

---

## 🎨 Design System

### CSS Tokens (defined in `index.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--primary-color` | `#4f46e5` | Vibrant Indigo — buttons, links, accents |
| `--text-main` | `#1e293b` | Primary body text |
| `--text-secondary` | `#475569` | Supporting text |
| `--text-muted` | `#94a3b8` | Disabled/tertiary text |
| `--border-color` | `#e2e8f0` | Card/input borders |
| `--border-light` | `#f1f5f9` | Subtle separators, readonly fields |
| `--bg-app` | `#f8fafc` | Global body background |
| `--bg-card` | `#ffffff` | White card background |

### Component Classes

| Class | Description |
|-------|-------------|
| `.card` | Bordered container with padding and border-radius |
| `.btn-primary` | Filled vibrant indigo button |
| `.btn-secondary` | Outlined/ghost button |
| `.form-control` | Text inputs, selects, textareas |
| `.page-title` | Global header structure for all pages |
| `.table` | Styled data table with subtle borders |
| `.badge` | Inline pill-shaped status badges |
| `.floating-action-bar`| Bulk action bar used in Approval screens |

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
- [ ] Implement Major IA UX Architecture Changes (Role-Based Hubs)
- [ ] Backend API integration
