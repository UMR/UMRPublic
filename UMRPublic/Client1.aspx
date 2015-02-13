<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Client1.aspx.cs" Inherits="UMRPublic.Client1" %>

<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<script runat="server">

    
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
            string strSQL1 = "select Max(client_id) from tbl_Client";

            string sqlCon1 = (string)ConfigurationManager.AppSettings["data_conn"];
            SqlConnection sqlConnection1 = new SqlConnection(sqlCon1);
            sqlConnection1.Open();
            SqlCommand sqlCom1 = new SqlCommand(strSQL1, sqlConnection1);

            SqlDataReader dtr1 = sqlCom1.ExecuteReader();
            int temp = 0;
            if (dtr1.Read() == true)
            {
                temp = Convert.ToInt32(dtr1.GetValue(0));

            }
            dtr1.Close();
            sqlConnection1.Close();
            temp = temp + 1;
            //.................
            string strcon = (string)ConfigurationManager.AppSettings["data_conn"];
            string qry = "INSERT INTO tbl_Client values ('" + temp + "','" + str1 + "','" + str3 + "','" + str4 + "','" + str5 + "','" + str6 + "','" + str7 + "','" + str8 + "','" + str9 + "','" + str10 + "','" + str11 + "','" + str12 + "','" + str13 + "')";

            SqlConnection con = new SqlConnection(strcon);

            SqlCommand com = new SqlCommand(qry, con);


            con.Open();
            com.ExecuteNonQuery();


            con.Close();
            this.TextBox1.Text = "";


            Label7.Text = "Signing up is completed successfully";
        }
        catch (Exception ex)
        {
            Label7.Text = ex.Message;
        }
    }
</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>UMR Holdings International Corp</title>
    <meta name="description" content="UMR Holdings International Corp" />
    <meta name="keywords" content="jewelry, watches" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/jquery-1.7.1.min.js" type="text/javascript"></script>
    <script src="Scripts/copyright.js" type="text/javascript"></script>
    <style type="text/css">
        .style1
        {
            font-size: 18px;
            font-weight: normal;
            text-transform: uppercase;
            color: #48555a;
            font-family: "Rod Transparent";
        }

        #page
        {
            margin-left: auto;
            margin-right: auto;
            width: 800px;
        }

        .style2
        {
            font-size: small;
            font-weight: bold;
        }

        .style3
        {
            font-size: small;
        }
    </style>
