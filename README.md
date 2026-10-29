# HLUMIE'S NGO - Web Development POE (WEDE5020)

**Student Name:** Lihlumile Dumezweni  
**Student Number:** ST10507456  
**Module:** Web Development (WEDE5020)  
**Project:** HLUMIE'S NON-PROFIT ORGANIZATION FOR WOMEN  

---

## Project Overview
HLUMIE'S NGO is a multi-page web platform designed to empower women by providing access to emergency shelter, psychosocial support, legal advocacy, and educational resources. This repository tracks the full development lifecycle from Part 1 structure to Part 2 styling and responsive design.

---
## Changelog & Part 2 Feedback Corrections

### [2026-09-30] - Part 2 Feedback Improvements & Fixes
* **Typography Scaling:** Implemented fluid font-size adjustments inside `@media (max-width: 768px)` and `@media (max-width: 480px)` breakpoints across the stylesheet.
* **Responsive Image Handling:** Added a global `img { max-width: 100%; height: auto; display: block; }` rule and structured responsive image handling.
* **Interactive Pseudo-States:** Added comprehensive `:hover`, `:focus`, `:active`, and `:focus-visible` pseudo-classes to all interactive buttons, links, and form controls for improved accessibility.
* **Google Fonts Integration:** Linked Google Fonts (`Inter` and `Playfair Display`) via HTML `<link>` tags in the document head and defined custom font family CSS variables.
* **Changelog & Documentation:** Updated the README changelog with detailed, dated entries tracking all revision milestones.

## Project Structure & File Manifest
```text
WEB-POE-3/
│
├── index.html          # Home page (includes academic cover details, emergency links & core pillars)
├── about.html          # About Us page (history, mission, vision, timeline, budget, and references)
├── services.html       # Services page (comprehensive breakdown of NGO support offerings)
├── resources.html      # Resources page (downloadable toolkits, safety guides, and interactive map links)
├── contact.html        # Contact page (fully validated interactive enquiry form)
├── css/
│   └── style.css       # Shared stylesheet with custom variables, media queries & lightbox styling
├── js/
│   └── script.js       # Client-side JavaScript for form validation and dynamic image lightbox
└── image/
    └── logo.jpg        # Organization branding logo
