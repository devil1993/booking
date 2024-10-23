namespace Booking.System.Licensing
{
    public class ResponseCode
    {
        public string Id { get; set; }
        public string AppId { get; set; }
        public string GeneratedBy { get; set; }
        public long TTL { get; set; }
        public CodeStatus Status { get; set; }
        private string code;

        public string Code
        {
            get { return code; }
        }
        internal bool GenerateCode()
        {
            return true;
        }

        public static ResponseCode FromCode(string code) {
            return null;
        }
    }
}