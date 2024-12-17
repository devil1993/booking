using Booking.Authorization.Models;
using Booking.Authorization.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Booking.Authorization.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly ILogger<AuthorizationController> _logger;

        public AuthorizationController(IAuthorizationService authorizationService, ILogger<AuthorizationController> logger)
        {
            _authorizationService = authorizationService;
            _logger = logger;
        }

        [HttpGet]
        [Route("check")]
        public async Task<bool> IsAuthorized(string userId, AuthLevels level)
        {
            return _authorizationService.IsAuthorized(userId, level);
        }

        [HttpPost]
        public async Task<bool> Authorize(AuthorizationRequest request)
        {
            return _authorizationService.Authorize(request.UserId, request.AuthLevel);
        }

    }
}
