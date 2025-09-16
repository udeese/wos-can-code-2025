using Blurb.Models;
using Blurb.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blurb.Controllers;

[Route("posts")]
public class PostController : Controller
{
    private readonly ApplicationContext _context;
    private readonly ILogger<PostController> _logger;
    private const string SessionUserId = "userId";

    public PostController(ApplicationContext context, ILogger<PostController> logger)
    {
        _context = context;
        _logger = logger;
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
            .Posts.AsNoTracking()
            .Select(
                (p) =>
                    new BlurbItemViewModel
                    {
                        Id = p.Id,
                        Content = p.Content,
                        AuthorUsername = p.User!.Username,
                        CreatedAt = p.CreatedAt,
                        LikeCount = p.Likes.Count,
                        LikedByMe = p.Likes.Any((like) => like.UserId == uid),
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

    [HttpPost("{id}/like")]
    [ValidateAntiForgeryToken]
    public IActionResult Like(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        // secondary check
        var alreadyLiked = _context.Likes.Any((l) => l.UserId == uid && l.PostId == id);

        if (!alreadyLiked)
        {
            var newLike = new Like { UserId = uid, PostId = id };

            _context.Likes.Add(newLike);
            _context.SaveChanges();
        }

        return RedirectToAction(nameof(Blurbs));
    }

    [HttpPost("{id}/unlike")]
    [ValidateAntiForgeryToken]
    public IActionResult Unlike(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        var maybeLike = _context.Likes.FirstOrDefault((l) => l.UserId == uid && l.PostId == id);
        if (maybeLike is not null)
        {
            _context.Likes.Remove(maybeLike);
            _context.SaveChanges();
        }

        return RedirectToAction(nameof(Blurbs));
    }

    [HttpGet("{id}")]
    public IActionResult BlurbDetails(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        var maybePost = _context
            .Posts.AsNoTracking()
            .Include((p) => p.User)
            .Include((p) => p.Likes)
            .ThenInclude((l) => l.User)
            .FirstOrDefault((p) => p.Id == id);

        if (maybePost is null)
        {
            return NotFound();
        }

        var vm = new BlurbItemViewModel
        {
            Id = maybePost.Id,
            Content = maybePost.Content,
            AuthorUsername = maybePost.User!.Username,
            CreatedAt = maybePost.CreatedAt,
            LikeCount = maybePost.Likes.Count,
            LikedByMe = maybePost.Likes.Any((like) => like.UserId == uid),
            Likers = maybePost.Likes.Select((l) => l.User!.Username).ToList(),
        };

        return View(vm);
    }

    [HttpGet("{id}/projected")]
    public IActionResult BlurbDetailsProjected(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        var vm = _context
            .Posts.AsNoTracking()
            .Where((p) => p.Id == id)
            .Select(
                (p) =>
                    new BlurbItemViewModel
                    {
                        Id = p.Id,
                        Content = p.Content,
                        AuthorUsername = p.User!.Username,
                        CreatedAt = p.CreatedAt,
                        LikeCount = p.Likes.Count,
                        LikedByMe = p.Likes.Any((like) => like.UserId == uid),
                        Likers = p.Likes.Select((l) => l.User!.Username).ToList(),
                    }
            )
            .FirstOrDefault();

        return View(nameof(BlurbDetails), vm);
    }
}
