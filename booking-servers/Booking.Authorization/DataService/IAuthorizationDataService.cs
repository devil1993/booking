using Booking.Authorization.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.Authorization.DataService
{
    public interface IAuthorizationDataService
    {
        public AuthDetails GetAuthDetails(string userId, string tenantId);

        public void UpdateAuthDetails(AuthDetails authDetails);
    }
}
