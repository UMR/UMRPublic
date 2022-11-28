using JobAPI.Models;
using PublicJobAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UMRRecruitment.BLL;

namespace JobAPI.Controllers
{
    [RoutePrefix("api/jobs")]
    public class JobsController : ApiController
    {

        [Route("job")]
        [HttpGet]
        public IHttpActionResult GetAllJobs(string county, string position)
        {
            try
            {
                //var jobs = GetActiveJobs();

                List<JobContent> jobContents = new List<JobContent>();
                DataTable dataTable = new DataTable();
                if (string.IsNullOrEmpty(county) && string.IsNullOrEmpty(position))
                {
                    dataTable = JobPostManager.GetAllActiveJobs();
                }
                else if (!string.IsNullOrEmpty(county) && string.IsNullOrEmpty(position))
                {
                    dataTable = JobPostManager.GetAllActiveJobsByCounty(county.ToString());
                }
                else if (string.IsNullOrEmpty(county) && !string.IsNullOrEmpty(position))
                {
                    dataTable = JobPostManager.GetAllActiveJobsByPosition(position.ToString());
                }
                else if (!string.IsNullOrEmpty(county) && !string.IsNullOrEmpty(position))
                {
                    dataTable = JobPostManager.GetAllJobsByCountyandPosition(county.ToString(), position.ToString());
                }

                if (dataTable != null && dataTable.Rows.Count > 0)
                {
                    foreach (DataRow row in dataTable.Rows)
                    {
                        JobContent jobContent = new JobContent();
                        jobContent.JobId = Convert.ToInt32(row["JobId"].ToString());
                        jobContent.JobDescription = row["JobDescription"].ToString();
                        jobContent.JobTitle = row["JobTitle"].ToString();
                        jobContent.County = row["County"].ToString();
                        jobContent.StateCode = row["SateCode"].ToString();
                        jobContent.StateName = row["StateName"].ToString();
                        jobContent.PositionID = row["PositionID"].ToString();
                        jobContent.InstituteTypeID = row["InstituteTypeID"].ToString();
                        jobContent.InstituteType = row["InstituteType"].ToString();
                        jobContent.CreatedDate = Convert.ToDateTime(row["CreatedDate"].ToString()).ToString(("MMMM dd, yyyy"));
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

        [Route("job")]
        [HttpGet]
        public IHttpActionResult GetAllJobs(string jobId)
        {
            try
            {
                //var jobs = GetActiveJobs();

                List<JobContent> jobContents = new List<JobContent>();
                DataTable dataTable = new DataTable();
                dataTable = JobPostManager.GetActiveJobById(Convert.ToInt32(jobId));

                if (dataTable != null && dataTable.Rows.Count > 0)
                {
                    foreach (DataRow row in dataTable.Rows)
                    {
                        JobContent jobContent = new JobContent();
                        jobContent.JobId = Convert.ToInt32(row["JobId"].ToString());
                        jobContent.JobDescription = row["JobDescription"].ToString();
                        jobContent.JobTitle = row["JobTitle"].ToString();
                        jobContent.County = row["County"].ToString();
                        jobContent.StateCode = row["SateCode"].ToString();
                        jobContent.StateName = row["StateName"].ToString();
                        jobContent.PositionID = row["PositionID"].ToString();
                        jobContent.InstituteTypeID = row["InstituteTypeID"].ToString();
                        jobContent.InstituteType = row["InstituteType"].ToString();
                        jobContent.CreatedDate = Convert.ToDateTime(row["CreatedDate"].ToString()).ToString(("MMMM dd, yyyy"));
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

        [Route("county")]
        [HttpGet]
        public IHttpActionResult GetAllGroupByCounty()
        {
            try
            {
                //var jobs = GetActiveJobs();

                List<CountyState> countyStates = new List<CountyState>();
                DataTable dataTable = JobPostManager.GetAllGroupByCounty();
                if (dataTable != null && dataTable.Rows.Count > 0)
                {
                    foreach (DataRow row in dataTable.Rows)
                    {
                        CountyState countyState = new CountyState();
                        countyState.StateId = Convert.ToInt32(row["StateId"].ToString());
                        countyState.Count = Convert.ToInt32(row["Count"].ToString());
                        countyState.County = row["County"].ToString();
                        countyState.StateName = row["StateName"].ToString();
                        countyStates.Add(countyState);
                    }
                }

                if (countyStates.Count == 0)
                {
                    return NotFound();
                }

                return Ok(countyStates);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("position")]
        [HttpGet]
        public IHttpActionResult GetAllGroupByPosition()
        {
            try
            {
                //var jobs = GetActiveJobs();

                List<Position> positions = new List<Position>();
                DataTable dataTable = JobPostManager.GetAllGroupByPosition();
                if (dataTable != null && dataTable.Rows.Count > 0)
                {
                    foreach (DataRow row in dataTable.Rows)
                    {
                        Position position = new Position();
                        position.Count = Convert.ToInt32(row["Count"].ToString());
                        position.PositionID = Convert.ToInt32(row["PositionID"].ToString());
                        position.JobTitle = row["JobTitle"].ToString();
                        positions.Add(position);
                    }
                }

                if (positions.Count == 0)
                {
                    return NotFound();
                }

                return Ok(positions);
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
