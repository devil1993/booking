﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.System.Tenancy
{
    public class Tenant
    {
        public string TenantId { get; set; }
        public string Name { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
