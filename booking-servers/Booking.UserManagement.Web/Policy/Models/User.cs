namespace Booking.UserManagement.Web.Policy.Models
{
    public class User
    {
        public string Id { get; set; }
        public string IdentityId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhotoURL { get; set; }
        public bool EmailVerified { get; set; }
        public SSOTypes SSOType { get; set; }
        public bool Enabled { get; set; }
    }
}
