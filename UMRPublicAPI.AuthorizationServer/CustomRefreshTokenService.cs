using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using IdentityServer3.Core.Services;
using IdentityServer3.Core.Services.Default;
using IdentityServer3.Core.Models;
using System.Threading.Tasks;
using IdentityServer3.Core.Configuration;
using System.Security.Claims;

namespace UMRPublicAPI.AuthorizationServer
{
    class CustomRefreshTokenService : DefaultRefreshTokenService
    {
        public CustomRefreshTokenService(IRefreshTokenStore store, IEventService events)
            : base(store, events)
        {

        }
        public override Task<string> CreateRefreshTokenAsync(ClaimsPrincipal subject, Token accessToken, Client client)
        {
            return base.CreateRefreshTokenAsync(subject, accessToken, client);
        }
        public override Task<string> UpdateRefreshTokenAsync(string handle, RefreshToken refreshToken, Client client)
        {
            return base.UpdateRefreshTokenAsync(handle, refreshToken, client);
        }
    }
}
