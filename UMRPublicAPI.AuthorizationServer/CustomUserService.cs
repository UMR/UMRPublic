using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IdentityServer3.Core;
using IdentityServer3.Core.Extensions;
using IdentityServer3.Core.Models;
using IdentityServer3.Core.Services;
using IdentityServer3.Core.Services.Default;
using Microsoft.Owin;
using UMRPublicBO.BO;
using UMRPublicBO.DAL;
using System.Web.Script.Serialization;
using UMRPublicBO;
using System.Dynamic;

namespace UMRPortalsAPI.AuthorizationServer
{
    class CustomUserService : UserServiceBase
    {
        //private readonly IOwinContext _owinContext;
        public CustomUserService(OwinEnvironmentService env) //: base()
        {
            //_owinContext = new OwinContext(env.Environment);
        }
        //public override Task AuthenticateExternalAsync(ExternalAuthenticationContext context)
        //{
        //  return  base.AuthenticateExternalAsync(context);
        //}
        //public override Task PreAuthenticateAsync(PreAuthenticationContext context)
        //{
        //    return base.PreAuthenticateAsync(context);
        //}
        public override Task AuthenticateLocalAsync(LocalAuthenticationContext context)
        {
            var validUser = UserManager.GetUserByUserNameAndPassword(context.UserName.Trim(), context.Password);
            if (validUser.Count == 0)
            {
                context.AuthenticateResult = new AuthenticateResult("The Login ID or Password is incorrect.");
                return Task.FromResult(0);
            }
            var currentUser = validUser.FirstOrDefault();
            context.AuthenticateResult = new AuthenticateResult(currentUser.UserCredentialId.ToString(), currentUser.UserName);
            return Task.FromResult(0);
        }
        //public override Task PostAuthenticateAsync(PostAuthenticationContext context)
        //{
        //   return base.PostAuthenticateAsync(context);
        //}
        //public override Task IsActiveAsync(IsActiveContext context)
        //{
        //    return base.IsActiveAsync(context);
        //}
        public override Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var identity = new ClaimsIdentity();
            dynamic currentUserDynamic = new ExpandoObject();
            currentUserDynamic.UserCredentialId = context.Subject.GetSubjectId();
            currentUserDynamic.UserName = context.Subject.GetName();
            if (currentUserDynamic != null)
            {
                var currentUserJson = Newtonsoft.Json.JsonConvert.SerializeObject(currentUserDynamic);
                identity.AddClaims(new[]
                {
                    new Claim("currentUser", currentUserJson)
                });
            }
            context.IssuedClaims = identity.Claims;
            return Task.FromResult(0);
        }
        //public override Task SignOutAsync(SignOutContext context)
        //{
        //   return base.SignOutAsync(context);
        //}
    }
}
