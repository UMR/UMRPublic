using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using UMRPublic.EntityFramework;

namespace UMRPublic
{
    public partial class JobBoard : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        protected void lstJobs_Load(object sender, EventArgs e)
        {
            UMRJobsEntities JobsEntities = new UMRJobsEntities();
            var jobsData = JobsEntities.ExternalJobs.ToList();
            lstJobsBoard.DataSource = jobsData;
            lstJobsBoard.DataBind();
        }
    }
}