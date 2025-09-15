using System.ComponentModel.DataAnnotations;

namespace TheRewind.ViewModels;

public class LoginFormViewModel
{
    [DataType(DataType.EmailAddress)]
    [Required(ErrorMessage = "Please enter email address.")]
    [EmailAddress(ErrorMessage = "Please enter a valid email address.")]
    public string Email { get; set; } = string.Empty;

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Please enter password.")]
    [MinLength(8, ErrorMessage = "Password must be at least eight characters long.")]
    public string Password { get; set; } = string.Empty;

    public string? Message { get; set; }
}
