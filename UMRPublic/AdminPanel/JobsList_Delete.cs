using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
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
        private void DeleteJobs(Telerik.Web.UI.GridCommandEventArgs e)
        {
            int contentId = int.Parse(JobListRadGrid.MasterTableView.Items[e.Item.ItemIndex].GetDataKeyValue("JobContentId").ToString());
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