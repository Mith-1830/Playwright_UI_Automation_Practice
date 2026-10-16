# Playwright UI Automation Practice

A complete Playwright + TypeScript test suite covering all 30 sections
of the [Sreenidhi Rajakrishnan Practice Playground](https://www.sreenidhirajakrishnan.com/practice).

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Test Coverage — 30 Sections

| Section | Topic | Status |
|---------|-------|--------|
| 03 | Checkboxes & Radio Buttons | ✅ |
| 04 | Dropdowns | ✅ |
| 05 | Locator Practice | ✅ |
| 06 | Dynamic Content | ✅ |
| 07 | Waits & Synchronisation | ✅ |
| 08 | Table Automation | ✅ |
| 09 | Alerts | ✅ |
| 10 | Modals | ✅ |
| 11 | iFrame | ✅ |
| 12 | Shadow DOM | ✅ |
| 13 | Drag and Drop | ✅ |
| 14 | Hover Menu | ✅ |
| 15 | Tooltip | ✅ |
| 16 | File Upload | ✅ |
| 17 | Download | ✅ |
| 18 | Hidden Elements | ✅ |
| 19 | Scroll Testing | ✅ |
| 20 | Multiple Windows | ✅ |
| 21 | Authentication | ✅ |
| 22 | Stale Element | ✅ |
| 23 | Dynamic List | ✅ |
| 24 | Network Delay | ✅ |
| 25 | Flaky Elements | ✅ |
| 26 | Keyboard Actions | ✅ |
| 27 | Slider | ✅ |
| 28 | Date Picker | ✅ |
| 29 | Resizable Element | ✅ |
| 30 | Complex DOM Structure | ✅ |

## Concepts Practiced
- Every locator strategy: id, class, name, data-testid, aria-label, XPath, CSS
- Dynamic element handling and explicit waits
- Browser alerts, modals, iFrames, Shadow DOM
- Drag & drop, hover menus, tooltips
- File upload and download
- Multi-tab handling
- Stale element simulation
- Flaky test handling with retries
- Table sorting, filtering, pagination
- Keyboard actions
- Page Object Model ready structure

## How to Run

### Install dependencies
npm install

### Install browsers
npx playwright install

### Run all tests
npx playwright test

### Run specific section
npx playwright test Section8Tables.spec.ts

### Run with browser visible
npx playwright test --headed

### View HTML report
npx playwright show-report
