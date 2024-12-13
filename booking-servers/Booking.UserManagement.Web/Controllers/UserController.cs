using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Booking.UserManagement.Web.Controllers
{
    using Booking.UserManagement.Policy;
    using Booking.UserManagement.Policy.Models;
    using Microsoft.AspNetCore.Authorization;

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;
        public UserController(ILogger<UserController> logger, IUserService userService, IServiceProvider scope)
        {
            _logger = logger;
            _userService = userService;
        }

        [Authorize]
        [HttpPost]
        [Route("sync")]
        public async Task SyncUser([FromServices] User user)
        {
            user = await _userService.SyncUser(user);
        }
    }
}
