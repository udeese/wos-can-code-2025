namespace TheRewind.ViewModels;

public class MovieDetailsViewModel
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public DateOnly ReleaseDate { get; set; }
    public string Description { get; set; } = string.Empty;
    public string AuthorUsername { get; set; } = string.Empty;
    public int RatingsCount { get; set; }
    public double AverageRating { get; set; }
    public List<string> Raters { get; set; } = [];
    public RatingFormViewModel? RatingFormViewModel { get; set; }
}
