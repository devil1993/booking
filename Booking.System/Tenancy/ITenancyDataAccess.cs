using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Tenancy
{
    public interface ITenancyDataAccess
    {
        Tenant GetTenant(string tenantId);
        Tenant AddTenant(Tenant tenant);
        Tenant UpdateTenant(Tenant tenant);

    }
}
