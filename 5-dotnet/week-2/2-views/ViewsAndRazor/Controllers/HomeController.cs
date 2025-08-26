using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewsAndRazor.Models;

namespace ViewsAndRazor.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("about")]
    public IActionResult About()
    {
        // explicit naming of view
        return View("AboutUs");
    }

    [HttpGet("conditionals")]
    public IActionResult Conditionals()
    {
        return View();
    }

    [HttpGet("loops")]
    public IActionResult Loops()
    {
        return View();
    }

    [HttpGet("privacy")]
    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(
            new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier }
        );
    }
}
