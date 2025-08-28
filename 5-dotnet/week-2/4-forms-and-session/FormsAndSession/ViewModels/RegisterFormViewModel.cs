using System.ComponentModel.DataAnnotations;

namespace FormsAndSession.ViewModels;

public class RegisterFormViewModel
{
    [Required(ErrorMessage = "Please enter username.")]
    [MinLength(3, ErrorMessage = "Username must be at least three characters.")]
    public string Username { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter email address.")]
    [EmailAddress(ErrorMessage = "Please enter a valid email.")]
    [DataType(DataType.EmailAddress)]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter password.")]
    [MinLength(8, ErrorMessage = "Username must be at least eight characters.")]
    [DataType(DataType.Password)]
    public string Password { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please confirm password.")]
    [MinLength(8, ErrorMessage = "Username must be at least eight characters.")]
    [DataType(DataType.Password)]
    public string PasswordConfirm { get; set; } = string.Empty;
}
