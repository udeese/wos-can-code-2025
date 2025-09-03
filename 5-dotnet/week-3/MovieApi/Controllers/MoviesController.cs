using Microsoft.AspNetCore.Mvc;
using MovieApi.Classes;

namespace MovieApi.Controllers;

[ApiController]
[Route("api/movies")]
public class MoviesController : ControllerBase
{
    private readonly List<Movie> _movies;

    public MoviesController()
    {
        // Load movie data from the JSON file on startup
        string filePath = "Data/movies.json";
        _movies = Serializer.DeserializeFromFile<List<Movie>>(filePath) ?? [];
    }

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
}
