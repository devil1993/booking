using Booking.Authorization.Models;

namespace Booking.Authorization.Web.Models
{
    public class AuthorizationRequest
    {
        public string UserId { get; set; }
        public string TenantId { get; set; }
        public AuthLevels AuthLevel { get; set; }
    }
}