using Owin;
using IdentityServer3.Core.Configuration;
using System.Web.Http;
using System.Security.Cryptography.X509Certificates;
using System;
using UMRPublicAPI.AuthorizationServer.Configuration;
using IdentityServer3.Core.Services.InMemory;
using IdentityServer3.Core.Services;
using Microsoft.Owin;
using Serilog;
using System.Collections.Generic;
using UMRPortalsAPI.AuthorizationServer;

[assembly: OwinStartup(typeof(UMRPublicAPI.AuthorizationServer.Startup))]

namespace UMRPublicAPI.AuthorizationServer
{
    internal class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Map("/UMRPublic", UMRPublic =>
            {
                var factory = new IdentityServerServiceFactory()
                    .UseInMemoryClients(Clients.Get())
                    .UseInMemoryScopes(Scopes.Get());

                var validators = new List<Registration<ISecretValidator>>
                {
                    new Registration<ISecretValidator, CustomSecretValidator>()
                };
                factory.SecretValidators = validators;
                //factory.TokenService = new Registration<ITokenService, CustomTokenService>();
                //factory.RefreshTokenService = new Registration<IRefreshTokenService, CustomRefreshTokenService>();
                //factory.ClientPermissionsService = new Registration<IClientPermissionsService, CustomClientPermissionsService>();
                factory.UserService = new Registration<IUserService, CustomUserService>();
                factory.TokenHandleStore = new Registration<ITokenHandleStore, CustomInMemoryTokenHandleStore>();
                factory.RefreshTokenStore = new Registration<IRefreshTokenStore, CustomInMemoryRefreshTokenStore>();
                factory.CustomTokenResponseGenerator = new Registration<ICustomTokenResponseGenerator, CustomTokenResponseGenerator>();

                var cors = new InMemoryCorsPolicyService(Clients.Get());
                factory.CorsPolicyService = new Registration<ICorsPolicyService>(cors);

                var options = new IdentityServerOptions
                {
                    SiteName = "UMRPublic API IdentityServer",
                    RequireSsl = false,
                    SigningCertificate = LoadCertificate(),
                    Factory = factory,
                    EnableWelcomePage = false,
                    EventsOptions = new EventsOptions
                    {
                        RaiseSuccessEvents = true,
                        RaiseErrorEvents = true,
                        RaiseFailureEvents = true,
                        RaiseInformationEvents = true
                    },
                    Endpoints = new EndpointOptions
                    {
                        EnableAccessTokenValidationEndpoint = false
                    }
                };
                UMRPublic.UseIdentityServer(options);
            });
        }
        X509Certificate2 LoadCertificate()
        {
            return new X509Certificate2(
                string.Format(@"{0}bin\idsrv3test.pfx", AppDomain.CurrentDomain.BaseDirectory), "idsrv3test");
        }
    }
}