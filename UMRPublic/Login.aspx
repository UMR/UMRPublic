<%@ Page Language="C#" MasterPageFile="~/Public.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="UMRPublic.Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .style1 {
            font-size: 18px;
            font-weight: normal;
            text-transform: uppercase;
            color: #48555a;
            font-family: "Rod Transparent";
        }

        #page {
            margin-left: auto;
            margin-right: auto;
            width: 800px;
        }

        .style2 {
            text-indent: -.25in;
            line-height: 115%;
            font-size: 11.0pt;
            font-family: Calibri, sans-serif;
            margin-left: .5in;
            margin-right: 0in;
            margin-top: 0in;
            margin-bottom: .0001pt;
        }

        .style3 {
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
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div style="width: 407px; margin: 5px auto 0px auto;">
        <div>
            <div>
                <table cellspacing="0" cellpadding="1" id="logUMRPortal" style="background-color: #E3EAEB; border-collapse: collapse;">
                    <tr>
                        <td>
                            <table cellpadding="0" style="color: #333333; font-family: Verdana; font-size: 0.7em; height: 210px; width: 400px;">
                                <tr>
                                    <td align="center" colspan="2" style="color: White; background-color: #1C5E55; font-size: 1.0em; font-weight: bold; height: 30px;">UMR Job Admin Login
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="2" style="color: Black;">Please enter your username, password.
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
                                                    <asp:Label ID="messageLabel" Style="padding-left: 15px;" ForeColor="Red" runat="server" Text=""></asp:Label>
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
</asp:Content>

