using Microsoft.AspNetCore.Mvc;
using MovieApi.Classes;

namespace MovieApi.Controllers;

[ApiController]
[Route("api/movies")]
public class MoviesController : ControllerBase
{
    private static readonly List<Movie> _movies = Movie.GetMovies();

    // Action method to get all movies
    [HttpGet("")]
    public ActionResult<List<Movie>> GetAllMovies()
    {
        if (_movies.Count == 0)
        {
            return NotFound("No movies found."); // Returns a 404 Not Found status code
        }
        return Ok(_movies); // Returns a 200 OK status code with the movie list
    }

    [HttpGet("{id}")]
    public ActionResult<Movie> GetOneMovie(int id)
    {
        var maybeMovie = _movies.FirstOrDefault((movie) => movie.MovieId == id);
        if (maybeMovie is null)
        {
            return NotFound();
        }
        return Ok(maybeMovie);
    }

    [HttpGet("search")]
    public ActionResult<List<Movie>> Search(string? keyword, double? minRating)
    {
        var query = _movies.AsQueryable();

        if (!string.IsNullOrEmpty(keyword))
        {
            query = query.Where(
                (movie) => movie.Title.Contains(keyword, StringComparison.OrdinalIgnoreCase)
            );
        }

        if (minRating.HasValue)
        {
            query = query.Where(m => m.Rating >= minRating.Value);
        }

        var results = query.ToList();

        if (results.Count == 0)
        {
            return NotFound("No movies found matching the search criteria.");
        }
        return Ok(results);
    }

    [HttpPost("")]
    public ActionResult<Movie> CreateMovie([FromBody] Movie newMovie)
    {
        var nextId = _movies.Count == 0 ? 1 : _movies.Max((m) => m.MovieId) + 1;
        newMovie.MovieId = nextId;

        _movies.Add(newMovie);
        return CreatedAtAction(nameof(GetOneMovie), new { id = nextId }, newMovie);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateMovie(int id, [FromBody] Movie updatedMovie)
    {
        // 1. Check if the provided ID from the URL matches the ID in the request body
        if (id != updatedMovie.MovieId)
        {
            return BadRequest("Movie ID in the URL does not match the ID in the request body.");
        }

        var maybeMovie = _movies.FirstOrDefault((m) => m.MovieId == id);
        if (maybeMovie is null)
        {
            return NotFound("Movie not found.");
        }

        var movieIndex = _movies.IndexOf(maybeMovie);
        _movies[movieIndex] = updatedMovie;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteMovie(int id)
    {
        var movieToRemove = _movies.FirstOrDefault(m => m.MovieId == id);

        if (movieToRemove is null)
        {
            return NotFound("Movie not found.");
        }

        _movies.Remove(movieToRemove);
        return NoContent();
    }
}
