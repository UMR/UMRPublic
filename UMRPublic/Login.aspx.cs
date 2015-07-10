using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using UMRPublic.EntityFramework;

namespace UMRPublic
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["JobLogin"] != null)
            {
                Response.Redirect("~/AdminPanel/AdminPanelDefault.aspx", false);
            }
        }              
        protected void LogInButton_Click(object sender, EventArgs e)
        {
            UMRJobsEntities JobsEntities = new UMRJobsEntities();
            string generatedMD5 = GenerateMD5(PASSWORD.Text.Trim());
            var verify = from userCred in JobsEntities.UserCredentials
                         where userCred.UserName == USERNAME.Text.Trim()
                          && userCred.UserPassword == generatedMD5
                         select userCred;
            if (verify.Count() > 0)
            {
                Session.Add("JobLogin", verify.Select(a => a.UserName).SingleOrDefault());
                Session.Add("LoggedInUserId", verify.Select(a => a.UserCredentialId).SingleOrDefault());
                Response.Redirect("~/AdminPanel/AdminPanelDefault.aspx", false);
            }
            else
            {
                messageLabel.Text = "Invalid User Name or Password.";
            }
        }

        public string GenerateMD5(string password)
        {
            return string.Join("", MD5.Create().ComputeHash(
               Encoding.ASCII.GetBytes(password)).Select(s => s.ToString("x2")));
        }
    }
}
