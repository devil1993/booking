using Booking.System.Tenancy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Booking.System.Core.DataAccess.Models
{
    public class Tenant
    {
        public long Id { get; set; }
        public string TenantId { get; set; }
        public string Name { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public TenantStatus Status { get; set; }
    }
}
