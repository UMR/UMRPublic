using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UMRPublicAPI.Models;
using UMRPublicBO.BO;
using UMRPublicBO.DAL;

namespace UMRPublicAPI.Controllers
{
    [RoutePrefix("api/userinformation")]
    public class UserInformationController : CurrentUserController
    {
        [Route("updatepassword")]
        [HttpPut]
        public IHttpActionResult UpdatePassword([FromBody] string confirmPassword)
        {
            try
            {
                if (confirmPassword == null)
                {
                    return NotFound();
                }
                UserManager.UpdatePassword(base.GetCurrentUser().UserCredentialId, base.GetCurrentUser().UserName.Trim(), confirmPassword.Trim());
                return Ok();
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
