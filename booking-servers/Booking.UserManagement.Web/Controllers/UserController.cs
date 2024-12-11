using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Booking.UserManagement.Web.Controllers
{
    using Booking.UserManagement.Policy;

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;
        private readonly IServiceProvider _services;
        public UserController(ILogger<UserController> logger, IUserService userService, IServiceProvider scope)
        {
            _logger = logger;
            _userService = userService;
            _services = scope.ServiceProvider;
        }

        [HttpPost]
        [Route("sync")]
        public async Task SyncUser()
        {
            var user = _services.GetRequiredService<Policy.Models.User>();
            user = await _userService.SyncUser(user);
        }
    }
}
