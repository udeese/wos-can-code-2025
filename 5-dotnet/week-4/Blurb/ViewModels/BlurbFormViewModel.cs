using System.ComponentModel.DataAnnotations;

namespace Blurb.ViewModels;

public class BlurbFormViewModel
{
    [Required(ErrorMessage = "Please enter blurb.")]
    [MinLength(3, ErrorMessage = "Blurb must be at least three characters.")]
    public string Content { get; set; } = string.Empty;
}
