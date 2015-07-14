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
        protected void JobListRadGrid_UpdateCommand(object sender, GridCommandEventArgs e)
        {
            try
            {
                var editJobRadEditor = (RadEditor)e.Item.FindControl("editJobRadEditor");
                if (!string.IsNullOrEmpty(editJobRadEditor.Content))
                {
                    int jobContentId = int.Parse(JobListRadGrid.MasterTableView.Items[e.Item.ItemIndex].GetDataKeyValue("JobContentId").ToString());
                    JobContent jobContent;
                    using (UMRJobsEntities JobsEntities = new UMRJobsEntities())
                    {
                        jobContent = JobsEntities.JobContents.Where(s => s.JobContentId == jobContentId).FirstOrDefault<JobContent>();
                    }
                    if (jobContent != null)
                    {
                        jobContent.JobDescription = editJobRadEditor.Content;
                    }
                    using (UMRJobsEntities JobsEntities = new UMRJobsEntities())
                    {
                        JobsEntities.Entry(jobContent).State = EntityState.Modified;
                        JobsEntities.SaveChanges();
                        Response.Write("<script>alert('Change Saved Successfully.');</script>");
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