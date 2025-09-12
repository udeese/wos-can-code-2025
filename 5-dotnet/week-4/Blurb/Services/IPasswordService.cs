// Services/IPasswordService.cs
namespace Blurb.Services;

public interface IPasswordService
{
    string Hash(string plainText);
    bool Verify(string plainText, string hash);
}
