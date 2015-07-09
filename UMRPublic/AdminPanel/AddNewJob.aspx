<%@ Page Title="" Language="C#" MasterPageFile="~/Admin.Master" AutoEventWireup="true" CodeBehind="AddNewJob.aspx.cs" Inherits="UMRPublic.AdminPanel.AddNewJob" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="headContent" ContentPlaceHolderID="headContentPlaceHolder" runat="server">
</asp:Content>
<asp:Content ID="bodyContent" ContentPlaceHolderID="bodyContentPlaceHolder" runat="server">
    <asp:Label ID="addJobLabel" Font-Size="Large" runat="server"></asp:Label>
    <br />
    <br />
    <telerik:RadScriptManager runat="server" ID="RadScriptManager1" />
    <div class="demo-containers">
        <div class="demo-container">
            <telerik:RadEditor runat="server" ID="addJobRadEditor" Width="100%" Height="500px" Skin="Office2010Blue">
                <ImageManager ViewPaths="~/Editor/images/UserDir/Marketing,~/Editor/images/UserDir/PublicRelations"
                    UploadPaths="~/Editor/images/UserDir/Marketing,~/Editor/images/UserDir/PublicRelations"
                    DeletePaths="~/Editor/images/UserDir/Marketing,~/Editor/images/UserDir/PublicRelations"
                    EnableAsyncUpload="true"></ImageManager>
            </telerik:RadEditor>
        </div>
    </div>
    <br />
    <div style="width:100%">
        <div style="width:200px;float:right">
            <telerik:RadButton ID="addRadButton" runat="server" Text="Add Job" ButtonType="SkinnedButton" Skin="Glow" Width="200px" OnClick="addRadButton_Click"></telerik:RadButton>
        </div>
    </div>
</asp:Content>
<asp:Content ID="scriptContent" ContentPlaceHolderID="scriptContentPlaceHolder" runat="server">
</asp:Content>
