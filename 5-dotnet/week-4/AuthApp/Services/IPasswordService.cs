// Services/IPasswordService.cs
namespace AuthApp.Services;

public interface IPasswordService
{
    string Hash(string plainText);
    bool Verify(string plainText, string hash);
}
