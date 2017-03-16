using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IdentityServer3.Core;
using IdentityServer3.Core.Extensions;
using IdentityServer3.Core.Models;
using IdentityServer3.Core.Services;
using IdentityServer3.Core.Services.Default;
using Microsoft.Owin;
using IdentityServer3.Core.Validation;

namespace UMRPublicAPI.AuthorizationServer
{
    class CustomTokenResponseGenerator : ICustomTokenResponseGenerator
    {
        //private OwinEnvironmentService owinEnvironmentServic;
        public CustomTokenResponseGenerator(OwinEnvironmentService env)
        {
            //owinEnvironmentServic = env;
        }
        public Task<TokenResponse> GenerateAsync(ValidatedTokenRequest request, TokenResponse response)
        {
            //var responseHeader = (IDictionary<string, string[]>)owinEnvironmentServic.Environment["owin.ResponseHeaders"];
            //switch (request.Client.ClientId)
            //{
            //    case Constants.WebClientId:
            //        if (responseHeader.Keys.Contains("Set-Cookie"))
            //        {
            //            responseHeader.Remove("Set-Cookie");
            //        }
            //        Crypto crypto = new Crypto("gekgG-DVb2rX3-y");
            //        var accessToken = crypto.Encrypt(response.AccessToken);
            //        var refreshToken = crypto.Encrypt(response.RefreshToken);
            //        string[] cookies = { "Access_Token="+accessToken+"; expires="+DateTime.UtcNow.AddSeconds(response.AccessTokenLifetime).ToUniversalTime().ToString("ddd, dd MMM yyyy HH:mm:ss 'GMT'")+"; path=/;"
            //                       ,"Refresh_Token="+refreshToken+"; expires="+DateTime.UtcNow.AddSeconds(request.Client.SlidingRefreshTokenLifetime).ToUniversalTime().ToString("ddd, dd MMM yyyy HH:mm:ss 'GMT'")+"; path=/;" };
            //        responseHeader.Add("Set-Cookie", cookies);
            //        string[] value = { "true" };
            //        responseHeader.Add("access-control-allow-credentials", value);
            //        break;
            //    case Constants.AndroidClientId:
            //        //if (responseHeader.Keys.Contains("Set-Cookie"))
            //        //{
            //        //    responseHeader.Remove("Set-Cookie");
            //        //}
            //        //string[] AndroidCookies = { "Access_Token="+response.AccessToken+";  expires="+DateTime.UtcNow.AddSeconds(response.AccessTokenLifetime).ToUniversalTime().ToString("ddd, dd MMM yyyy HH:mm:ss 'GMT'")+"; path=/;"
            //        //               ,"Refresh_Token="+response.RefreshToken+";  expires="+DateTime.UtcNow.AddSeconds(request.Client.SlidingRefreshTokenLifetime).ToUniversalTime().ToString("ddd, dd MMM yyyy HH:mm:ss 'GMT'")+"; path=/;" };
            //        //responseHeader.Add("Set-Cookie", AndroidCookies);
            //        break;
            //}
            return Task.FromResult(response);
        }
    }
}
