using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace UMRPublic
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void INSTITUTION_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (INSTITUTION.SelectedIndex == 1)
            {
                LogInButton.PostBackUrl = "http://universalmedicalrecord.com/UMRPortals/LogIn.aspx?auto_login=true";
                hplSchool.Visible = true;
                hplSchoolPat.Visible = true;
            }
            else
            {
                LogInButton.PostBackUrl = "http://umrtest.com/UMRPortals/LogIn.aspx?auto_login=true";
                hplSchool.Visible = false;
                hplSchoolPat.Visible = false;
            }
        }
    }
}
