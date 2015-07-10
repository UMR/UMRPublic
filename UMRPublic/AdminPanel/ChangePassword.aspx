<%@ Page Title="" Language="C#" MasterPageFile="~/Admin.Master" AutoEventWireup="true" CodeBehind="ChangePassword.aspx.cs" Inherits="UMRPublic.AdminPanel.ChangePassword" %>

<asp:Content ID="headContent" ContentPlaceHolderID="headContentPlaceHolder" runat="server">
    <style type="text/css">
        #Change-Password {
            width: 350px;
            margin: 0 auto;
        }

        .ui-tabs-nav.ui-helper-reset.ui-helper-clearfix.ui-widget-header.ui-corner-all {
            height: 30px;
        }
    </style>
</asp:Content>
<asp:Content ID="bodyContent" ContentPlaceHolderID="bodyContentPlaceHolder" runat="server">
    <telerik:RadScriptManager runat="server" ID="RadScriptManager1" />
    <div id="Change-Password">
        <fieldset>
            <legend style="background: none;">Change Password</legend>
            <div id="tabs1">
                <table class="fieldsetTable">
                    <tr>
                        <td>Current Password :
                        </td>
                        <td>
                            <asp:TextBox ID="currentPasswordTextBox" runat="server" TextMode="Password"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td>New Password :
                        </td>
                        <td>
                            <asp:TextBox ID="newPasswordTextBox" runat="server" TextMode="Password"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td>Confirm Password :
                        </td>
                        <td>
                            <asp:TextBox ID="confirmPasswordTextBox" runat="server" TextMode="Password"></asp:TextBox>
                        </td>
                    </tr>
                </table>
                <br />
                <div style="text-align: center; width: 305px;">
                    <telerik:RadButton ID="saveButton" runat="server" Text="Save New Password" ButtonType="SkinnedButton" Skin="Glow" Width="200px" OnClick="saveButton_Click"></telerik:RadButton>
                    <br />
                    <br />
                    <asp:Label ID="statusLabel" runat="server" ForeColor="Red" Text=""></asp:Label>
                </div>
            </div>
        </fieldset>
    </div>
</asp:Content>
<asp:Content ID="scriptContent" ContentPlaceHolderID="scriptContentPlaceHolder" runat="server">
</asp:Content>
