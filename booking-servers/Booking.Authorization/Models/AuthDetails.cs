using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.Authorization.Models
{
    public class AuthDetails
    {
        public long Id { get; set; }
        public string UserId { get; set; }
        public bool IsUser { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsSysAdmin { get; set; }
        public string TenantId { get; set; }
    }
}
