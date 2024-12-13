namespace Booking.UserManagement.Policy.Models
{
    public class ContextModel
    {
        public const string CORRELATION_ID = "x-correlation-id";
        public const string TENNANT_ID = "x-tenant-id";
        public const string ACCESS_TOKEN = "x-access-token";
        public const string REFRESH_TOKEN = "x-refresh-token";

        public string CorrelerationId { get; set; }
        public string TenantId { get; set; }
        public string IdToken { get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string UserIdentityId { get; set; }
    }
}
