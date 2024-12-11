using Booking.UserManagement.Policy.Models;

namespace Booking.UserManagement.Policy.DataService
{
    public interface IUserDataService
    {
        Task<User> SearchUser(string identityId);
        Task<User> ModifyUser(User user);
        Task<User> CreateUser(User user);
        Task<IEnumerable<User>> GetUsers(SearchCriteria searchCriteria);
    }
}
