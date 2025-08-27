# Activity: Bug Board — Passing Data in MVC

In this activity, your group will build a single page of a mini **Bug Tracker** called **Bug Board**. You’ll practice passing data from a controller to a view using **ViewData**, **ViewBag**, and a **strongly‑typed model**. You’ll also practice **conditional rendering** and (bonus) a **partial view** per list item.

Each group has **three students**. Suggested roles:

- **Modeler** — ensures model compiles, advises on properties (we provide the class code below).
- **Controller** — seeds data and passes it to the view, sets ViewData / ViewBag.
- **Viewsmith** — builds the strongly‑typed view, conditional UI, and bonus partial.

---

## Provided Model (copy into `Models/Bug.cs`)

> ✅ You may paste this verbatim. All other sections below should be implemented without copying full solutions—follow the requirements and hints.

```csharp
namespace MvcApp.Models
{
    public enum Severity { Low, Medium, High, Critical }

    public class Bug
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public Severity Severity { get; set; }
        public bool IsOpen { get; set; }
        public string? Owner { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
```

---

## Requirements

### 1) Controller & Routing

- Create a controller named **`BugsController`** with an action **`Index()`** that returns a view.
- Inside `Index()`:
  - **Seed a list** of at least **5** `Bug` objects with a variety of values:
    - Mix of `Severity` values (`Low`, `Medium`, `High`, `Critical`)
    - Mix of `IsOpen` being `true` and `false`
    - Some with `Owner`, at least one **unassigned** (`Owner = null`)
  - Set the following:
    - `ViewData["Title"] = "Bug Board"`
    - `ViewBag.Subtitle = "Sprint Triage"`
    - `ViewData["OpenCount"] =` (the number of bugs where `IsOpen` is true)
  - **Pass** the list to the view using `return View(yourList);`

**Hints**

- _Think in terms of “page metadata” (title, subtitle, counts) for `ViewData` / `ViewBag`._
- _If you’re unsure how to count open bugs, look up LINQ methods like `Count` with a predicate._

---

### 2) Strongly‑Typed View

- Create a view at `Views/Bugs/Index.cshtml`.
- Make it **strongly‑typed**: `@model List<Bug>`
- Display at the top:
  - An `<h1>` using `@ViewData["Title"]`
  - A subtitle paragraph using `@ViewBag.Subtitle`
  - A short line: `X open bugs` using `ViewData["OpenCount"]`
- Render the **list of bugs** using a `foreach` loop.

**Conditional Rendering (must-have)**

- Show a visible **status badge**:
  - If `IsOpen == true` → show **OPEN**
  - Else → show **FIXED**
- Visually **emphasize critical/high** bugs (e.g., extra border, icon, bold text).
- For **unassigned** bugs (`Owner == null`), display something like **“Unassigned”**.

**Hints**

- _Use simple class names like `bug critical open` to style via CSS or Bootstrap utilities._
- _You can compute small helper strings inside Razor, e.g., `var sev = bug.Severity.ToString().ToLower();`_

---

### 3) Styling (choose one)

- **Bootstrap** (recommended for speed): use utility classes for badges, borders, and spacing.
- **Custom CSS**: add a small `<style>` block in the view or a scoped stylesheet.

**Minimum styling**: list items should be visually distinct (spacing, border/background) and the status badge should be easy to spot.

**Hints**

- _Bootstrap: `badge`, `text-bg-danger`, `border`, `rounded`, `mb-2` can go a long way._
- _Custom CSS: define `.bug-list`, `.bug`, `.badge`, `.critical`, `.high`, `.open`, `.closed`._

---

## Bonus (Partial View)

### 4) Partial per List Item

- Create a partial view named **`_BugItem.cshtml`** in `Views/Bugs/`.
- The partial should be **strongly‑typed** to a single `Bug`.
- Move the **markup for a single list item** from `Index.cshtml` into this partial.
- In `Index.cshtml`, replace the inline markup with a call to the partial for each item.

**Hints**

- _Signature: `@model MvcApp.Models.Bug` inside the partial._
- _Call from parent view with `@await Html.PartialAsync("_BugItem", bug)` or `@Html.Partial("_BugItem", bug)`._

---

## Deliverables Checklist

Your submission should include:

- [ ] `Models/Bug.cs` present (as provided) and compiled.
- [ ] `BugsController.Index()` seeds **≥ 5** diverse `Bug` instances and passes the list to the view.
- [ ] Uses **both** `ViewData` and `ViewBag` (with the keys above).
- [ ] `Views/Bugs/Index.cshtml` is **strongly‑typed** to `List<Bug>`.
- [ ] View displays title, subtitle, and open bug count from `ViewData` / `ViewBag`.
- [ ] List renders with **conditional** elements (OPEN/FIXED, severity emphasis, Unassigned fallback).
- [ ] **Styling** present (Bootstrap or custom) that clearly differentiates items and states.
- [ ] (**Bonus**) `_BugItem.cshtml` partial created and used to render each item.

---

## Stretch (optional if you finish early)

- Add a query string filter `?openOnly=true` that shows only open bugs.
- Sort bugs by severity, then by `CreatedAt`.
- Add a small legend showing what each severity means.

---

## What to Submit

- A short README note or comment in the controller describing **who did what** (roles).
- Screenshots of the **Bug Board** page demonstrating conditional rendering (one open, one fixed, one unassigned, one critical).
