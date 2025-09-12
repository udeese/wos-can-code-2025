using Blurb.Models;
using Blurb.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blurb.Controllers;

[Route("posts/async")]
public class AsyncPostController : Controller
{
    private readonly ApplicationContext _context;
    private const string SessionUserId = "userId";

    public AsyncPostController(ApplicationContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public async Task<IActionResult> Blurbs()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        // projection
        var blurbItems = await _context
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
            .ToListAsync();

        var vm = new BlurbIndexViewModel
        {
            Blurbs = blurbItems,
            BlurbFormViewModel = new BlurbFormViewModel(),
        };
        return View(vm);
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> CreatePost(BlurbFormViewModel formViewModel)
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
            var blurbItems = await _context
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
                .ToListAsync();

            var vm = new BlurbIndexViewModel
            {
                Blurbs = blurbItems,
                BlurbFormViewModel = formViewModel,
            };
            return View(nameof(Blurbs), vm);
        }

        var newPost = new Post { UserId = uid, Content = formViewModel.Content };

        await _context.Posts.AddAsync(newPost);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Blurbs));
    }

    [HttpPost("{id}/like")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Like(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        // secondary check
        var alreadyLiked = await _context.Likes.AnyAsync((l) => l.UserId == uid && l.PostId == id);

        if (!alreadyLiked)
        {
            var newLike = new Like { UserId = uid, PostId = id };

            await _context.Likes.AddAsync(newLike);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(Blurbs));
    }

    [HttpPost("{id}/unlike")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Unlike(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        var maybeLike = await _context.Likes.FirstOrDefaultAsync(
            (l) => l.UserId == uid && l.PostId == id
        );
        if (maybeLike is not null)
        {
            _context.Likes.Remove(maybeLike);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(Blurbs));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> BlurbDetails(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        var maybePost = await _context
            .Posts.AsNoTracking()
            .Include((p) => p.User)
            .Include((p) => p.Likes)
            .ThenInclude((l) => l.User)
            .FirstOrDefaultAsync((p) => p.Id == id);

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
    public async Task<IActionResult> BlurbDetailsProjected(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        var vm = await _context
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
            .FirstOrDefaultAsync();

        return View(nameof(BlurbDetails), vm);
    }
}
