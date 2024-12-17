using Booking.Authorization.DataService;
using Booking.Authorization.Models;
using Booking.Common.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;

namespace Booking.Authorization
{
    public class AuthorizationService : IAuthorizationService
    {
        private readonly IAuthorizationDataService _authorizationDataService;
        private readonly ContextModel _contextModel;
        private readonly ILogger<AuthorizationService> _logger;

        public AuthorizationService(IAuthorizationDataService authorizationDataService, ContextModel contextModel)
        {
            this._authorizationDataService = authorizationDataService;
            this._contextModel = contextModel;
        }

        public bool Authorize(string userId, AuthLevels level, string tenantId = "")
        {
            if(IsSysAdmin(_contextModel.UserIdentityId)){
                if (string.IsNullOrEmpty(tenantId) && level != AuthLevels.SysAdmin)
                {
                    _logger.LogError("System administrator must use tenantId or provide SysAdmin access to other users. Unable to process {level} access for user {userId}", level, userId);
                }
                else
                {
                    _authorizationDataService.UpdateAuthDetails(new AuthDetails()
                    {
                        UserId = userId,
                        TenantId = tenantId,
                        IsAdmin = level == AuthLevels.AppAdmin,
                        IsSysAdmin = level == AuthLevels.SysAdmin,
                        IsUser = level == AuthLevels.User
                    });
                    return true;
                }
            }

            if (IsAuthorized(_contextModel.UserIdentityId, AuthLevels.AppAdmin))
            {
                _authorizationDataService.UpdateAuthDetails(new AuthDetails
                {
                    UserId = userId,
                    TenantId = _contextModel.TenantId,
                    IsAdmin = level == AuthLevels.AppAdmin,
                    IsSysAdmin = level == AuthLevels.SysAdmin,
                    IsUser = level == AuthLevels.User
                });
                return true;
            }
            else
            {
                _logger.LogError("Unauthorized access: Attempted to provide {level} access to {userId} by {provider}", level, userId, _contextModel.UserIdentityId);
                return false;
            }
        }

        public bool IsAuthorized(string userId, AuthLevels level)
        {
            _logger.LogTrace("Checking authorization user {userId} for tenant: {} for level {level}", userId, _contextModel.TenantId, level);
            if (level == AuthLevels.SysAdmin)
                return IsSysAdmin(userId);
            var authInfo = _authorizationDataService.GetAuthDetails(userId, _contextModel.TenantId);
            if (authInfo == null)
            {
                _logger.LogWarning("User {userId} not found in tenant {tenantId}", userId, _contextModel.TenantId);
                return false;
            }
            return level == AuthLevels.User ? authInfo.IsUser : authInfo.IsAdmin;
        }

        public bool IsSysAdmin(string userId)
        {
            _logger.LogTrace("Checking authorization user {userId} for {SYSADMIN}", userId, _contextModel.TenantId, "SYSADMIN");
            var authInfo = _authorizationDataService.GetAuthDetails(userId, string.Empty);
            if (authInfo == null)
            {
                _logger.LogWarning("User {userId} not found", userId);
                return false;
            }
            return authInfo.IsSysAdmin;
        }
    }
}
