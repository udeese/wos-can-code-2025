using System.ComponentModel.DataAnnotations;

namespace MovieApi.Models;

public class Movie
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MinLength(2, ErrorMessage = "Title must be at least two characters.")]
    public string Title { get; set; } = string.Empty;
    public string Director { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public DateOnly ReleaseDate { get; set; }
    public double Rating { get; set; }
    public int DurationInMinutes { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public override string ToString()
    {
        return $@"
MovieID: {Id}
Movie: {Title} ({ReleaseDate.ToString("MMMM d, yyyy")}), {DurationInMinutes} min.
Director: {Director}
Genre: {Genre}
Rating: {Rating}";
    }
}
