using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using UMRPublic.EntityFramework;

namespace UMRPublic.AdminPanel
{
    public partial class AddNewJob : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["JobLogin"] == null)
            {
                Response.Redirect("~/Job.aspx", false);
            }
            addJobLabel.Text = "Job Post On : <span style='color:darkcyan'>" + DateTime.Now + "</span>";
        }
        protected void addRadButton_Click(object sender, EventArgs e)
        {
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
                Response.Write("<script>alert('Job Content is Empty. Please Input Some Text.');</script>");
            }
        }
    }
}