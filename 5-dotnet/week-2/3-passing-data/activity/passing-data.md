# Activity: Passing Data in MVC

In this activity, your group will explore how to pass data from a controller to a view using **ViewData**, **ViewBag**, and a **strongly-typed model**.

Each group should consist of three students. Divide up the tasks so that each member contributes to a different piece of the puzzle.

---

## Requirements

### 1. Use ViewData and ViewBag

- Add at least one value to **ViewData** in your controller.
- Add at least one value to **ViewBag** in your controller.
- Display both values in your view.
  _Hint: These are great for page titles, subtitles, or other bits of metadata._

### 2. Create a Model for a Strongly-Typed View

- Define a simple model class (e.g., `Bug`, `Task`, `Movie`, `Product`, etc.).
- Include at least 3–4 properties.
  _Hint: Use a mix of string, number, or boolean properties._

### 3. Instantiate the Model in the Controller

- In your controller action, create a **list** of model objects.
- Pass this list to your view using `return View(modelList);`.

### 4. Display the Model in the View

- Make the view strongly typed with `@model List<YourModel>`.
- Use a `foreach` loop to render the list items.
- Include **conditional rendering** for one property.
  _Hint: Example – show a “Completed” badge if a task is done, or highlight an item if it meets a condition._

---

## Bonus

### Partial View

- Extract the markup for a single list item into a **partial view**.
- Update your main view to render each item by calling the partial view.

---

## Styling

- You may use **Bootstrap** for quick styling, or create your own **custom CSS**.
- Consider adding classes for conditional states (e.g., “open/closed”, “high/low priority”).

---

## Deliverables

By the end of the activity, your group should have:

- A controller action that sets **ViewData**, **ViewBag**, and passes a **list of models**.
- A **strongly-typed view** that displays the list with conditional rendering.
- (Bonus) A **partial view** for rendering individual items.
