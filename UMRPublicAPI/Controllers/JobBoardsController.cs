using IdentityServer3.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using UMRPublicAPI.Models;
using UMRPublicBO.BO;
using UMRPublicBO.DAL;

namespace UMRPublicAPI.Controllers
{
    [AllowAnonymous]
    [EnableCors("*", "*", "GET,POST,PUT,DELETE")]
    [RoutePrefix("api/jobboards")]
    public class JobBoardsController : CurrentUserController
    {
        #region

        [Route("getalljobboards")]
        [HttpGet]
        [ResponseType(typeof(JobContent))]
        public IHttpActionResult GetAllJobBoards()
        {
            try
            {                
                List<ExternalJob> jobboardsFromRepo = JobManager.GetAllJobBoards();
                List<ExternalJobModel> jobboardModels = new List<ExternalJobModel>();

                if (jobboardsFromRepo != null && jobboardsFromRepo.Count > 0) 
                {
                    foreach (var jobBoard in jobboardsFromRepo)
                    {
                        ExternalJobModel externalJobModel = new ExternalJobModel();

                        externalJobModel.ExternalJobID = jobBoard.ExternalJobID;
                        externalJobModel.State = jobBoard.State;
                        externalJobModel.County = jobBoard.County;
                        externalJobModel.ReqJobOpeningId = jobBoard.ReqJobOpeningId;
                        if (jobBoard.JobRequirement.Contains("<style>"))
                        {
                            int first = jobBoard.JobRequirement.IndexOf("<style>") + "methods".Length;
                            int last = jobBoard.JobRequirement.LastIndexOf("</style>");
                            int remove = last - first;
                            string jobRequirement = jobBoard.JobRequirement.Remove(first, remove);
                            externalJobModel.JobRequirement = jobRequirement;
                        }
                        else { externalJobModel.JobRequirement = jobBoard.JobRequirement; }
                            
                        jobboardModels.Add(externalJobModel);
                    }
                }

                if (jobboardModels.Count == 0)
                {
                    return NotFound();
                }

                return Ok(jobboardModels);
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

        #endregion

        #region Job Opening
        [Route("getalljobs")]
        [HttpGet]
        [ResponseType(typeof(JobContent))]
        public IHttpActionResult GetAllJobs()
        {
            try
            {
                List<JobContent> jobs = JobManager.GetAllJobs();
                if (jobs.Count == 0)
                {
                    return NotFound();
                }

                return Ok(jobs);
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

        [Route("getalljobsbyuserid")]
        [HttpGet]
        [ResponseType(typeof(JobContent))]
        public IHttpActionResult GetAllJobsByUserID()
        {
            try
            {
                List<JobContent> jobs = JobManager.GetAllJobsByUserID(base.GetCurrentUser().UserCredentialId);
                if (jobs.Count == 0)
                {
                    return NotFound();
                }

                return Ok(jobs);                                
            }
            catch (Exception ex)
            {
                if (UMRPublicAPI.AuthorizationServer.Constants.IsProductionBuild)
                {
                    return InternalServerError(ex);
                }
                return InternalServerError(ex);
            }
        }

        [Route("insertjob")]
        [HttpPost]
        public HttpResponseMessage InsetJob([FromBody]JobContent jobContent)
        {
            HttpResponseMessage responseMessage;
            try
            {
                if (jobContent == null)
                {
                    responseMessage = Request.CreateResponse(HttpStatusCode.BadRequest);
                    return responseMessage;
                }

                JobManager.InsetJob(jobContent, base.GetCurrentUser().UserCredentialId);
                return Request.CreateResponse(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                if (UMRPublicAPI.AuthorizationServer.Constants.IsProductionBuild)
                {
                    responseMessage = Request.CreateResponse(HttpStatusCode.ExpectationFailed);
                }
                responseMessage = Request.CreateResponse(HttpStatusCode.ExpectationFailed, ex.Message);
            }
            return responseMessage;
        }
    
        [Route("updatejob")]
        [HttpPut]
        public IHttpActionResult UpdateJob([FromBody]JobContent jobContent)
        {
            try
            {
                if (jobContent == null)
                {
                    return NotFound();
                }
                JobManager.UpdateJob(jobContent.JobContentId, base.GetCurrentUser().UserCredentialId, jobContent.JobDescription);
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

        [Route("deletejob/{jobContentId}")]
        [HttpDelete]
        public IHttpActionResult DeleteJob(int jobContentId)
        {
            try
            {
                JobManager.DeleteJob(jobContentId, base.GetCurrentUser().UserCredentialId);
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
        #endregion
    }
}