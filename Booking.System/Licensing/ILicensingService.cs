using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Licensing
{
    public interface ILicensingService
    {
        public bool CreateLicenseRequest(string tenantId, LicenseTypes licenseType, string requestedBy);
        public ResponseCode ApproveLicense(string tenantId, LicenseTypes licenseType, string approvedBy);
        public bool ApplyLicense(ResponseCode code, string tenantId, LicenseTypes licenseType, string appliedBy);
        public bool CheckLicense(string tenantId, LicenseTypes licenseType);
    }
}
