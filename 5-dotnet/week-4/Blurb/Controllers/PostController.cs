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
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        // projection
        var blurbItems = _context
            .Posts.Select(
                (p) =>
                    new BlurbItemViewModel
                    {
                        Id = p.Id,
                        Content = p.Content,
                        AuthorUsername = p.User!.Username,
                        CreatedAt = p.CreatedAt,
                    }
            )
            .OrderByDescending((p) => p.CreatedAt)
            .ToList();

        var vm = new BlurbIndexViewModel
        {
            Blurbs = blurbItems,
            BlurbFormViewModel = new BlurbFormViewModel(),
        };
        return View(vm);
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
    public IActionResult CreatePost(BlurbFormViewModel formViewModel)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction(nameof(AccountController.LoginForm), nameof(AccountController));
        }

        // normalize
        formViewModel.Content = (formViewModel.Content ?? "").Trim();

        // validate
        if (!ModelState.IsValid)
        {
            var blurbItems = _context
                .Posts.Select(
                    (p) =>
                        new BlurbItemViewModel
                        {
                            Id = p.Id,
                            Content = p.Content,
                            AuthorUsername = p.User!.Username,
                            CreatedAt = p.CreatedAt,
                        }
                )
                .OrderByDescending((p) => p.CreatedAt)
                .ToList();

            var vm = new BlurbIndexViewModel
            {
                Blurbs = blurbItems,
                BlurbFormViewModel = formViewModel,
            };
            return View(nameof(Blurbs), vm);
        }

        var newPost = new Post { UserId = uid, Content = formViewModel.Content };

        _context.Posts.Add(newPost);
        _context.SaveChanges();
        return RedirectToAction(nameof(Blurbs));
    }
}
