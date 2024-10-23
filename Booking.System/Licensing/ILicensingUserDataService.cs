using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Licensing
{
    public interface ILicensingUserDataService
    {
        public bool SysAdminExists(string userId);
        public bool AppAdminExists(string userId, string tenantId);
    }
}
