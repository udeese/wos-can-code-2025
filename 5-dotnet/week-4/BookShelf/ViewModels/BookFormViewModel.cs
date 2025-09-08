using System.ComponentModel.DataAnnotations;

namespace BookShelf.ViewModels;

public class BookFormViewModel
{
    public int? Id { get; set; }

    [Required(ErrorMessage = "Title is required.")]
    [MinLength(2, ErrorMessage = "Title must be at least two characters.")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Author is required.")]
    [MinLength(2, ErrorMessage = "Author must be at least two characters.")]
    public string Author { get; set; } = string.Empty;

    [Required(ErrorMessage = "Genre is required.")]
    [MinLength(2, ErrorMessage = "Genre must be at least two characters.")]
    public string Genre { get; set; } = string.Empty;

    [Required(ErrorMessage = "Release year is required.")]
    [Range(1200, 2030)]
    public int ReleaseYear { get; set; }

    [Required(ErrorMessage = "Please select yes or no.")]
    public bool HasBeenRead { get; set; }

    [Required(ErrorMessage = "Description is required.")]
    [MinLength(10, ErrorMessage = "Description must be at least ten characters.")]
    public string Description { get; set; } = string.Empty;
}
