using Imagekit.Sdk;

namespace Avatars.Services;

public class ImagekitService : IImageService
{
    private readonly ImagekitClient _imagekit;
    private readonly IConfiguration _configuration;
    private readonly string _privateKey;

    public ImagekitService(IConfiguration configuration)
    {
        _configuration = configuration;
        _privateKey = _configuration["ImagekitPrivateKey"]!;
        _imagekit = new ImagekitClient(
            "public_AA+VyyVFCknmjvdy14vYZuqwlkk=", // change to your public key
            _privateKey,
            "https://ik.imagekit.io/cisocodes/" // change to your endpoint
        );
    }

    public async Task<string> UploadImageAsync(IFormFile imageFile)
    {
        if (imageFile == null || imageFile.Length == 0)
        {
            throw new ArgumentException("Invalid image file.");
        }

        var base64Image = await ConvertToBase64Async(imageFile);
        var fileName = Path.GetRandomFileName() + Path.GetExtension(imageFile.FileName);
        var request = new FileCreateRequest()
        {
            file = base64Image,
            fileName = fileName,
            folder = "avatars", // optional Imagekit folder name (if you have one)
        };

        var response = await _imagekit.UploadAsync(request);

        if (response.HttpStatusCode != 200)
        {
            throw new Exception("Image upload failed.");
        }

        return response.url;
    }

    private static async Task<string> ConvertToBase64Async(IFormFile? file)
    {
        if (file == null || file.Length == 0)
        {
            throw new ArgumentException("Invalid file.");
        }

        using var memoryStream = new MemoryStream();
        await file.CopyToAsync(memoryStream);
        var fileBytes = memoryStream.ToArray();
        return Convert.ToBase64String(fileBytes);
    }
}
