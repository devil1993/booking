using Booking.System.Licensing.Models;

namespace Booking.System.Licensing.Service
{
    public interface IResponseCodeService
    {
        ResponseCode CreateResponseCode(string tenantId, LicenseTypes licenseType, string generatedBy, long ttl);
        bool ValidateResponseCode(ResponseCode responseCode);
    }
}