using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Script.Serialization;
using UMRPublicAPI.Models;
using UMRPublicBO;

namespace UMRPublicAPI.Controllers
{
    public class CurrentUserController : ApiController
    {
        [NonAction]
        internal CurrentUserModel GetCurrentUser()
        {
            var caller = User as ClaimsPrincipal;
            var currentUserClaim = caller.FindFirst(UMRPublicConstants.CurrentUserClaim);
            CurrentUserModel currentUser = null;
            if (!string.IsNullOrEmpty(currentUserClaim.Value))
            {
                currentUser = new JavaScriptSerializer().Deserialize<CurrentUserModel>(currentUserClaim.Value);
            }
            return currentUser;
        }
        [Route("CurrentlyLoggedOnUser")]
        [HttpGet]
        public IHttpActionResult CurrentUser()
        {
            try
            {
                var token = Request.Headers.Authorization.Parameter;
                var tokenData = GetCurrentUser(token);
                return Ok(tokenData);
            }
            catch (Exception ex)
            {
                if (UMRPublicAPI.AuthorizationServer.Constants.IsProductionBuild)
                {
                    return InternalServerError();
                }
                else
                {
                    return Ok<string>(ex.Message);
                }
            }
        }
        [NonAction]
        internal static CurrentUserModel GetCurrentUser(string token)
        {
            CurrentUserModel currentUser = null;
            var client = new HttpClient();
            client.SetBearerToken(token);
            var currentUserJson = client.GetStringAsync(UMRPublicAPI.AuthorizationServer.Constants.AuthorizationServerPath + UMRPublicAPI.AuthorizationServer.Constants.UserinfoPath).Result;
            if (!string.IsNullOrEmpty(currentUserJson))
            {
                Dictionary<string, string> DeserializeData = new JavaScriptSerializer().Deserialize<Dictionary<string, string>>(currentUserJson);
                currentUser = new JavaScriptSerializer().Deserialize<CurrentUserModel>(DeserializeData["currentUser"]);
            }
            return currentUser;
        }
    }
}
