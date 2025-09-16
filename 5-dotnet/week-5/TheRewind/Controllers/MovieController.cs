using System.Runtime.Intrinsics.X86;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    public async Task<IActionResult> AllMovies()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var vm = await _context
            .Movies.AsNoTracking()
            .Select(
                (m) =>
                    new MovieRowViewModel
                    {
                        Id = m.Id,
                        Title = m.Title,
                        AuthorUsername = m.User!.Username,
                        AverageRating =
                            m.Ratings.Count != 0 ? m.Ratings.Average((r) => r.Level) : 0.0,
                    }
            )
            .ToListAsync();

        return View(vm);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> MovieDetails(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var movie = await _context
            .Movies.AsNoTracking()
            .Include((m) => m.User)
            .Include((m) => m.Ratings)
            .ThenInclude((r) => r.User)
            .FirstOrDefaultAsync((m) => m.Id == id);

        if (movie is null)
        {
            return NotFound();
        }

        var vm = new MovieDetailsViewModel
        {
            Id = movie.Id,
            UserId = movie.UserId,
            Title = movie.Title,
            Genre = movie.Genre,
            ReleaseDate = movie.ReleaseDate,
            AuthorUsername = movie.User!.Username,
            Description = movie.Description,
            RatingsCount = movie.Ratings.Count,
            AverageRating = movie.Ratings.Count != 0 ? movie.Ratings.Average(r => r.Level) : 0.0,
            Raters = [.. movie.Ratings.Select((r) => r.User!.Username)],
            RatingFormViewModel = new() { MovieId = movie.Id },
        };

        return View(vm);
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
    public async Task<IActionResult> CreateMovie(MovieFormViewModel vm)
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

        await _context.Movies.AddAsync(newMovie);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(AllMovies));
    }

    [HttpPost("{id}/rate")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> RateMovie(int id, RatingFormViewModel vm)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        if (!ModelState.IsValid)
        {
            var movie = await _context
                .Movies.AsNoTracking()
                .Include((m) => m.User)
                .Include((m) => m.Ratings)
                .ThenInclude((r) => r.User)
                .FirstOrDefaultAsync((m) => m.Id == id);

            if (movie is null)
            {
                return NotFound();
            }

            var viewModel = new MovieDetailsViewModel
            {
                Id = movie.Id,
                UserId = movie.UserId,
                Title = movie.Title,
                Genre = movie.Genre,
                ReleaseDate = movie.ReleaseDate,
                AuthorUsername = movie.User!.Username,
                Description = movie.Description,
                RatingsCount = movie.Ratings.Count,
                AverageRating =
                    movie.Ratings.Count != 0 ? movie.Ratings.Average(r => r.Level) : 0.0,
                Raters = [.. movie.Ratings.Select((r) => r.User!.Username)],
                RatingFormViewModel = vm,
            };

            return View("MovieDetails", viewModel);
        }

        var alreadyRated = _context.Ratings.Any((r) => r.MovieId == id && r.UserId == uid);
        if (!alreadyRated)
        {
            var newRating = new Rating
            {
                UserId = uid,
                MovieId = id,
                Level = vm.Level,
            };
            await _context.Ratings.AddAsync(newRating);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(MovieDetails), new { id });
    }

    [HttpGet("{id}/edit")]
    public async Task<IActionResult> EditMovieForm(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var movie = await _context.Movies.AsNoTracking().FirstOrDefaultAsync((m) => m.Id == id);
        if (movie is null)
        {
            return NotFound();
        }

        if (movie.UserId != uid)
        {
            return Forbid();
        }

        var vm = new MovieFormViewModel
        {
            Id = movie.Id,
            UserId = movie.UserId,
            Title = movie.Title,
            Genre = movie.Genre,
            ReleaseDate = movie.ReleaseDate,
            Description = movie.Description,
        };

        return View(vm);
    }

    [HttpPost("{id}/update")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> UpdateMovie(int id, MovieFormViewModel vm)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        // normalize the input
        // validate the model
        if (!ModelState.IsValid)
        {
            return View(nameof(EditMovieForm), vm);
        }

        var movie = await _context.Movies.FirstOrDefaultAsync((m) => m.Id == id);
        if (movie is null)
        {
            return NotFound();
        }

        if (movie.UserId != uid)
        {
            return Forbid();
        }

        movie.Title = vm.Title;
        movie.Genre = vm.Genre;
        movie.ReleaseDate = vm.ReleaseDate;
        movie.Description = vm.Description;
        movie.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(MovieDetails), new { id });
    }

    [HttpGet("{id}/delete")]
    public async Task<IActionResult> ConfirmDelete(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var movie = await _context.Movies.AsNoTracking().FirstOrDefaultAsync((m) => m.Id == id);
        if (movie is null)
        {
            return NotFound();
        }

        if (movie.UserId != uid)
        {
            return Forbid();
        }

        var vm = new ConfirmDeleteViewModel { Id = movie.Id, Title = movie.Title };

        return View("ConfirmDelete", vm);
    }

    [HttpPost("{id}/destroy")]
    public async Task<IActionResult> DeleteMovie(int id)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var movie = await _context.Movies.FirstOrDefaultAsync((m) => m.Id == id);
        if (movie is null)
        {
            return NotFound();
        }

        if (movie.UserId != uid)
        {
            return Forbid();
        }

        _context.Movies.Remove(movie);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(AllMovies));
    }
}
