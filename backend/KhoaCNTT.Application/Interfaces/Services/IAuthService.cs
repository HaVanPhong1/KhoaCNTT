
namespace KhoaCNTT.Application.Interfaces.Services
{
    public interface IAuthService
    {
        Task<(string Token, string Role)> LoginAdminAsync(string username, string password);
        Task<string> LoginStudentAsync(string username, string password);
    }
}