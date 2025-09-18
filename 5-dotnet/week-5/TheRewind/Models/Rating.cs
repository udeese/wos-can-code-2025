using System.ComponentModel.DataAnnotations;

namespace TheRewind.Models;

public class Rating
{
    [Key]
    public int Id { get; set; }

    public int Level { get; set; }

    public int UserId { get; set; }
    public User? User { get; set; }

    public int MovieId { get; set; }
    public Movie? Movie { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
