# Doodles of Doodles: Style Guide

This style guide will help you recreate the design of the "Doodles of Doodles" practice assessment based on the provided screenshot. There is no starter code—use this as a reference to guide your own HTML and CSS from scratch.

---

## 🎨 Color Palette

| Element                  | Color        | Hex Code  |
| ------------------------ | ------------ | --------- |
| Page Background          | Mint Cream   | `#e2ece9` |
| Text Color               | Sage 12      | `#1a211e` |
| Section Borders          | Sage 8       | `#b8bcba` |
| Card Background          | Sage 1       | `#fbfdfc` |
| Accent (Buttons, Links)  | Light Blue   | `#bee1e6` |
| CTA Button               | Mimi Pink    | `#fad2e1` |
| Cookie Banner Background | Lavender Web | `#dfe7fd` |

---

## 🖋 Fonts

Use Google Fonts:

- **Heading Font:** [Merriweather](https://fonts.google.com/specimen/Merriweather)
- **Body Font:** [Open Sans](https://fonts.google.com/specimen/Open+Sans)

Import both fonts in your CSS using `@import` or `<link>`.

---

## 📐 Layout

- The main layout uses a **flex container** with two primary columns:
  - `aside` (left column)
  - `main` (right column)
- Set a fixed width (`1280px`) and center the layout with `margin: 0 auto`.
- Use padding of `1.25rem` inside section blocks.
- Use `gap: 1.25rem` between major layout elements.

---

## 🧱 Structure Guidelines

### Header

- Horizontal layout with logo on the left and button on the right.
- Bottom border (`1px solid #b8bcba`)
- Padding: `1rem 1.25rem`
- CTA button uses Mimi Pink.

### Aside

- Fixed width of `20rem`.
- Vertical sections: Search, Vote, Recent Doodles.
- Each section has a bottom border (except the last).
- `Recent Doodles` includes image, heading, and like button with count.

### Main

- Contains “Doodle of the Day” section.
- Layout: image (`<figure>`) and description (`<article>`) side-by-side.
- Article content is vertically spaced using `flex-direction: column`.
- Use subtle border and border-radius for the doodle card container.

### Cookie Banner

- Fixed to bottom-left.
- Width: 90% of page
- Padding: `1.25rem`
- Background: `#dfe7fd`
- Includes a heading, paragraph, and right-aligned “Accept” button.

---

## 📸 Images

- All doodles should be `display: block` and `width: 100%` within their container.
- Add a soft border radius to cards and containers (`0.5rem`).
- Each featured doodle includes a title and artist name in the sidebar.

---

## 🎛 Form Elements

- Search input and dropdown should share styling:
  - Background: `#fbfdfc`
  - Padding: `0.25rem`
  - Line height: `1.5`
- Buttons use light blue by default; the CTA uses pink.
- Remove default borders and use soft 1px borders where needed.

---

## 🔘 Buttons

- All buttons use consistent padding: `0.25rem 1rem`
- Use `line-height: 1.5` and `vertical-align: middle`

---

## ❤️ Like Counters

- Each doodle card shows a heart icon with a number.
- Clicking the heart increases the count (one per doodle).
- Heart and number are aligned with `flex` and spaced with a small `gap`.

---

## ✅ Bonus Tips

- Use semantic HTML5 elements (`<header>`, `<main>`, `<aside>`, `<section>`, `<figure>`, `<article>`)
- Use utility classes or consistent spacing throughout (`gap`, `margin-bottom`)
- Validate your HTML and CSS using W3C tools

---

Build carefully, reference your screenshot, and have fun! 🐾
