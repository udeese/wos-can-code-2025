using Microsoft.AspNetCore.Mvc;

namespace FirstMVC.Controllers;

public class RoutingController : Controller
{
    [HttpGet("about")]
    public ContentResult AboutUs()
    {
        return Content("Hello, you are at the About Us page.");
    }

    [HttpGet("services")]
    public IActionResult Services()
    {
        var content = "<h1>You are at the services page.</h1>";
        return Content(content, "text/html");
    }

    [HttpGet("products/{id}/{category}")]
    public IActionResult ProductDetails(int id, string category)
    {
        return Content($"Product {id}, Category {category}\nNew Line");
    }

    [HttpGet("contact")]
    public IActionResult Contact(string? message)
    {
        var content = "";
        if (message != null)
        {
            content = $"Hello to you too. {message} <br /> New Line";
        }
        else
        {
            content = "You are at the contact page.";
        }
        return Content(content, "text/html");
    }
}
