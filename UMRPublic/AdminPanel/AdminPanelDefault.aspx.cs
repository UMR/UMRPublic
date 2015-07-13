using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace UMRPublic.AdminPanel
{
    public partial class AdminPanelDefault : System.Web.UI.Page
    {
        protected void Page_Init(object sender, EventArgs e)
        {
            if (Session["JobLogin"] == null)
            {
                Response.Redirect("~/Job.aspx", false);
            }
        }
    }
}