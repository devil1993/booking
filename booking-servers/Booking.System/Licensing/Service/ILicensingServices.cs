using System;
using System.Collections.Generic;
using System.Text;
using Booking.System.Licensing.Models;

namespace Booking.System.Licensing.Service
{
    public interface ILicensingApplicationService
    {
        public LicenseRegistration CreateLicenseRequest(string tenantId, LicenseTypes licenseType, string requestedBy);
        public bool ApplyLicense(ResponseCode code, string tenantId, LicenseTypes licenseType, string appliedBy);
    }
    
    public interface ILicensingSystemService
    {
        public ResponseCode ApproveLicense(string tenantId, LicenseTypes licenseType, string approvedBy);
        public bool SuspendLicense(string id, string suspendedBy);
    }

    public interface ILicenseReadService
    {
        public bool GetLicense(string id);
        public IEnumerable<LicenseRegistration> GetAllApprovedLicenses(string tenantId);
    }

    public interface ILicenseCheckService
    {
        public bool CheckLicense(string tenantId, LicenseTypes licenseType);
    }
}
