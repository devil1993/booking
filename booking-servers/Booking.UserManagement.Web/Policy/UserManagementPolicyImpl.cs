using Booking.UserManagement.Web.Policy.DataService;
using Booking.UserManagement.Web.Policy.Models;

namespace Booking.UserManagement.Web.Policy
{
    public class UserManagementPolicyImpl : IUserManagementService, IUserService
    {
        private ILogger<UserManagementPolicyImpl> _logger;
        private IUserDataService _userDataService;

        public const int DEFAULT_PAGE_SIZE = 25;

        public UserManagementPolicyImpl(ILogger<UserManagementPolicyImpl> logger, IUserDataService userDataService)
        {
            _logger = logger;
            _userDataService = userDataService;
        }

        public async Task<bool> DisableUser(string userId)
        {
            var user = await _userDataService.SearchUser(userId);
            if (user == null)
            {
                _logger.LogError($"User with id {userId} not found");
                return false;
            }
            if (!user.Enabled)
            {
                return false;
            }
            else
            {
                user.Enabled = false;
                await _userDataService.ModifyUser(user);
                return true;
            }
        }

        public Task<IEnumerable<User>> GetUsers()
        {
            return _userDataService.GetUsers(new SearchCriteria { PageSize = DEFAULT_PAGE_SIZE, StartIndex = 0 });
        }

        public Task<User> SyncUser(User user)
        {
            var existingUser = _userDataService.SearchUser(user.IdentityId);
            if (existingUser == null)
            {
                return _userDataService.CreateUser(user);
            }
            else
            {
                return _userDataService.ModifyUser(user);
            }
        }
    }
}
