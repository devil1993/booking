using System;
using System.Collections.Generic;
using System.Text;
using Booking.System.Licensing.Models;

namespace Booking.System.Licensing.DataService
{
    public interface IRegistrationDataService
    {
        LicenseRegistration CreateRegistration(string tenantId, LicenseTypes license, string createdBy);
        LicenseRegistration GetRegistration(string registrationId);
        IEnumerable<LicenseRegistration> GetRegistrationsByTenant(string tenantId);
        LicenseRegistration UpdateRegistration(LicenseRegistration registration);
    }
}
