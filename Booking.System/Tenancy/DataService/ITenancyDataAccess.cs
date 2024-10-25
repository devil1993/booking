using System;
using System.Collections.Generic;
using System.Text;
using Booking.System.Tenancy.Models;

namespace Booking.System.Tenancy.DataService
{
    public interface ITenancyDataAccess
    {
        Tenant GetTenant(string tenantId);
        Tenant AddTenant(Tenant tenant);
        Tenant UpdateTenant(Tenant tenant);
    }
}
