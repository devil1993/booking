using Booking.System.Exceptions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Tenancy
{
    public class TenantService : ITenantService
    {
        private readonly ITenancyDataAccess _tenancyDataAccess;
        public TenantService(ITenancyDataAccess tenancyDataAccess)
        {
            _tenancyDataAccess = tenancyDataAccess;
        }
        public Tenant CreateTenant(string tenantName, string createdBy)
        {
            var newTenant = new Tenant();
            newTenant.Name = tenantName;
            newTenant.CreatedBy = createdBy;
            newTenant.CreatedOn = DateTime.UtcNow;

            return _tenancyDataAccess.AddTenant(newTenant);
        }

        public Tenant GetTenant(string tenantId)
        {
            var tenant = _tenancyDataAccess.GetTenant(tenantId);
            if (tenant is null)
            {
                throw new TenantNotFoundException();
            }
            return tenant;
        }

        public Tenant UpdateTenant(Tenant tenant)
        {
            return _tenancyDataAccess.UpdateTenant(tenant);
        }
    }
}
