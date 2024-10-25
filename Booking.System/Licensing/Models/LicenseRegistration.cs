using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Licensing.Models
{
    public class LicenseRegistration
    {
        public string ID { get; set; }
        public string TenantId { get; set; }
        public RegistrationStatus Status { get; set; }
        public LicenseTypes LicenseType { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime? ProcessedOn { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public string ProcessedBy { get; set; }
        public string AppliedBy { get; set; }

    }
}
