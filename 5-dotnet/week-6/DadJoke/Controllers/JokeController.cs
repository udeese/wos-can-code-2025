using System.Text.Json;
using DadJoke.Models;
using Microsoft.AspNetCore.Mvc;

namespace DadJoke.Controllers;

public class JokeController : Controller
{
    private readonly IHttpClientFactory _clientFactory;

    public JokeController(IHttpClientFactory clientFactory)
    {
        _clientFactory = clientFactory;
    }

    [HttpGet("jokes")]
    public async Task<IActionResult> GetJoke()
    {
        try
        {
            var client = _clientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("Accept", "application/json");

            var response = await client.GetAsync("https://icanhazdadjoke.com/");

            if (!response.IsSuccessStatusCode)
            {
                return BadRequest(); // Or a custom error page!
            }

            var jsonString = await response.Content.ReadAsStringAsync();
            var joke = JsonSerializer.Deserialize<Joke>(jsonString);
            return View(joke);
        }
        catch (Exception ex)
        {
            // Log the exception as needed (e.g., using ILogger)
            return StatusCode(500, $"An error occurred while fetching the joke: {ex.Message}");
        }
    }
}
