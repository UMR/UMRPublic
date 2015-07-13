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
        protected void JobListRadGrid_InsertCommand(object sender, GridCommandEventArgs e)
        {
            try
            {
                var addJobRadEditor = (RadEditor)e.Item.FindControl("editJobRadEditor");
                var addJobLabel = (Label)e.Item.FindControl("addJobLabel");
                if (!string.IsNullOrEmpty(addJobRadEditor.Content))
                {
                    JobContent jobContent = new JobContent();

                    jobContent.JobTitle = addJobLabel.Text;
                    jobContent.JobDescription = addJobRadEditor.Content;

                    using (UMRJobsEntities JobsEntities = new UMRJobsEntities())
                    {
                        JobsEntities.JobContents.Add(jobContent);
                        JobsEntities.SaveChanges();

                        UserJob userJob = new UserJob();
                        userJob.UserCredentialId = int.Parse(Session["LoggedInUserId"].ToString());
                        userJob.JobContenId = jobContent.JobContentId;
                        userJob.IsActive = true;
                        JobsEntities.UserJobs.Add(userJob);
                        JobsEntities.SaveChanges();
                        addJobRadEditor.Content = string.Empty;
                        Response.Write("<script>alert('A New Job Successfully Posted.');</script>");
                    }

                }
                else
                {
                    RadAjaxManager1.Alert("Job Content is Empty. Please Input Some Text.");
                }
            }
            catch (Exception Ex)
            {
                RadAjaxManager1.Alert(Ex.Message);
            }
        }
    }
}