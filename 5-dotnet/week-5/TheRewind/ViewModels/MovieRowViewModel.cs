namespace TheRewind.ViewModels;

public class MovieRowViewModel
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public double AverageRating { get; set; }
    public string AuthorUsername { get; set; } = string.Empty;
}
