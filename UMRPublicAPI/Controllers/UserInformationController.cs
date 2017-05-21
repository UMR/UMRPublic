using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UMRPublicAPI.Models;
using UMRPublicBO;
using UMRPublicBO.BO;
using UMRPublicBO.DAL;

namespace UMRPublicAPI.Controllers
{
    [RoutePrefix("api/userinformation")]
    public class UserInformationController : CurrentUserController
    {
        [Route("updatepassword")]
        [HttpPut]
        public IHttpActionResult UpdatePassword([FromBody] UserInformation userInformation)
        {
            try
            {
                if (userInformation == null)
                {
                    return NotFound();
                }
                string oldPassword = UserManager.GetUserByUserID(base.GetCurrentUser().UserCredentialId.ToString()).UserPassword.Trim();
                string password = Utility.GenerateMD5(userInformation.OldPassword.Trim());
                if (oldPassword == password)
                {
                    UserManager.UpdatePassword(base.GetCurrentUser().UserCredentialId, base.GetCurrentUser().UserName.Trim(), userInformation.NewPassword.Trim());
                    return Ok();
                }
                else if (oldPassword != password)
                {
                    return Ok<string>("Password is incorrect");
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                if (UMRPublicAPI.AuthorizationServer.Constants.IsProductionBuild)
                {
                    return InternalServerError();
                }
                return InternalServerError(ex);
            }
        }
    }
}
