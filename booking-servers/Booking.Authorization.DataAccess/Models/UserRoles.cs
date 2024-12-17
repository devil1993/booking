using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.Authorization.DataAccess.Models
{
    public class UserRoles
    {
        public long Id { get; set; }
        public string IdentityID { get; set; }
        public string TenantId { get; set; }
        public bool IsUser{ get; set; }
        public bool IsAdmin { get; set; }
    }
}
