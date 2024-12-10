namespace Booking.System.Licensing.Models
{
    public class ResponseCode
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string GeneratedBy { get; set; }
        public long TTL { get; set; }
        public CodeStatus Status { get; set; }
    }
}