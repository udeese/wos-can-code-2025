using System.ComponentModel.DataAnnotations;

namespace Blurb.Models;

public class Like
{
    [Key]
    public int Id { get; set; }

    // foreign key
    public int UserId { get; set; }

    // navigation property
    public User? User { get; set; }

    // foreign key
    public int PostId { get; set; }

    // navigation property
    public Post? Post { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
