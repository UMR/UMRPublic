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
    class CustomClientPermissionsService : DefaultClientPermissionsService
    {
        public CustomClientPermissionsService(IPermissionsStore permissionsStore, IClientStore clientStore, IScopeStore scopeStore, ILocalizationService localizationService)
            : base(permissionsStore, clientStore, scopeStore, localizationService)
        {

        }
        public override Task<IEnumerable<ClientPermission>> GetClientPermissionsAsync(string subject)
        {
            return base.GetClientPermissionsAsync(subject);
        }
        public override Task RevokeClientPermissionsAsync(string subject, string clientId)
        {
            return base.RevokeClientPermissionsAsync(subject, clientId);
        }
    }
}
