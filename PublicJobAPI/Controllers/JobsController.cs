using PublicJobAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UMRRecruitment.BLL;

namespace PublicJobAPI.Controllers
{
    public class JobsController : ApiController
    {
        public IHttpActionResult GetAllJobs()
        {
            try
            {
                //var jobs = GetActiveJobs();

                List<JobContent> jobContents = new List<JobContent>();
                DataTable dataTable = JobPostManager.GetAllActiveJobs();
                if (dataTable != null && dataTable.Rows.Count > 0)
                {
                    foreach (DataRow row in dataTable.Rows)
                    {
                        JobContent jobContent = new JobContent();
                        jobContent.JobDescription = row["JobDescription"].ToString();
                        jobContents.Add(jobContent);
                    }
                }

                if (jobContents.Count == 0)
                {
                    return NotFound();
                }

                return Ok(jobContents);
            }
            catch (Exception ex)
            {
                //Log.Write(ex);
                //if (UMRPublicAPI.AuthorizationServer.Constants.IsProductionBuild)
                //{
                //    return InternalServerError();
                //}
                return InternalServerError(ex);
            }
        }

        [NonAction]
        public DataTable GetActiveJobs()
        {
            List<JobContent> jobs = new List<JobContent>();
            DataTable dataTable = JobPostManager.GetAllJobs();
            //JobContent jobContent =new

            return dataTable;
        }
    }
}
