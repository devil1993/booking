using Booking.System.Tenancy.DataService;
using CoreModels = Booking.System.Tenancy.Models;

namespace Booking.System.Core.DataAccess.Tenant
{
    public class TenancyDataAccess : ITenancyDataAccess
    {
        public CoreModels.Tenant AddTenant(CoreModels.Tenant tenant)
        {
            throw new NotImplementedException();
        }

        public CoreModels.Tenant GetTenant(string tenantId)
        {
            throw new NotImplementedException();
        }

        public CoreModels.Tenant UpdateTenant(CoreModels.Tenant tenant)
        {
            throw new NotImplementedException();
        }
    }
}
