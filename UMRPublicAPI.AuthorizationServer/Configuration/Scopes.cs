using System.Collections.Generic;
using IdentityServer3.Core.Models;

namespace UMRPublicAPI.AuthorizationServer.Configuration
{
    internal static class Scopes
    {
        public static List<Scope> Get()
        {
            var scopes = new List<Scope>
            {
                new Scope
                {
                    Name = Constants.UMRPortalsScope,
                    Enabled = true,
                    Type = ScopeType.Resource,
                    ScopeSecrets = new List<Secret>
                    {
                        new Secret(Constants.UMRPortalsScopeSecret.Sha256())
                    },
                    IncludeAllClaimsForUser = true,
                    Emphasize = true
                }
            };
            scopes.Add(StandardScopes.OfflineAccess);
            scopes.Add(StandardScopes.OpenId);
            return scopes;
        }
    }
}