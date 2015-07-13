using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace UMRPublic
{
    public partial class Admin : System.Web.UI.MasterPage
    {
        protected void Page_Init(object sender, EventArgs e)
        {
            if (Session["JobLogin"] == null)
            {
                Response.Redirect("~/Job.aspx", false);
            }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session["JobLogin"] != null)
                {
                    userNameLabel.Text = "'" + Session["JobLogin"].ToString() + "'";
                }
                else
                {
                    Response.Redirect("~/Job.aspx", false);
                }
            }
        }
        protected void logoutButton_Click(object sender, EventArgs e)
        {
            Session.Remove("JobLogin");
            Session.Remove("LoggedInUserId");
            Response.Redirect("~/Job.aspx", false);
        }
    }
}