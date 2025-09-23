using System.ComponentModel.DataAnnotations;

namespace Avatars.Attributes;

public class ImageFileAttribute : ValidationAttribute
{
    private readonly long _maxFileSize = 2 * 1024 * 1024; // 2 MB
    private readonly string[] _permittedExtensions = new[]
    {
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".webp",
    };

    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null)
        {
            // No file provided: treat as valid. Use [Required] on the property if you want to force uploads.
            return ValidationResult.Success;
        }

        if (value is IFormFile file)
        {
            if (file.Length == 0)
            {
                return new ValidationResult("Please select a valid image file");
            }

            if (file.Length > _maxFileSize)
            {
                return new ValidationResult("The image file size exceeds the 2 MB limit.");
            }

            var ext = Path.GetExtension(file.FileName).ToLowerInvariant();

            if (string.IsNullOrEmpty(ext) || !_permittedExtensions.Contains(ext))
            {
                return new ValidationResult(
                    "Invalid file type. Only JPG, JPEG, PNG, GIF, and WEBP are allowed."
                );
            }
        }

        return ValidationResult.Success;
    }
}
