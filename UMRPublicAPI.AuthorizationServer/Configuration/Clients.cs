using IdentityServer3.Core.Models;
using System.Collections.Generic;

namespace UMRPublicAPI.AuthorizationServer.Configuration
{
    internal static class Clients
    {
        public static List<Client> Get()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientName = "UMRPublic Web Client",
                    ClientId = Constants.WebClientId,
                    Enabled = true,
                    AccessTokenType = AccessTokenType.Reference,
                    AccessTokenLifetime = 600,
                    Flow = Flows.ResourceOwner,
                    AllowedCorsOrigins = Constants.WebClientServerPaths,
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("9vd#XvAQcTeSXD_fH4+d8FGGFwY8py".Sha256())
                    },
                    AllowAccessToAllScopes = true,
                    RefreshTokenUsage= TokenUsage.OneTimeOnly,
                    SlidingRefreshTokenLifetime = 1800,
                    RefreshTokenExpiration = TokenExpiration.Sliding,
                    UpdateAccessTokenClaimsOnRefresh= true
                }
            };
        }
    }
}