# Qrynto Tech website: audit report (October 2026)

Scope: 22 pages, 13 screen widths (320 to 1920 px), desktop and mobile.

| Check | Result |
|---|---|
| HTML validation (html-validate) | 0 errors |
| Accessibility (axe-core, WCAG 2.1 AA) | 0 violations, desktop and mobile |
| Lighthouse mobile performance | 87 to 90 (was 66 to 70) |
| Lighthouse desktop performance | 99 to 100 |
| Lighthouse accessibility / best practices / SEO | 100 / 100 / 100 |
| Layout shift (CLS) | 0 on all pages |
| Horizontal scroll / clipped text, 13 widths | none |
| JavaScript errors / missing files | none |
| Keyboard: focus visible on every stop, dropdowns reachable | pass |
| WCAG 1.4.12 text spacing | pass |
| Windows high-contrast mode | pass |
| JavaScript disabled | navigation and content still available |
| Print | header, buttons and forms hidden |
| Spelling | no errors (British English) |
| Total page weight (home) | 378 KB (was 809 KB) |

Not testable in this environment: real Safari/Firefox engines (reviewed by CSS
feature support instead; supported from iOS 15 / Safari 15 and current Firefox),
live server compression (configured in .htaccess), and external links (wa.me, tel:, mailto: formats checked).
