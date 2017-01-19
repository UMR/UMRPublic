using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using UMRPublic.EntityFramework;

namespace UMRPublic
{
    public partial class Job: System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void lstJobs_Load(object sender, EventArgs e)
        {
            UMRJobsEntities JobsEntities = new UMRJobsEntities();

            var jobsData = (from jobs in JobsEntities.JobContents
                            join uj in JobsEntities.UserJobs on jobs.JobContentId equals uj.JobContenId
                            where uj.IsActive == true
                            orderby jobs.JobContentId descending
                            select new { ID = jobs.JobContentId, JobDescription = jobs.JobDescription }).ToList();

            lstJobs.DataSource = jobsData;
            lstJobs.DataBind();
        }
    }
}
