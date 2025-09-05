using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieApi.Models;

namespace MovieApi.Controllers;

[ApiController]
[Route("api/async/movies")]
public class MoviesAsyncController : ControllerBase
{
    private readonly MovieContext _context;

    public MoviesAsyncController(MovieContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public async Task<ActionResult<List<Movie>>> GetAllMovies()
    {
        if (!_context.Movies.Any())
        {
            return NotFound("No movies found.");
        }

        var movies = await _context.Movies.ToListAsync();
        return Ok(movies);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Movie>> GetOneMovie(int id)
    {
        var maybeMovie = await _context.Movies.FirstOrDefaultAsync((movie) => movie.Id == id);
        if (maybeMovie is null)
        {
            return NotFound();
        }
        return Ok(maybeMovie);
    }

    [HttpGet("search")]
    public async Task<ActionResult<List<Movie>>> Search(string? keyword, double? minRating)
    {
        var query = _context.Movies.AsQueryable();

        if (!string.IsNullOrEmpty(keyword))
        {
            query = query.Where((movie) => movie.Title.Contains(keyword));
        }

        if (minRating.HasValue)
        {
            query = query.Where(m => m.Rating >= minRating.Value);
        }

        var results = await query.ToListAsync();

        if (results.Count == 0)
        {
            return NotFound("No movies found matching the search criteria.");
        }
        return Ok(results);
    }

    [HttpPost("")]
    public async Task<ActionResult<Movie>> CreateMovie([FromBody] Movie newMovie)
    {
        await _context.Movies.AddAsync(newMovie);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetOneMovie), new { id = newMovie.Id }, newMovie);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMovie(int id, [FromBody] Movie updatedMovie)
    {
        if (id != updatedMovie.Id)
        {
            return BadRequest("Movie ID in the URL does not match the ID in the request body.");
        }

        var maybeMovie = await _context.Movies.FirstOrDefaultAsync((m) => m.Id == id);
        if (maybeMovie is null)
        {
            return NotFound("Movie not found.");
        }

        maybeMovie.Title = updatedMovie.Title;
        maybeMovie.Director = updatedMovie.Director;
        maybeMovie.Genre = updatedMovie.Genre;
        maybeMovie.ReleaseDate = updatedMovie.ReleaseDate;
        maybeMovie.Rating = updatedMovie.Rating;
        maybeMovie.DurationInMinutes = updatedMovie.DurationInMinutes;
        maybeMovie.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMovie(int id)
    {
        var movieToRemove = await _context.Movies.FirstOrDefaultAsync(m => m.Id == id);

        if (movieToRemove is null)
        {
            return NotFound("Movie not found.");
        }

        _context.Movies.Remove(movieToRemove);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
