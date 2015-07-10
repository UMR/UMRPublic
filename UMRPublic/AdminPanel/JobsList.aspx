<%@ Page Title="" Language="C#" MasterPageFile="~/Admin.Master" AutoEventWireup="true" CodeBehind="JobsList.aspx.cs" Inherits="UMRPublic.AdminPanel.JobsList" %>

<asp:Content ID="headContent" ContentPlaceHolderID="headContentPlaceHolder" runat="server">
    <style type="text/css">
        .job-grid {
            margin-right:20px;
        }
    </style>
</asp:Content>
<asp:Content ID="bodyContent" ContentPlaceHolderID="bodyContentPlaceHolder" runat="server">
    <telerik:RadScriptManager runat="server" ID="RadScriptManager1" />
    <telerik:RadAjaxManager runat="server" ID="RadAjaxManager1" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
        <AjaxSettings>
            <telerik:AjaxSetting AjaxControlID="RadGrid1">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="JobListRadGrid" LoadingPanelID="RadAjaxLoadingPanel1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
        </AjaxSettings>
    </telerik:RadAjaxManager>
    <telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" />
    <div class="demo-container no-bg">
        <fieldset>
            <legend style="background: none;">Job List</legend>
            <telerik:RadGrid runat="server" ID="JobListRadGrid" AutoGenerateColumns="false" AllowPaging="true"
                OnNeedDataSource="JobListRadGrid_NeedDataSource" Skin="Office2010Blue" OnItemCommand="JobListRadGrid_ItemCommand">
                <MasterTableView DataKeyNames="JobContentId" CommandItemDisplay="Top">
                    <Columns>
                        <telerik:GridBoundColumn DataField="JobTitle" HeaderText="Job Title" ReadOnly="true" />
                        <telerik:GridEditCommandColumn ButtonType="ImageButton" /> 
                        <%--<telerik:GridButtonColumn ButtonType="ImageButton" CommandName="Update" /> --%>                      
                        <telerik:GridButtonColumn ConfirmText="Do you want to Delete this Job?" ConfirmDialogType="RadWindow"
                            ConfirmTitle="Delete" ButtonType="ImageButton" CommandName="Delete" />
                    </Columns>
                    <EditFormSettings>
                        <EditColumn ButtonType="ImageButton" />
                    </EditFormSettings>
                </MasterTableView>
                <PagerStyle Mode="NextPrevAndNumeric" />
                <%--<ClientSettings>
                    <ClientEvents OnRowDblClick="rowDblClick" />
                </ClientSettings>--%>
            </telerik:RadGrid>
        </fieldset>
    </div>
</asp:Content>
<asp:Content ID="scriptContent" ContentPlaceHolderID="scriptContentPlaceHolder" runat="server">
</asp:Content>
