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
        protected void Page_Init(object sender, EventArgs e)
        {
            if (Session["JobLogin"] == null)
            {
                Response.Redirect("~/Job.aspx", false);
            }
        }

        protected void JobListRadGrid_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
        {
            if (Session["JobLogin"] == null)
            {
                Response.Redirect("~/Job.aspx", false);
            }
            else
            {
                LoadJobListRadGrid();
            }
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
                                 select new { jContent.JobContentId, jContent.JobTitle, jContent.JobDescription };

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
            if (e.CommandName == "Delete")
            {
                DeleteJobs(e);  
            }
            if (e.CommandName == "InitInsert")
            {
                e.Canceled = true;
                e.Item.OwnerTableView.InsertItem();

                GridEditableItem insertedItem = e.Item.OwnerTableView.GetInsertItem();
                Label addJobLabel = insertedItem.FindControl("addJobLabel") as Label;
                addJobLabel.Text = "Job Post On : <span style='color:darkcyan'>" + DateTime.Now + "</span>";
            }
        }

    }
}