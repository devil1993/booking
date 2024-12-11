using Booking.UserManagement.Web.Policy.Models;

namespace Booking.UserManagement.Web.Policy
{
    public interface IUserService
    {
        Task<User> SyncUser(User user);
    }
}
