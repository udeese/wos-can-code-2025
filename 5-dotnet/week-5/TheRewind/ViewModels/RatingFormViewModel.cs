using System.ComponentModel.DataAnnotations;

namespace TheRewind.ViewModels;

public class RatingFormViewModel
{
    [Required(ErrorMessage = "Please select rating level")]
    public int Level { get; set; }
}
