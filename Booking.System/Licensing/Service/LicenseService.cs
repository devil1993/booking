using Booking.System.Licensing.DataService;
using Booking.System.Licensing.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Licensing.Service
{
    public class LicenseService : ILicenseCheckService, ILicensingApplicationService, ILicenseReadService, ILicensingSystemService
    {
        private readonly ILicensingUserDataService _userDataService;
        private readonly IRegistrationDataService _registrationDataService;

        public LicenseService(IRegistrationDataService registrationDataService, ILicensingUserDataService userDataService)
        {
            _registrationDataService = registrationDataService;
            _userDataService = userDataService;
        }
        public bool ApplyLicense(ResponseCode code, string tenantId, LicenseTypes licenseType, string appliedBy)
        {
            throw new NotImplementedException();
        }

        public ResponseCode ApproveLicense(string tenantId, LicenseTypes licenseType, string approvedBy)
        {
            throw new NotImplementedException();
        }

        public bool CheckLicense(string tenantId, LicenseTypes licenseType)
        {
            throw new NotImplementedException();
        }

        public LicenseRegistration CreateLicenseRequest(string tenantId, LicenseTypes licenseType, string requestedBy)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<LicenseRegistration> GetAllApprovedLicenses(string tenantId)
        {
            throw new NotImplementedException();
        }

        public bool GetLicense(string id)
        {
            throw new NotImplementedException();
        }

        public bool SuspendLicense(string id, string suspendedBy)
        {
            throw new NotImplementedException();
        }
    }
}
