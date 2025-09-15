using System.Runtime.Intrinsics.X86;
using Microsoft.AspNetCore.Mvc;
using TheRewind.Models;
using TheRewind.ViewModels;

namespace TheRewind.Controllers;

[Route("movies")]
public class MovieController : Controller
{
    private readonly ApplicationContext _context;
    private const string SessionUserId = "userId";

    public MovieController(ApplicationContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult AllMovies()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        return View();
    }

    [HttpGet("new")]
    public IActionResult NewMovieForm()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var vm = new MovieFormViewModel();
        return View(vm);
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
    public IActionResult CreateMovie(MovieFormViewModel vm)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        vm.Title = (vm.Title ?? "").Trim();
        vm.Genre = (vm.Genre ?? "").Trim();
        vm.Description = (vm.Description ?? "").Trim();

        if (!ModelState.IsValid)
        {
            return View("NewMovieForm", vm);
        }

        var newMovie = new Movie
        {
            Title = vm.Title,
            Genre = vm.Genre,
            ReleaseDate = vm.ReleaseDate,
            Description = vm.Description,
            UserId = uid,
        };

        _context.Movies.Add(newMovie);
        _context.SaveChanges();
        return RedirectToAction(nameof(AllMovies));
    }
}
