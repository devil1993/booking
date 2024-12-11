using Booking.UserManagement.Web.Policy.Models;

namespace Booking.UserManagement.Web.Policy
{
    public interface IUserManagementService
    {
        Task<IEnumerable<User>> GetUsers();
        Task<bool> DisableUser(string userId);
    }
}
