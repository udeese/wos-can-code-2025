using Microsoft.AspNetCore.Mvc;

namespace ErrorHandling.Controllers;

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
            return View("Unauthorized");
        }
        else if (code == 403)
        {
            return View("Forbidden");
        }

        // Optional: handle other codes
        return View("ServerError");
    }

    [HttpGet("error/not-found")]
    public IActionResult IntentionalNotFound()
    {
        return new StatusCodeResult(404);
    }

    [HttpGet("error/unauthorized")]
    public IActionResult IntentionalUnauthorized()
    {
        return new StatusCodeResult(401);
    }

    [HttpGet("error/forbidden")]
    public IActionResult IntentionalForbidden()
    {
        return new StatusCodeResult(403);
    }

    [HttpGet("error/boom")]
    public IActionResult Boom()
    {
        // This is a test method that will intentionally throw a 500 error.
        // It's a useful way to test our custom error page without introducing a bug.
        return new StatusCodeResult(500);
    }
}
