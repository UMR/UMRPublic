using IdentityServer3.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using UMRPublicBO.BO;
using UMRPublicBO.DAL;

namespace UMRPublicAPI.Controllers
{
    [RoutePrefix("api/jobboards")]
    public class JobBoardsController : ApiController
    {
        [Route("get_all_jobs")]
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
                return InternalServerError(ex);
            }            
        }

        [Route("getalljobsbyuserid")]
        [HttpGet]
        [ResponseType(typeof(JobContent))]
        public IHttpActionResult GetAllJobsByUserID(int userId)
        {
            try
            {
                List<JobContent> jobs = JobManager.GetAllJobsByUserID(userId);
                if (jobs.Count == 0)
                {
                    return NotFound();
                }

                return Ok(jobs);                                
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("insertjob")]
        [HttpPost]
        public HttpResponseMessage InsetJob([FromBody]JobContent jobContent, int userCredentialId)
        {
            HttpResponseMessage responseMessage;
            try
            {
                if (jobContent == null)
                {
                    responseMessage = Request.CreateResponse(HttpStatusCode.BadRequest);
                    return responseMessage;
                }

                JobManager.InsetJob(jobContent, userCredentialId);
                return Request.CreateResponse(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                responseMessage = Request.CreateResponse(HttpStatusCode.ExpectationFailed, ex.Message);
            }
            return responseMessage;
        }
    
        [Route("updatejob")]
        [HttpPut]
        public IHttpActionResult UpdateJob(int jobContentId, int userCredentialId, string description)
        {
            try
            {
                JobManager.UpdateJob(jobContentId, userCredentialId, description);
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("deletejob")]
        [HttpPut]
        public IHttpActionResult DeleteJob(int jobContentId, int userId)
        {
            try
            {
                JobManager.DeleteJob(jobContentId, userId);
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}