using System.ComponentModel.DataAnnotations;

namespace MadLibs.ViewModels;

public class FormViewModel
{
    [Required(ErrorMessage = "Please enter your name.")]
    [MinLength(3, ErrorMessage = "Name must be at least three characters.")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter an adjective.")]
    [StringLength(20, ErrorMessage = "Adjective must be 20 characters or fewer.")]
    public string Adjective1 { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter another adjective.")]
    [StringLength(20, ErrorMessage = "Adjective must be 20 characters or fewer.")]
    public string Adjective2 { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter a plural noun.")]
    [StringLength(30, ErrorMessage = "Plural noun must be 30 characters or fewer.")]
    public string PluralNoun1 { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter another plural noun.")]
    [StringLength(30, ErrorMessage = "Plural noun must be 30 characters or fewer.")]
    public string PluralNoun2 { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter a place.")]
    [StringLength(40, ErrorMessage = "Place must be 40 characters or fewer.")]
    public string Place { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter an exclamation.")]
    [StringLength(25, ErrorMessage = "Exclamation must be 25 characters or fewer.")]
    public string Exclamation { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter a noun.")]
    [StringLength(30, ErrorMessage = "Noun must be 30 characters or fewer.")]
    public string Noun { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter a past tense verb.")]
    [StringLength(25, ErrorMessage = "Past tense verb must be 25 characters or fewer.")]
    public string PastTenseVerb { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter an animal.")]
    [StringLength(25, ErrorMessage = "Animal must be 25 characters or fewer.")]
    public string Animal { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter an object.")]
    [StringLength(30, ErrorMessage = "Object must be 30 characters or fewer.")]
    public string Object { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter a geographic feature.")]
    [StringLength(40, ErrorMessage = "Geographic feature must be 40 characters or fewer.")]
    public string GeographicFeature { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter a number.")]
    [Range(1, 1000, ErrorMessage = "Number must be between 1 and 1000.")]
    public int Number { get; set; }
}
