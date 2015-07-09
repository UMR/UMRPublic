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
            addJobLabel.Text = "Job Posting On : <span style='color:darkcyan'>" + DateTime.Now.Date.ToString("MM-dd-yyyy") + "</span>";
        }
        protected void addRadButton_Click(object sender, EventArgs e)
        {
             UMRJobsEntities JobsEntities = new UMRJobsEntities();
             JobContent jobContent = new JobContent();
        }
    }
}