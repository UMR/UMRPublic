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
    public partial class Client1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }
        protected void Button1_Click(object sender, EventArgs e)
        {
            string str1 = TextBox1.Text;
            string str2 = TextBox2.Text;
            string str3 = TextBox3.Text;
            string str4 = TextBox4.Text;
            string str5 = TextBox5.Text;
            string str6 = TextBox6.Text;
            string str7 = TextBox7.Text;
            string str8 = TextBox8.Text;
            string str9 = TextBox9.Text;
            string str10 = TextBox10.Text;
            string str11 = TextBox11.Text;
            string str12 = TextBox12.Text;
            string str13 = TextBox13.Text;


            try
            {
                string strcon = (string)ConfigurationManager.AppSettings["data_conn"];
                string qry = "INSERT INTO tblClient values (1,'" + str1 + "','" + str3 + "','" + str4 + "','" + str5 + "','" + str6 + "','" + str7 + "','" + str8 + "','" + str9 + "','" + str10 + "','" + str11 + "','" + str12 + "','" + str13 + "')";

                SqlConnection con = new SqlConnection(strcon);

                SqlCommand com = new SqlCommand(qry, con);


                con.Open();
                com.ExecuteNonQuery();


                con.Close();
                this.TextBox1.Text = "";


                Label7.Text = "Lecture has been successfully added.";
            }
            catch (Exception ex)
            {
                Label7.Text = "meowwwww";
            }

        }

        protected void Button3_Click(object sender, EventArgs e)
        {

        }
    }

}
