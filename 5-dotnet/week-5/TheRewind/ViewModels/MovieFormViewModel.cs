using System.ComponentModel.DataAnnotations;

namespace TheRewind.ViewModels;

public class MovieFormViewModel
{
    [Key]
    public int? Id { get; set; }
    public int? UserId { get; set; }

    [Required(ErrorMessage = "Please enter title.")]
    [MinLength(2, ErrorMessage = "Title must be at least two characters.")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter genre.")]
    [MinLength(2, ErrorMessage = "Genre must be at least two characters.")]
    public string Genre { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter release date.")]
    [DataType(DataType.Date)]
    public DateOnly ReleaseDate { get; set; }

    [Required(ErrorMessage = "Please enter description.")]
    [MinLength(10, ErrorMessage = "Description must be at least ten characters.")]
    public string Description { get; set; } = string.Empty;
}
