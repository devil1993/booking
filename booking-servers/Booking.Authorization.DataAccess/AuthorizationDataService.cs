using Booking.Authorization.DataService;
using Booking.Authorization.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.Authorization.DataAccess
{
    public class AuthorizationDataService : IAuthorizationDataService
    {
        public AuthDetails GetAuthDetails(string userId, string tenantId)
        {
            throw new NotImplementedException();
        }

        public void UpdateAuthDetails(AuthDetails authDetails)
        {
            throw new NotImplementedException();
        }
    }
}
