# Selection Listing Component

This project implements a reusable **selection listing component** using **Next.js**.  
The component includes custom checkbox styling and selection logic, including a master “All Pages” checkbox that controls all child checkboxes.

## 🔧 Tech Stack
- Next.js (App Router)
- React (Client Components)
- CSS Modules (for scoped styling)

## ✨ Features
- Custom UI with styled checkboxes
- “Select All” checkbox that toggles all items
- Individual page checkbox controls
- Fully client-side interactive (using "use client")
- No external UI libraries required

## 📁 Project Structure
- src/
- app/
- app/globals.css
- app/page.js
- app/page.module.css
- components/
- components/button/
- components/button/button.jsx
- components/button/button.module.css
- components/checkboxWithLabel/
- components/checkboxWithLabel/checkboxWithLabel.jsx
- components/checkboxWithLabel/checkboxWithLabel.module.css
- components/SelectionListing/
- components/SelectionListing/SelectionListing.jsx
- components/SelectionListing/SelectionListing.module.css
- components/SelectionListing/useSelectionListingCheckState.js


## 🖼 UI Preview
Below is the target design for the component:
<img width="1379" height="766" alt="image" src="https://github.com/user-attachments/assets/976a2835-280a-456a-8fcc-39f037448aba" />

## ▶ How to Run

Install dependencies: **npm install**

Run the development server: **npm run dev**

Open in browser: **http://localhost:3000**

## 📌 Notes
- Components with selection logic must be Client Components, so "use client" is required.
- Global selectors like hr, body, etc. must be placed inside globals.css (CSS Modules do not allow unscoped selectors).

## Codepen
Here’s the version without Next.js: https://codepen.io/misterifan/pen/OPNQxRp

## Demo
Here’s the demo deployed on Vercel: https://selection-listing-component.vercel.app
