using Booking.UserManagement.Policy.Models;

namespace Booking.UserManagement.Policy
{
    public interface IUserService
    {
        Task<User> SyncUser(User user);
    }
}
