<%@ Page Language="C#" MasterPageFile="~/Public.Master" AutoEventWireup="true" CodeBehind="Client1.aspx.cs" Inherits="UMRPublic.Client1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td style="background-color: #F3F8FE;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td colspan="2">
                            <h1>SIGN IN</h1>
                        </td>
                    </tr>
                    <tr>
                        <td class="c-sep-bg" colspan="2">
                            <img src="images/w17.gif" alt="" width="17" height="1" />
                        </td>
                    </tr>
                    <tr>
                        <td class="body_txt">
                            <table>
                                <tr>
                                    <td>
                                        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="http://portals.universalmedicalrecord.com"
                                            Font-Size="Small" Font-Bold="False" Font-Names="Tahoma, Arial">UMR Portals </asp:HyperLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="http://medcodes.universalmedicalrecord.com"
                                            Font-Size="Small" Font-Bold="False" Font-Names="Tahoma,Arial">UMR Medcodepedia<sup>TM</sup></asp:HyperLink>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td class="body_txt">
                            <table>
                                <tr>
                                    <td>
                                        <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="http://testportals.universalmedicalrecord.com/" Target="_top"
                                            Font-Size="Small" Font-Bold="False" Font-Names="Tahoma, Arial">UMR Portals<sup>(Beta)</sup></asp:HyperLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="http://testmedcodes.universalmedicalrecord.com/"
                                            Font-Size="Small" Font-Bold="False" Font-Names="Tahoma,Arial">UMR Medcodepedia<sup>(Beta)TM</sup></asp:HyperLink>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
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
</asp:Content>



