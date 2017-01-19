using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using UMRPublic.EntityFramework;

namespace UMRPublic.AdminPanel
{
    public partial class ChangePassword : System.Web.UI.Page
    {
        protected void Page_Init(object sender, EventArgs e)
        {
            if (Session["JobLogin"] == null)
            {
                Response.Redirect("~/Job.aspx", false);
            }
        }
        protected void saveButton_Click(object sender, EventArgs e)
        {
            try
            {
                UMRJobsEntities JobsEntities = new UMRJobsEntities();
                string generatedMD5 = GenerateMD5(currentPasswordTextBox.Text.Trim());
                string userName = Session["JobLogin"].ToString().Trim();
                var verify = from userCred in JobsEntities.UserCredentials
                             where userCred.UserName == userName
                              && userCred.UserPassword == generatedMD5
                             select userCred;
                if (verify.Count() > 0)
                {
                    if (!string.IsNullOrEmpty(newPasswordTextBox.Text.Trim()) && !string.IsNullOrEmpty(confirmPasswordTextBox.Text.Trim()))
                    {
                        if (newPasswordTextBox.Text.Trim() == confirmPasswordTextBox.Text.Trim())
                        {
                            if (UpdatePassword())
                            {
                                Session.Remove("JobLogin");
                                Session.Remove("LoggedInUserId");
                                Response.Redirect("~/Login.aspx", false);
                            }
                            else
                            {
                                statusLabel.Text = "Failed to Change.";
                            }
                        }
                        else
                        {
                            statusLabel.Text = "New Password & Confirm Password Should Be Same";
                        } 
                    }
                    else
                    {
                        statusLabel.Text = "New Password or Confirm Password Is Empty";
                    }
                }
                else
                {
                    statusLabel.Text = "Invalid Password";
                }
            }
            catch (Exception ex)
            {
                statusLabel.Text = ex.ToString();
            }
        }
        private bool UpdatePassword()
        {
            try
            {
                UserCredential userCredential;
                using (UMRJobsEntities JobsEntities = new UMRJobsEntities())
                {
                    int userCredentialId = int.Parse(Session["LoggedInUserId"].ToString()) ;
                    string userName = Session["JobLogin"].ToString().Trim();
                    userCredential = JobsEntities.UserCredentials.Where(s => s.UserCredentialId == userCredentialId && s.UserName == userName).FirstOrDefault<UserCredential>();
                }
                if (userCredential != null)
                {
                    userCredential.UserPassword = GenerateMD5(confirmPasswordTextBox.Text);
                }
                using (UMRJobsEntities JobsEntities = new UMRJobsEntities())
                {
                    JobsEntities.Entry(userCredential).State = EntityState.Modified;
                    JobsEntities.SaveChanges();
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }     
        }
        public string GenerateMD5(string password)
        {
            return string.Join("", MD5.Create().ComputeHash(
               Encoding.ASCII.GetBytes(password)).Select(s => s.ToString("x2")));
        }
    }
}