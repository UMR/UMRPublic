<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="UMRPublic.Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Universal Medical Record</title>
<meta name="description" content="Universal Medical Record"/>
<meta name="keywords" content="jewelry, watches"/>
    <script src="Scripts/jquery-1.7.1.min.js" type="text/javascript"></script>
    <script src="Scripts/copyright.js" type="text/javascript"></script>
<link href="css/style.css" rel="stylesheet" type="text/css">
        <style type="text/css">
            .style1
            {
                font-size: 18px;
                font-weight: normal;
                text-transform: uppercase;
                color: #48555a;
                font-family: "Rod Transparent";
            }
            #page {
  margin-left:auto;
  margin-right:auto;
  width:800px;
}
            .style2
            {
                text-indent: -.25in;
                line-height: 115%;
                font-size: 11.0pt;
                font-family: Calibri, sans-serif;
                margin-left: .5in;
                margin-right: 0in;
                margin-top: 0in;
                margin-bottom: .0001pt;
            }
            .style3
            {
                text-indent: -.25in;
                line-height: 115%;
                font-size: 11.0pt;
                font-family: Calibri, sans-serif;
                margin-left: .5in;
                margin-right: 0in;
                margin-top: 0in;
                margin-bottom: 10.0pt;
            }
        </style>
        
        
</head>

<body>

<div id="page">
    <form id="form1" runat="server">
    
    <table border="0" cellpadding="0" cellspacing="0" width="50%" height="100%" 
        align="center">
  <tr>
<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="1">
        <div style="position:absolute; width:302px; top:30px; background:url(images/m.jpg);">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="1"><img src="images/logo.jpg" alt="" width="61" height="61" class="logo"></td>
    <td class="style1">
        <h3 style="font-family: Arial, Helvetica, sans-serif">
            &nbsp;</h3>
      </td>
  </tr>
</table>
        </div>
        <div id="slogan">
            A leader in Healthcare Information Technology</div>
        <img src="images/p1.jpg" alt="" width="666" height="196"></td>
        <td class="hbg">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="100%" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="188" valign="top">
        <div style="position:relative; top:-47px; width:188px; left: 0px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td class="mbg"><table width="100%" border="0" cellspacing="0" cellpadding="0" 
            style="height: 250px">
      <tr>
        <td><img src="images/spacer.gif" alt="" width="1" height="14"></td>
      </tr>
      <tr>
        <td class="menu"><a href="Default.aspx">Home</a></td>
      </tr>
      <tr>
        <td height="1"><img src="images/m-sep0.gif" width="188" height="1"></td>
      </tr>
      <tr>
        <td class="menu"><a href="AboutUs1.aspx">About Us</a></td>
      </tr>
      <tr>
        <td height="1"><img src="images/m-sep.gif" width="188" height="1"></td>
      </tr>
      <tr>
        <td class="menu"><a href="Products.aspx">Products and Services</a></td>
      </tr>
      <tr>
        <td height="1"><img src="images/m-sep.gif" width="188" height="1"></td>
      </tr>
      <tr>
        <td class="menu"><a href="Client1.aspx">Client Access</a></td>
      </tr>
      <tr>
        <td height="1"><img src="images/m-sep.gif" width="188" height="1"></td>
      </tr>
      <tr>
        <td class="menu"><a href="Contact.aspx">Contact Us</a></td>
      </tr>
      <tr>
        <td height="1"><img src="images/m-sep.gif" width="188" height="1"></td>
      </tr>
      <tr>
         <td class="menu"><a href="Job.aspx">Job Openings</a></td>
      </tr>
      <tr>
        <td height="1"><img src="images/m-sep.gif" width="188" height="1"></td>
      </tr>
      <tr>
        <td class="menu"><a href="References.aspx">References</a></td>
      </tr>
      <tr>
        <td><img src="images/spacer.gif" alt="" width="1" height="12"></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td align="right" bgcolor="#FFFFFF"><img src="images/m-bottom.gif" alt="" width="156" height="110"></td>
  </tr>