</head>
<body>
    <div id="page">
        <form id="form1" runat="server">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" align="center">
                <tr>
                    <td>
                        <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td>
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td width="1">
                                                <div style="position: absolute; width: 302px; top: 30px; background: url(images/m.jpg);">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td width="1">
                                                                <img src="images/logo.jpg" alt="" width="61" height="61" class="logo" />
                                                            </td>
                                                            <td class="style1">
                                                                <h3 style="font-family: Arial, Helvetica, sans-serif">&nbsp;
                                                                </h3>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div id="slogan">
                                                    A leader in Healthcare Information Technology
                                                </div>
                                                <img src="images/p1.jpg" alt="" width="666" height="196" />
                                            </td>
                                            <td class="hbg">&nbsp;
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height="100%" valign="top">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td width="188" valign="top">
                                                <div style="position: relative; top: -47px; width: 188px; left: 0px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="mbg">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="height: 250px">
                                                                    <tr>
                                                                        <td>
                                                                            <img src="images/spacer.gif" alt="" width="1" height="14" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="menu">
                                                                            <a href="Default.aspx">Home</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="1">
                                                                            <img src="images/m-sep0.gif" width="188" height="1" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="menu">
                                                                            <a href="AboutUs1.aspx">About Us</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="1">
                                                                            <img src="images/m-sep.gif" width="188" height="1" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="menu">
                                                                            <a href="Products.aspx">Products and Services</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="1">
                                                                            <img src="images/m-sep.gif" width="188" height="1">
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="menu">
                                                                            <a href="Client1.aspx">Client Access</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="1">
                                                                            <img src="images/m-sep.gif" width="188" height="1" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="menu">
                                                                            <a href="Contact.aspx">Contact Us</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="1">
                                                                            <img src="images/m-sep.gif" width="188" height="1" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="menu">
                                                                            <a href="Job.aspx">Job Openings</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="1">
                                                                            <img src="images/m-sep.gif" width="188" height="1" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="menu">
                                                                            <a href="References.aspx">References</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <img src="images/spacer.gif" alt="" width="1" height="12" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <%--<tr>
                                                        <td align="right" bgcolor="#FFFFFF">
                                                            <img src="images/m-bottom.gif" alt="" width="156" height="110">
                                                        </td>
                                                    </tr>--%>
                                                    </table>
                                                </div>
                                                <%--<span class="style2">Sign in to UMR Portals</span><br />--%>
                                                <fieldset style="border: 1px solid #000000">
                                                    <legend class="style2">Sign In</legend>
                                                    <asp:HyperLink ID="HyperLinkAzure" runat="server" NavigateUrl="http://umrportals.azurewebsites.net/LogIn.aspx"
                                                        Font-Size="Small" Font-Bold="False" Font-Names="Tahoma, Arial"> Portal (Azure)</asp:HyperLink>
                                                    <br />
                                                    <br />

                                                    <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="http://universalmedicalrecord.com/UMRPortals/LogIn.aspx"
                                                        Font-Size="Small" Font-Bold="False" Font-Names="Tahoma, Arial">UMR Portals </asp:HyperLink>
                                                    <br />
                                                    <br />
                                                    <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="http://universalmedicalrecord.com/Medcodepedia/Login.aspx"
                                                        Font-Size="Small" Font-Bold="False" Font-Names="Tahoma,Arial">UMR Medcodepedia<sup>TM</sup></asp:HyperLink>
                                                    <br />
                                                    <br />
                                                    <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="http://umrtest.com/UMRPortals/LogIn.aspx" target="_top"
                                                        Font-Size="Small" Font-Bold="False" Font-Names="Tahoma, Arial">UMR Portals<sup>(Beta)</sup></asp:HyperLink>
                                                    <br />
                                                    <br />
                                                    <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="http://umrtest.com/Medcodepedia/Login.aspx"
                                                        Font-Size="Small" Font-Bold="False" Font-Names="Tahoma,Arial">UMR Medcodepedia<sup>(Beta)TM</sup></asp:HyperLink>
                                                    <br />
                                                    <br />
                                                </fieldset>
                                                <br />
                                                <br />
                                                <span class="style2">Sign in to legacy system</span>
                                                <br />
                                                <br />
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <span class="style3">User Name</span>

                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="USERNAME" runat="server" Width="101px"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="style3">Password</span>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="PASSWORD" runat="server" Width="101px" TextMode="Password"></asp:TextBox>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <asp:Button ID="Button2" runat="server" Text="Sign In" Font-Bold="True" PostBackUrl="http://universalmedicalrecord.com/UMR.Webclient/LogIn.aspx?auto_login=true"
                                                                Width="60px" />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <br />
                                                <br />
                                                <br />
                                                <%--<br />
                                                <div style="width:60px;margin:5px auto 0px auto;" >
                                                    <asp:Button ID="Button2" runat="server" Text="Sign In" Font-Bold="True" PostBackUrl="http://universalmedicalrecord.com/UMRPortals/LogIn.aspx"
                                                        Width="60px"  />
                                                </div>--%>
                                            </td>
                                            <td valign="top">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td>
                                                            <h1>SIGN UP!</h1>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="c-sep-bg">
                                                            <img src="images/w17.gif" alt="" width="17" height="1" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="body_txt">
                                                            <table>
                                                                <tr>
                                                                    <td>

                                                                        <asp:Label ID="Label1" runat="server" Text="Email Address"></asp:Label>
                                                                    </td>
                                                                    <td>

                                                                        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>

                                                                        <asp:Label ID="Label2" runat="server" Text="Verify Email Address"></asp:Label>
                                                                    </td>
                                                                    <td>

                                                                        <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>

                                                                        <asp:Label ID="Label3" runat="server" Text="First Name"></asp:Label>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td>

                                                                        <asp:Label ID="Label4" runat="server" Text="Last Name"></asp:Label>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Position
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Company Name
                                                                    </td>
                                                                    <td>

                                                                        <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Company Address
                                                                    </td>
                                                                    <td>

                                                                        <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Business Phone

                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Mobile #
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox9" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Fax#
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox10" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>City/Town
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox11" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>State
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox12" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Zip Code
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="TextBox13" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>
                                                                        <asp:Button ID="Button3" runat="server" Text="Submit" Font-Bold="True" OnClick="Button1_Click" />
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                        <asp:Label ID="Label7" runat="server"></asp:Label>

                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#0b7ca9" class="bot-bg">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td class="bottom_menu">
                                                <a href="index.aspx">Home Page</a> | <a href="AboutUs1.aspx">About Us</a> | <a href="Products.aspx">Products and Services</a> | <a href="Client1.aspx">Client Access</a> | <a href="Contact.aspx">Contact Us</a> | <a href="Job.aspx">Job Openings</a> | <a href="References.aspx">References</a>
                                                | <a href="#">.....</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="copyrightTd bottom_addr">
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </form>
    </div> 
</body>
</html>
