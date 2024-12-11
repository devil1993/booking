using Booking.UserManagement.Policy.Models;

namespace Booking.UserManagement.DataAccess.DataProvider.Models
{
    public class User
    {
        public long Id { get; set; }
        public string UserId { get; set; }
        public string IdentityId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhotoURL { get; set; }
        public bool EmailVerified { get; set; }
        public SSOTypes SSOType { get; set; }
        public bool Enabled { get; set; }
    }
}
