using Booking.UserManagement.Policy.Models;
using System.Security.Claims;

namespace Booking.UserManagement.Web.Middlewares
{
    public class UserInfoExtractionMiddleware
    {
        private class FirebaseClaimReader
        {
            public string sign_in_provider { get; set; }
            public Dictionary<string, string[]> identities { get; set; }
        }
        private readonly RequestDelegate _next;

        public UserInfoExtractionMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context, User userInfo) {
            var user = context.User;
            var claims = user.Claims.ToList();
#pragma warning disable CS8601 // Possible null reference assignment.
            userInfo.Email = user.FindFirstValue(ClaimTypes.Email);
            userInfo.Name = user.Claims
                                        .Where(claim => claim.Type.Equals("name"))
                                        .Select(claim => claim.Value)
                                        .FirstOrDefault();
            userInfo.PhotoURL = user.Claims
                                        .Where(claim => claim.Type.Equals("picture"))
                                        .Select(claim => claim.Value)
                                        .FirstOrDefault();

            userInfo.EmailVerified = user.Claims
                                        .Where(claim => claim.Type.Equals("email_verified"))
                                        .Select(claim => Convert.ToBoolean(claim.Value))
                                        .FirstOrDefault();

            userInfo.IdentityId = user.Claims
                                        .Where(claim => claim.Type.Equals("user_id"))
                                        .Select(claim => (claim.Value))
                                        .FirstOrDefault();

            var firebaseData = user.Claims.Where(claim => claim.Type.Equals("firebase"))
                                        .Select(claim => (claim.Value))
                                        .FirstOrDefault();
            if (!string.IsNullOrEmpty(firebaseData))
            {
                var firebaseClaimJson = System.Text.Json.JsonSerializer.Deserialize<FirebaseClaimReader>(firebaseData);
                var signInProvider = firebaseClaimJson?.sign_in_provider;
                userInfo.SSOType = ToSSOType(signInProvider);
            }
#pragma warning restore CS8601 // Possible null reference assignment.

            await _next(context);
        }

        private SSOTypes ToSSOType(string? v)
        {
            if (v == "google.com")
            {
                return SSOTypes.Google;
            }
            else if (v == "facebook.com")
            {
                return SSOTypes.Facebook;
            }
            else if (v == "github.com")
            {
                return SSOTypes.Github;
            }
            else 
                return SSOTypes.Email;
        }
    }
}
