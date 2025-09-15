using System.ComponentModel.DataAnnotations;

namespace Blurb.Models;

public class Post
{
    [Key]
    public int Id { get; set; }
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // foreign key
    public int UserId { get; set; }

    // navigation property
    public User? User { get; set; }
    public List<Like> Likes { get; set; } = [];
}
