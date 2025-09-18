namespace TheRewind.ViewModels;

public class AccountProfileViewModel
{
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public int MoviesAddedCount { get; set; }
    public int MoviesRatedCount { get; set; }
}
