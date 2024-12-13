using Booking.UserManagement.Policy.Models;

namespace Booking.UserManagement.Web.Middlewares
{
    public class ContextExtractionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ContextExtractionMiddleware> _logger;

        public ContextExtractionMiddleware(RequestDelegate next, ILogger<ContextExtractionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context, ContextModel contextModel)
        {
            var headers = context.Request.Headers;
            var correlationId = headers.Where(h => h.Key.Equals(ContextModel.CORRELATION_ID, StringComparison.InvariantCultureIgnoreCase)).Select(h => h.Value).FirstOrDefault();
            var tenantId = headers.Where(headers => headers.Key.Equals(ContextModel.TENNANT_ID, StringComparison.InvariantCultureIgnoreCase)).Select(h => h.Value).FirstOrDefault();
            var accessToken = headers.Where(headers => headers.Key.Equals(ContextModel.ACCESS_TOKEN, StringComparison.InvariantCultureIgnoreCase)).Select(h => h.Value).FirstOrDefault();
            var refreshToken = headers.Where(headers => headers.Key.Equals(ContextModel.REFRESH_TOKEN, StringComparison.InvariantCultureIgnoreCase)).Select(h => h.Value).FirstOrDefault();

            var idToken = headers.Where(headers => headers.Key.Equals("Authorization", StringComparison.InvariantCultureIgnoreCase)).Select(h => h.Value).FirstOrDefault().ToString().Split(" ")[1];
            var userId = context.User.Claims.FirstOrDefault(c => c.Type == "user_id")?.Value;

            contextModel.CorrelerationId = correlationId;
            contextModel.TenantId = tenantId;
            contextModel.AccessToken = accessToken;
            contextModel.RefreshToken = refreshToken;
            contextModel.IdToken = idToken;
            contextModel.UserIdentityId = userId;

            await _next(context);
        }
    }
}
