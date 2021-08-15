using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using IdentityServer3.AccessTokenValidation;
using IdentityServer3.Core.Models;
using System.Security.Cryptography.X509Certificates;

[assembly: OwinStartup(typeof(UMRPublicAPI.Startup))]

namespace UMRPublicAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseIdentityServerBearerTokenAuthentication(new IdentityServerBearerTokenAuthenticationOptions
            {
                Authority = UMRPublicAPI.AuthorizationServer.Constants.AuthorizationServerPath,
                ClientId = UMRPublicAPI.AuthorizationServer.Constants.UMRPublicScope,
                ClientSecret = UMRPublicAPI.AuthorizationServer.Constants.UMRPublicScopeSecret.Sha256(),
                RequiredScopes = new[] { UMRPublicAPI.AuthorizationServer.Constants.UMRPublicScope },
                SigningCertificate = LoadCertificate(),
                EnableValidationResultCache = false
            });
            var config = new HttpConfiguration();
            WebApiConfig.Register(config);
            app.UseWebApi(config);
            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Resource Server has been started successfully");
            });
        }
        X509Certificate2 LoadCertificate()
        {
            return new X509Certificate2(
                string.Format(@"{0}bin\idsrv3test.pfx", AppDomain.CurrentDomain.BaseDirectory), "idsrv3test");
        }
    }
}
