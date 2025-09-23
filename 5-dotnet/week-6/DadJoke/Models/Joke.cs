using System.Text.Json.Serialization;

namespace DadJoke.Models;

public class Joke
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }

    [JsonPropertyName("joke")]
    public string? JokeContent { get; set; }

    [JsonPropertyName("status")]
    public int Status { get; set; }
}
