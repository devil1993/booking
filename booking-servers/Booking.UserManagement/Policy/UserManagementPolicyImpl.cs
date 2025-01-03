﻿using Booking.Common.Models;
using Booking.UserManagement.Policy.DataService;
using Booking.UserManagement.Policy.Models;

namespace Booking.UserManagement.Policy
{
    public class UserManagementPolicyImpl : IUserManagementService, IUserService
    {
        private ILogger<UserManagementPolicyImpl> _logger;
        private IUserDataService _userDataService;
        private ContextModel _contextModel;

        public const int DEFAULT_PAGE_SIZE = 25;

        public UserManagementPolicyImpl(ILogger<UserManagementPolicyImpl> logger, IUserDataService userDataService, ContextModel model)
        {
            _logger = logger;
            _userDataService = userDataService;
            _contextModel = model;
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

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _userDataService.GetUsers(new SearchCriteria { PageSize = DEFAULT_PAGE_SIZE, StartIndex = 0 });
        }

        public async Task<User> SyncUser(User user)
        {
            var existingUser = _userDataService.SearchUser(user.IdentityId);
            if (existingUser == null)
            {
                user.Id = Guid.NewGuid().ToString();
                return await _userDataService.CreateUser(user);
            }
            else
            {
                return await _userDataService.ModifyUser(user);
            }
        }
    }
}
