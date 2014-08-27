<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="UMRPublic.Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>UMR Holdings International Corp</title>
    <meta name="description" content="UMR Holdings International Corp" />
    <meta name="keywords" content="jewelry, watches" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .login_button
        {
            width: 135px;
            height: 24px;
            margin-right: 60px;
            margin-bottom: 0px;
            color: #000000;
            cursor: pointer;
            display: block;
            height: 24px;
            outline: medium none;
            overflow: visible;
            font-family: "Segoe UI" ,Arial,Helvetica,sans-serif;
            font-size: 12px;
            text-decoration: none;
        }
        #logUMRPortal_UserNameRequired, #logUMRPortal_PasswordRequired
        {
            color: Red;
        }
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
<body style="font-size: 1.1em; margin: 0px">
    <div id="page">
        <form id="frmLogIn" runat="server">
        <table border="0" cellpadding="0" cellspacing="0" width="50%" height="100%" align="center">
            <tr>
                <td>
                    <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td>
                                <div style="width: 814px; margin-left: auto; margin-right: auto;">
                                    <img alt="UMR Holdings" src="Images/umrBanner.jpg" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
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
                                                                    UMR Portal Login
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" colspan="2" style="color: Black;">
                                                                    Please enter your username, password and institution.
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right" style="width: 103px;">
                                                                    <label>
                                                                        Institute:
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <table border="0px" cellpadding="0px" cellspacing="0px">
                                                                        <tr>
                                                                            <td>
                                                                                <asp:DropDownList ID="INSTITUTION" runat="server" DataValueField="InstitutionID"
                                                                                    Width="228px" DataTextField="InstitutionName" AutoPostBack="true" OnSelectedIndexChanged="INSTITUTION_SelectedIndexChanged">
                                                                                    <asp:ListItem Text="Universal Medical Records" Value="UMHLD"></asp:ListItem>
                                                                                    <asp:ListItem Text="School System" Value="10003"></asp:ListItem>
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                            <td>
                                                                                <asp:RequiredFieldValidator ID="instituteValidator" runat="server" ControlToValidate="INSTITUTION"
                                                                                    ErrorMessage="*" ForeColor="Red" ValidationGroup="VGLogin"></asp:RequiredFieldValidator>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right" style="width: 103px;">
                                                                    <label>
                                                                        Login ID:
                                                                    </label>
                                                                </td>
                                                                <td>
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
                                                                    <asp:Button ID="LogInButton" runat="server" Text="Sign In" Font-Bold="True" PostBackUrl="http://umrtest.com/UMRPortals/LogIn.aspx?auto_login=true"
                                                                        Width="60px" ValidationGroup="VGLogin" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" colspan="2">
                                                                    <table border="0" cellpadding="5px" cellspacing="0">
                                                                        <tr>
                                                                                <td align="center">
                                                                                    <asp:HyperLink ID="hplSchool" runat="server" NavigateUrl="http://universalmedicalrecord.com/UMRPortals/SignUp/SignUp.aspx"
                                                                                        Visible="false">Provider Enrollment</asp:HyperLink>
                                                                                </td>
                                                                                <td align="center">
                                                                                    <asp:HyperLink ID="hplSchoolPat" runat="server" NavigateUrl="http://universalmedicalrecord.com/UMRPortals/SignUp/SignUpPatient.aspx"
                                                                                        Visible="false">Patient Enrollment</asp:HyperLink>
                                                                                </td>
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
                    </table>
                </td>
            </tr>
        </table>
        </form>
    </div>
</body>
</html>
