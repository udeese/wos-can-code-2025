namespace Blurb.ViewModels;

public class BlurbIndexViewModel
{
    public List<BlurbItemViewModel> Blurbs { get; set; } = [];
    public BlurbFormViewModel? BlurbFormViewModel { get; set; }
}
