using Booking.UserManagement.Policy.DataService;
using Booking.UserManagement.Policy.Models;

namespace Booking.UserManagement.DataAccess.DataProvider
{
    public class UserDataService : IUserDataService
    {
        public async Task<User> CreateUser(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<User>> GetUsers(SearchCriteria searchCriteria)
        {
            throw new NotImplementedException();
        }

        public async Task<User> ModifyUser(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<User> SearchUser(string identityId)
        {
            throw new NotImplementedException();
        }
    }
}
