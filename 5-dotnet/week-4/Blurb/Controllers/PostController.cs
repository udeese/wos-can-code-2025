using Blurb.Models;
using Blurb.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Blurb.Controllers;

[Route("posts")]
public class PostController : Controller
{
    private readonly ApplicationContext _context;
    private const string SessionUserId = "userId";

    public PostController(ApplicationContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Blurbs()
    {
        var blurbItems = _context
            .Posts.Select(
                (p) =>
                    new BlurbItemViewModel
                    {
                        Id = p.Id,
                        Content = p.Content,
                        AuthorUsername = p.User!.Username,
                    }
            )
            .ToList();

        var vm = new BlurbIndexViewModel
        {
            Blurbs = blurbItems,
            BlurbFormViewModel = new BlurbFormViewModel(),
        };
        return View(vm);
    }
}
