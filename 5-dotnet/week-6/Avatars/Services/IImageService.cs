namespace Avatars.Services;

public interface IImageService
{
    Task<string> UploadImageAsync(IFormFile imageFile);
}
