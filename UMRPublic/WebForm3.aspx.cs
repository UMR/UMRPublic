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
using System.Data;
using System.Data.SqlClient;

namespace UMRPublic
{
    public partial class WebForm3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //c = Request.QueryString["acc_id"];
            //string strSQL = "select * from tblClient";

            //string sqlCon = (string)ConfigurationManager.AppSettings["data_conn"];
            //SqlConnection sqlConnection = new SqlConnection(sqlCon);
            //sqlConnection.Open();
            //SqlCommand sqlCom = new SqlCommand(strSQL, sqlConnection);

            //SqlDataReader dtr = sqlCom.ExecuteReader();

            ////dgr.DataSource = dtr;
            //dgr.DataBind();
            //dtr.Close();
            //SqlDataReader dtr1 = sqlCom.ExecuteReader();

            //if (dtr1.Read() != true)
            //{
            //    //A.Text = "No Examination is added yet.";
            //    //dgr.Visible = false;

            //}
            //else
            //    //A.Visible = false;
            //dtr1.Close();
            //sqlConnection.Close();
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string str2 = TextBox1.Text; // Scrub user data

            try
            {
            string strcon = (string)ConfigurationManager.AppSettings["data_conn"];
            string qry = "INSERT INTO tblClient values ('"+str2+"')";
            
            SqlConnection con = new SqlConnection(strcon);

            SqlCommand com = new SqlCommand(qry, con);
            

            con.Open();
            com.ExecuteNonQuery();
            

            con.Close();
            this.TextBox1.Text = "";
            

            //this.A.Text = "Lecture has been successfully added."; 
            }
            catch (Exception ex)
            {
                //log error 
                //display friendly error to user
            }
            
        }

        protected void Button1_Command(object sender, CommandEventArgs e)
        {

        }
    }
}
