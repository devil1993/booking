using Booking.System.Exceptions;
using Booking.System.Tenancy.DataService;
using Booking.System.Tenancy.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Tenancy.Services
{
    public class TenantService : ITenantService
    {
        private readonly ITenancyDataAccess _tenancyDataAccess;
        private readonly ITenancyUserDataService _userDataService;
        public TenantService(ITenancyDataAccess tenancyDataAccess, ITenancyUserDataService userDataService)
        {
            _tenancyDataAccess = tenancyDataAccess;
            _userDataService = userDataService;
        }

        private void ValidateSysAdminUser(string activatedBy)
        {
            if (!_userDataService.SysAdminExists(activatedBy))
                throw new AccessException();
        }

        public Tenant ActivateTenant(string tenantId, string activatedBy)
        {
            ValidateSysAdminUser(activatedBy);
            var tenant = _tenancyDataAccess.GetTenant(tenantId);
            if (tenant is null)
            {
                throw new TenantNotFoundException();
            }
            tenant.Status = TenantStatus.Active;
            return _tenancyDataAccess.UpdateTenant(tenant);
        }

        public Tenant CreateTenant(string tenantName, string createdBy)
        {
            ValidateSysAdminUser(createdBy);
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

        public Tenant SuspendTenant(string tenantId, string suspendedBy)
        {
            ValidateSysAdminUser(suspendedBy);
            var tenant = _tenancyDataAccess.GetTenant(tenantId);
            if (tenant is null)
            {
                throw new TenantNotFoundException();
            }
            tenant.Status = TenantStatus.Suspended;
            return _tenancyDataAccess.UpdateTenant(tenant);
        }
    }
}
