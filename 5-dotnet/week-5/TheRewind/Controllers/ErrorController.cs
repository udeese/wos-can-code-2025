// Controllers/ErrorController.cs

using Microsoft.AspNetCore.Mvc;

namespace TheRewind.Controllers;

public class ErrorController : Controller
{
    [HttpGet("error/{code}")]
    public IActionResult Handle(int code)
    {
        if (code == 404)
        {
            // Serve a custom view for 404 errors
            return View("PageNotFound");
        }
        else if (code == 401)
        {
            // Serve a custom view for 401 errors
            return View("Unauthorized");
        }
        else if (code == 403)
        {
            // Serve a custom view for 403 errors
            return View("Forbidden");
        }

        // Optional: handle other codes
        return View("ServerError");
    }

    [HttpGet("error/boom")]
    public IActionResult Boom()
    {
        // This is a test method that will intentionally throw a 500 error.
        // It's a useful way to test our custom error page without introducing a bug.
        return new StatusCodeResult(500);
    }
}
