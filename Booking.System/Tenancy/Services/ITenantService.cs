using System;
using System.Collections.Generic;
using System.Text;
using Booking.System.Tenancy.Models;

namespace Booking.System.Tenancy.Services
{
    public interface ITenantService
    {
        Tenant GetTenant(string tenantId);
        Tenant CreateTenant(string tenantName, string createdBy);
        Tenant ActivateTenant(string tenantId, string activatedBy);
        Tenant SuspendTenant(string tenantId, string suspendedBy);
    }
}
