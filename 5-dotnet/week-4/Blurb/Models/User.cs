using System.ComponentModel.DataAnnotations;

namespace Blurb.Models;

public class User
{
    [Key]
    public int Id { get; set; }

    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // navigation property
    public List<Post> Posts { get; set; } = [];
    public List<Like> Likes { get; set; } = [];
}
