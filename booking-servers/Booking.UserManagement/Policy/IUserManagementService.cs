using Booking.UserManagement.Policy.Models;

namespace Booking.UserManagement.Policy
{
    public interface IUserManagementService
    {
        Task<IEnumerable<User>> GetUsers();
        Task<bool> DisableUser(string userId);
    }
}
