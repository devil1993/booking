using Booking.Authorization.Models;
using System;

namespace Booking.Authorization
{
    public interface IAuthorizationService
    {
        public bool IsAuthorized(string userId, AuthLevels level);
        public bool Authorize(string userId, AuthLevels level, string tenantId = "");
        public bool IsSysAdmin(string userId);
    }
}
