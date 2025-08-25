# Choose Your Own Adventure Routing Activity

## Overview

In this activity, you will build a simple "Choose Your Own Adventure" style web application using ASP.NET Core MVC. The app will guide users through a series of choices, where each decision leads to a different route and outcome. This exercise focuses on understanding and implementing attribute-based routing to control navigation within an MVC application.

## Learning Objectives

- Understand attribute-based routing in ASP.NET Core MVC.
- Create controller actions that respond to specific routes.
- Pass parameters through routes to create dynamic navigation.
- Build a simple interactive web application that responds to user choices by returning Content.

## Instructions

1. **Set up the project:**
   If you haven't already, create a new ASP.NET Core MVC project.

2. **Create a Controller:**
   Add a new controller named `AdventureController`.

3. **Define Routes:**
   Use attribute routing to define the routes for each part of the adventure. For example:

   ```csharp
   [Route("adventure/start")]
   public IActionResult Start() { ... }
   ```

4. **Implement the Story Logic:**
   Each action method should return `Content` that presents the user with choices. Each choice should link to another route that corresponds to the next part of the story.

5. **Pass Parameters:**
   Use route parameters to capture user choices and determine the next step in the story.

6. **Test the Application:**
   Run the app and navigate through the adventure by clicking on links to ensure routing works as expected.

## Example

```csharp
[Route("adventure/start")]
public IActionResult Start()
{
    string content = "You are in a dark forest. Do you go <a href='/adventure/choice/left'>left</a> or <a href='/adventure/choice/right'>right</a>?";
    return Content(content, "text/html");
}

[Route("adventure/choice/{direction}")]
public IActionResult Choice(string direction)
{
    string content = "";
    if (direction == "left")
    {
        content = "You encounter a river. Do you <a href='/adventure/choice/swim'>swim</a> or <a href='/adventure/choice/raft'>build a raft</a>?";
    }
    else if (direction == "right")
    {
        content = "You find a cave. Do you <a href='/adventure/choice/enter'>enter</a> or <a href='/adventure/choice/walkpast'>walk past</a>?";
    }
    return Content(content, "text/html");
}
```

## Extra Challenges

- Add more complex branching paths with multiple choices.
- Use query parameters instead of route parameters.
