using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;

namespace Booking.UserManagement.DataAccess.Extensions
{
    public static class ModelExtensions
    {
        public static Policy.Models.User ToPolicyModel(this DataProvider.Models.User user)
        {
            return new Policy.Models.User
            {
                Id = user.Id.ToString(),
                IdentityId = user.IdentityId,
                Name = user.Name,
                Email = user.Email,
                PhotoURL = user.PhotoURL,
                EmailVerified = user.EmailVerified,
                SSOType = user.SSOType,
                Enabled = user.Enabled
            };
        }
    }
}
