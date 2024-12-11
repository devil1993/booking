namespace Booking.UserManagement.Web.Policy.Models
{
    public class SearchCriteria
    {
        public string FuzzySearchString { get; set; }
        public long StartIndex { get; set; }
        public long PageSize { get; set; }
        public string NameSearchString { get; set; }
        public string EmailSearchString { get; set; }
    }
}
