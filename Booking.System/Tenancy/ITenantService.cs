using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Tenancy
{
    public interface ITenantService
    {
        Tenant GetTenant(string tenantId);
        Tenant CreateTenant(string tenantName, string createdBy);
        Tenant UpdateTenant(Tenant tenant, string updatedBy);
        Tenant SuspendTenant(string tenantId, string suspendedBy);
    }
}