</table>

        </div>
        &nbsp;&nbsp;&nbsp;
                            </td>
        <td valign="top">
        <div style="width: 407px; margin: 5px auto 0px auto;">
                                    <div>
                                        <div>
                                            <table cellspacing="0" cellpadding="1" id="logUMRPortal" style="background-color: #E3EAEB;
                                                border-collapse: collapse;">
                                                <tr>
                                                    <td>
                                                        <table cellpadding="0" style="color: #333333; font-family: Verdana; font-size: 0.7em;
                                                            height: 210px; width: 400px;">
                                                            <tr>
                                                                <td align="center" colspan="2" style="color: White; background-color: #1C5E55; font-size: 1.0em;
                                                                    font-weight: bold; height: 30px;">
                                                                    UMR Job Admin Login
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" colspan="2" style="color: Black;">
                                                                    Please enter your username, password.
                                                                </td>
                                                            </tr>                                                            
                                                            <tr>
                                                                <td align="right" class="auto-style1">
                                                                    <label>
                                                                        Login ID:
                                                                    </label>
                                                                </td>
                                                                <td class="auto-style2">
                                                                    <table border="0px" cellpadding="0px" cellspacing="0px">
                                                                        <tr>
                                                                            <td>
                                                                                <asp:TextBox ID="USERNAME" runat="server" MaxLength="20" Width="226px" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:RequiredFieldValidator ID="usernameValidator" runat="server" ErrorMessage="*"
                                                                                    ControlToValidate="USERNAME" ForeColor="Red" ValidationGroup="VGLogin"></asp:RequiredFieldValidator>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right" style="width: 103px;">
                                                                    <label>
                                                                        Password:
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <table border="0px" cellpadding="0px" cellspacing="0px">
                                                                        <tr>
                                                                            <td>
                                                                                <asp:TextBox ID="PASSWORD" runat="server" TextMode="Password" Width="226px" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:RequiredFieldValidator ID="passwordValidator" runat="server" ControlToValidate="PASSWORD"
                                                                                    ErrorMessage="*" ForeColor="Red" ValidationGroup="VGLogin"></asp:RequiredFieldValidator>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <%--http://umrtest.com/UMRPortals--%>
                                                                <td align="center" colspan="2">
                                                                    <asp:Button ID="LogInButton" runat="server" Text="Sign In" Font-Bold="True" 
                                                                        Width="60px" ValidationGroup="VGLogin" OnClick="LogInButton_Click" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" colspan="2">
                                                                    <table border="0" cellpadding="5px" cellspacing="0">
                                                                        <tr>
                                                                               <td align="center">
                                                                                <asp:Label ID="messageLabel" style="padding-left: 15px;" ForeColor="Red" runat="server" Text=""></asp:Label>     
                                                                                </td>
                                                                               <%-- <td align="center">
                                                                                    <asp:HyperLink ID="hplSchoolPat" runat="server" NavigateUrl="http://universalmedicalrecord.com/UMRPortals/SignUp/SignUpPatient.aspx" PostBackUrl="http://umrtest.com/UMRPortals/LogIn.aspx?auto_login=true"
                                                                                        Visible="false">Patient Enrollment</asp:HyperLink>
                                                                                </td>--%>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>    
        </td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td bgcolor="#0b7ca9" class="bot-bg"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td class="bottom_menu"><a href="Default.aspx">Home Page</a>  |  
            <a href="AboutUs1.aspx">About Us</a>  |  <a href="Products.aspx">Products and Services</a>  |  
            <a href="Client1.aspx">Client Access</a>  |  <a href="Contact.aspx">Contact Us</a>   |  
            <a href="Job.aspx">Job Openings</a>  | <a href="References.aspx">References</a>  |  <a href="#">.....</a></td>
      </tr>
      <tr>
         <td class="copyrightTd bottom_addr"></td>
      </tr>
    </table></td>
  </tr>
</table>
</tr>
</table>

    </form>
</div>
</body>
</html>

