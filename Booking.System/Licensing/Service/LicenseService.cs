using Booking.System.Licensing.DataService;
using Booking.System.Licensing.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using Booking.System.Exceptions;

namespace Booking.System.Licensing.Service
{
    public class LicenseService : ILicenseCheckService, ILicensingApplicationService, ILicenseReadService, ILicensingSystemService
    {
        private readonly ILicensingUserDataService _userDataService;
        private readonly IRegistrationDataService _registrationDataService;
        private readonly IResponseCodeService _responseCodeService;

        public LicenseService(IRegistrationDataService registrationDataService, ILicensingUserDataService userDataService, IResponseCodeService responseCodeService)
        {
            _registrationDataService = registrationDataService;
            _userDataService = userDataService;
            _responseCodeService = responseCodeService;
        }
        public bool ApplyLicense(ResponseCode code, string tenantId, LicenseTypes licenseType, string appliedBy)
        {
            if (!_userDataService.AppAdminExists(appliedBy, tenantId))
            {
                throw new AccessException();
            }

            if (_responseCodeService.ValidateResponseCode(code))
            {
                var license = _registrationDataService.GetRegistration(tenantId, licenseType);
                if (license == null)
                {
                    throw new LicensingException();
                }
                license.Status = RegistrationStatus.InUse;
                _registrationDataService.UpdateRegistration(license);
                return true;
            }
            else
                return false;
        }

        public ResponseCode ApproveLicense(string tenantId, LicenseTypes licenseType, string approvedBy)
        {
            if (!_userDataService.SysAdminExists(approvedBy))
            {
                throw new AccessException();
            }
            var license = _registrationDataService.GetRegistration(tenantId, licenseType);
            license.Status = RegistrationStatus.Approved;
            license.ProcessedBy = approvedBy;
            license.ProcessedOn = DateTime.UtcNow;
            license.ExpiryDate = DateTime.UtcNow.AddYears(1);
            
            _registrationDataService.UpdateRegistration(license);
            ResponseCode responseCode = new ResponseCode();
            return responseCode;
        }

        public bool CheckLicense(string tenantId, LicenseTypes licenseType)
        {
            return _registrationDataService.GetRegistration(tenantId, licenseType) != null;
        }

        public LicenseRegistration CreateLicenseRequest(string tenantId, LicenseTypes licenseType, string requestedBy)
        {
            if (!(_userDataService.SysAdminExists(requestedBy) ||
                  _userDataService.AppAdminExists(requestedBy, tenantId)))
            {
                throw new AccessException();
            }
            var license = _registrationDataService.CreateRegistration(tenantId, licenseType, requestedBy);
            license.Status = RegistrationStatus.Applied;
            _registrationDataService.UpdateRegistration(license);
            return license;
        }

        public IEnumerable<LicenseRegistration> GetAllApprovedLicenses(string tenantId)
        {
            return _registrationDataService.GetRegistrationsByTenant(tenantId);
        }

        public bool GetLicense(string id)
        {
            return _registrationDataService.GetRegistration(id)?.Status == RegistrationStatus.InUse;
        }

        public bool SuspendLicense(string id, string suspendedBy)
        {
            if (!_userDataService.SysAdminExists(suspendedBy))
            {
                throw new AccessException();
            }
            var license = _registrationDataService.GetRegistration(id);
            if (license == null)
                return false;
            license.Status = RegistrationStatus.Revoked;
            _registrationDataService.UpdateRegistration(license);
            return true;
        }
    }
}
