namespace Booking.UserManagement.Policy.Models
{
    public class ContextModel
    {
        public string CorrelerationId { get; set; }
        public string TenantId { get; set; }
        public string IdToken { get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string UserIdentityId { get; set; }
    }
}
