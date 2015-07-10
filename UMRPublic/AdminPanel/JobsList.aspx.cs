using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;
using UMRPublic.EntityFramework;

namespace UMRPublic.AdminPanel
{
    public partial class JobsList : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["JobLogin"] == null)
            {
                Response.Redirect("~/Job.aspx", false);
            }
        }

        protected void JobListRadGrid_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
        {
            LoadJobListRadGrid();
        }

        private void LoadJobListRadGrid()
        {
            int userId = int.Parse(Session["LoggedInUserId"].ToString());
            try
            {
                using (UMRJobsEntities JobsEntities = new UMRJobsEntities())
                {
                    var result = from jContent in JobsEntities.JobContents
                                 join uJob in JobsEntities.UserJobs on jContent.JobContentId equals uJob.JobContenId
                                 where uJob.UserCredentialId == userId && uJob.IsActive == true
                                 orderby jContent.JobContentId descending
                                 select new { jContent.JobContentId, jContent.JobTitle };

                    JobListRadGrid.DataSource = result.ToList();
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
        }

        protected void JobListRadGrid_ItemCommand(object sender, Telerik.Web.UI.GridCommandEventArgs e)
        {
            if (e.CommandName == "RemoveItem")
            {
                int contentId = int.Parse(e.CommandArgument.ToString());
                int userId = int.Parse(Session["LoggedInUserId"].ToString());
                try
                {
                    using (UMRJobsEntities JobsEntities = new UMRJobsEntities())
                    {
                        var result = JobsEntities.UserJobs.Where(j => j.JobContenId == contentId && j.UserCredentialId == userId).FirstOrDefault<UserJob>();
                        if (result != null)
                        {
                            result.IsActive = false;
                            JobsEntities.Entry(result).State = EntityState.Modified;
                            JobsEntities.SaveChanges();
                            JobListRadGrid.Rebind();
                        }
                    }
                }
                catch(Exception ex) {
                    ex.ToString();
                }
            }

            if (e.CommandName == "Delete")
            {                
                var contentId = (int)((GridDataItem)e.Item).GetDataKeyValue("JobContentId");
                int userId = int.Parse(Session["LoggedInUserId"].ToString());
                try
                {
                    using (UMRJobsEntities JobsEntities = new UMRJobsEntities())
                    {
                        var result = JobsEntities.UserJobs.Where(j => j.JobContenId == contentId && j.UserCredentialId == userId).FirstOrDefault<UserJob>();
                        if (result != null)
                        {
                            result.IsActive = false;
                            JobsEntities.Entry(result).State = EntityState.Modified;
                            JobsEntities.SaveChanges();
                            JobListRadGrid.Rebind();
                        }
                    }
                }
                catch (Exception ex)
                {
                    ex.ToString();
                }
            }            
        }
    }
}