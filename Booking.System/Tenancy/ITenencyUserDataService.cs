using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Tenancy
{
    public interface ITenencyUserDataService
    {
        public bool SysAdminExists(string userId);
    }
}
