using Booking.UserManagement.DataAccess.DbContext;
using Booking.UserManagement.DataAccess.Extensions;
using Booking.UserManagement.Policy.DataService;
using Booking.UserManagement.Policy.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace Booking.UserManagement.DataAccess.DataProvider
{
    public class UserDataService : IUserDataService
    {
        private readonly UserDbContext _context;

        public UserDataService(UserDbContext context)
        {
            _context = context;
        }

        public async Task<User> CreateUser(User user)
        {
            var userModel = new Models.User
            {
                UserId = user.Id,
                IdentityId = user.IdentityId,
                Name = user.Name,
                Email = user.Email,
                PhotoURL = user.PhotoURL,
                EmailVerified = user.EmailVerified,
                SSOType = user.SSOType,
                Enabled = user.Enabled
            };
            var _ = await _context.Users.AddAsync(userModel);
            _context.SaveChanges();
            return userModel.ToPolicyModel();
        }

        public async Task<IEnumerable<User>> GetUsers(SearchCriteria searchCriteria)
        {
            return _context.Users
                            .Skip((int)searchCriteria.StartIndex)
                            .Take((int)searchCriteria.PageSize)
                            .Select(u => u.ToPolicyModel());
        }

        public async Task<User> ModifyUser(User user)
        {
            var userModel = _context.Users.First(u => u.UserId == user.Id);
            userModel.Name = user.Name;
            userModel.Email = user.Email;
            userModel.PhotoURL = user.PhotoURL;
            userModel.EmailVerified = user.EmailVerified;
            userModel.SSOType = user.SSOType;
            userModel.Enabled = user.Enabled;
            userModel.IdentityId = user.IdentityId;
            await _context.SaveChangesAsync();
            return userModel.ToPolicyModel(); 
        }

        public async Task<User> SearchUser(string identityId)
        {
            try
            {
                return (await _context.Users.FirstAsync(u => u.IdentityId == identityId)).ToPolicyModel() ;
            }
            catch (Exception)
            {
                throw new ApplicationException($"User with id {identityId} not found");
            }
        }
    }
}
