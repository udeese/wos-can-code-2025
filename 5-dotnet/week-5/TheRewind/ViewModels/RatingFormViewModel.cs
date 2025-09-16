using System.ComponentModel.DataAnnotations;

namespace TheRewind.ViewModels;

public class RatingFormViewModel
{
    public int MovieId { get; set; }

    [Required(ErrorMessage = "Please select rating level")]
    public int Level { get; set; }
}
