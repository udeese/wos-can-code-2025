namespace Blurb.ViewModels;

public class BlurbItemViewModel
{
    public int Id { get; set; }
    public string Content { get; set; } = string.Empty;
    public string AuthorUsername { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public int LikeCount { get; set; }
    public bool LikedByMe { get; set; }
    public List<string> Likers { get; set; } = [];
}
