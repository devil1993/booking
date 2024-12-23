using Booking.System.Tenancy.DataService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Booking.System.Licensing.DataService;

//using CoreModels = Booking.System.Core.

namespace Booking.System.Core.DataAccess.User
{
    public class UserDataService : ITenancyUserDataService, ILicensingUserDataService
    {
        private readonly Models.UserServiceConfig _userServiceConfig;

        //private HttpClient _httpClient;

        public UserDataService(Models.UserServiceConfig config)
        {
            _userServiceConfig = config;
            //_httpClient = new HttpClient();
        }

        public bool SysAdminExists(string userId)
        {
            throw new NotImplementedException();
        }

        public bool AppAdminExists(string userId, string tenantId)
        {
            throw new NotImplementedException();
        }
    }
}
