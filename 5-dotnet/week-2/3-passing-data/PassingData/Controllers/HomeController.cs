using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PassingData.Models;
using PassingData.ViewModels;

namespace PassingData.Controllers;

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

    [HttpGet("passing-data")]
    public IActionResult PassingData()
    {
        // ViewData
        ViewData["ProductName"] = "Gaming Laptop";
        ViewData["Price"] = 1500.00m; // 'm' suffix for decimal
        ViewData["IsAvailable"] = true;
        ViewData["Rating"] = 4.5;
        ViewData["Category"] = "Electronics";

        // ViewBag
        ViewBag.UserName = "Alice Smith";
        ViewBag.UserAge = 28;
        ViewBag.IsPremiumMember = true;
        ViewBag.LastLoginDate = DateTime.Now.ToShortDateString();

        // Strongly-Typed ViewModel
        var product = new Product
        {
            Id = 101,
            Name = "Wireless Gaming Headset",
            Price = 149.99m,
            IsAvailable = true,
            Description = "Immersive sound and comfortable design for serious gamers.",
        };

        var product2 = new Product
        {
            Id = 102,
            Name = "PS5",
            Price = 549.99m,
            IsAvailable = false,
            Description = "This is a PS5.",
        };

        var vm = new ProductPageViewModel { Products = [product, product2] };
        vm.AvailableProductsCount = vm.Products.Count((product) => product.IsAvailable);
        return View(vm);
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
