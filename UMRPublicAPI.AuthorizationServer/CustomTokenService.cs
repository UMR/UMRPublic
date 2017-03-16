using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using IdentityServer3.Core.Services;
using IdentityServer3.Core.Services.Default;
using IdentityServer3.Core.Models;
using System.Threading.Tasks;
using IdentityServer3.Core.Configuration;

namespace UMRPublicAPI.AuthorizationServer
{
    class CustomTokenService : DefaultTokenService
    {
        public CustomTokenService(IdentityServerOptions options, IClaimsProvider claimsProvider, ITokenHandleStore tokenHandles, ITokenSigningService signingService, IEventService events)
            : base(options, claimsProvider, tokenHandles, signingService, events)
        {
            
        }
        public CustomTokenService(IdentityServerOptions options, IClaimsProvider claimsProvider, ITokenHandleStore tokenHandles, ITokenSigningService signingService, IEventService events, OwinEnvironmentService owinEnvironmentService)
            : base(options, claimsProvider, tokenHandles, signingService, events, owinEnvironmentService)
        {

        }
        public override Task<Token> CreateAccessTokenAsync(TokenCreationRequest request)
        {
           return  base.CreateAccessTokenAsync(request);
        }

        public override Task<Token> CreateIdentityTokenAsync(TokenCreationRequest request)
        {
            return base.CreateIdentityTokenAsync(request);
        }

        public override Task<string> CreateSecurityTokenAsync(Token token)
        {
            return base.CreateSecurityTokenAsync(token);
        }
        protected override string HashAdditionalData(string tokenToHash)
        {
            return base.HashAdditionalData(tokenToHash);
        }
    }
}
