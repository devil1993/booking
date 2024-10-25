using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Tenancy.DataService
{
    public interface ITenancyUserDataService
    {
        public bool SysAdminExists(string userId);
    }
}
