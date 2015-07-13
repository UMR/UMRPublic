<%@ Page Title="" Language="C#" MasterPageFile="~/Admin.Master" AutoEventWireup="true" CodeBehind="JobsList.aspx.cs" Inherits="UMRPublic.AdminPanel.JobsList" %>

<asp:Content ID="headContent" ContentPlaceHolderID="headContentPlaceHolder" runat="server">
    <style type="text/css">
        .job-grid {
            margin-right: 20px;
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
            <telerik:RadGrid runat="server" ID="JobListRadGrid" AutoGenerateColumns="false"
                OnNeedDataSource="JobListRadGrid_NeedDataSource" Skin="Office2010Blue" OnItemCommand="JobListRadGrid_ItemCommand"
                OnInsertCommand="JobListRadGrid_InsertCommand" OnUpdateCommand="JobListRadGrid_UpdateCommand">
                <MasterTableView DataKeyNames="JobContentId" CommandItemDisplay="TopAndBottom" EditMode="PopUp">
                    <Columns>
                        <telerik:GridBoundColumn DataField="JobTitle" HeaderText="Job Title" ReadOnly="true" />
                        <telerik:GridBoundColumn DataField="JobDescription" HeaderText="Description" Visible="false" />
                        <telerik:GridEditCommandColumn ButtonType="ImageButton" HeaderText="EDIT"/>
                        <telerik:GridButtonColumn ConfirmText="Do you want to Delete this Job?" ConfirmDialogType="RadWindow" HeaderText="DELETE"
                            ConfirmTitle="Delete" ButtonType="ImageButton" CommandName="Delete" />
                    </Columns>
                    <EditFormSettings EditFormType="Template">
                        <FormStyle Width="1200px" />
                        <EditColumn ButtonType="PushButton" />
                        <PopUpSettings Modal="true" Width="1100px" />
                        <FormTemplate>
                            <table id="Table2" cellspacing="2" cellpadding="1" width="1000px" border="0" rules="none"
                                style="border-collapse: collapse;">
                                <tr>
                                    <td>
                                        <asp:Label ID="addJobLabel" Font-Size="Large" runat="server" Text=' <%# Bind("JobTitle") %>'></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <telerik:RadEditor runat="server" ID="editJobRadEditor" Width="1096px" Height="500px" Skin="Office2010Blue" Content=' <%# Bind("JobDescription") %>'>
                                            <ImageManager ViewPaths="~/Editor/images/UserDir/Marketing,~/Editor/images/UserDir/PublicRelations"
                                                UploadPaths="~/Editor/images/UserDir/Marketing,~/Editor/images/UserDir/PublicRelations"
                                                DeletePaths="~/Editor/images/UserDir/Marketing,~/Editor/images/UserDir/PublicRelations"
                                                EnableAsyncUpload="true"></ImageManager>
                                        </telerik:RadEditor>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right" colspan="2">
                                        <telerik:RadButton ID="btnUpdate" Skin="Glow" Width="200px" Text='<%# (Container is GridEditFormInsertItem) ? "Insert" : "Update" %>'
                                            EnableEmbeddedSkins="true" runat="server" CommandName='<%# (Container is GridEditFormInsertItem) ? "PerformInsert" : "Update" %>'
                                            ValidationGroup="vgFJob">
                                        </telerik:RadButton>
                                        <telerik:RadButton ID="btnCancel" Skin="Glow" Width="200px" Text="Cancel" runat="server" CausesValidation="False"
                                            EnableEmbeddedSkins="true" CommandName="Cancel">
                                        </telerik:RadButton>
                                    </td>
                                </tr>
                            </table>
                        </FormTemplate>
                    </EditFormSettings>
                </MasterTableView>
                <ClientSettings>
                    <ClientEvents OnPopUpShowing="PopUpShowing" />
                    <Selecting AllowRowSelect="true" />
                </ClientSettings>
            </telerik:RadGrid>
        </fieldset>
    </div>
</asp:Content>
<asp:Content ID="scriptContent" ContentPlaceHolderID="scriptContentPlaceHolder" runat="server">
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
        <script type="text/javascript">
            var popUp;
            function PopUpShowing(sender, eventArgs) {
              popUp = eventArgs.get_popUp();
              var gridWidth = sender.get_element().offsetWidth;
              var gridHeight = sender.get_element().offsetHeight;
              var popUpWidth = popUp.style.width.substr(0, popUp.style.width.indexOf("px"));
              var popUpHeight = popUp.style.height.substr(0, popUp.style.height.indexOf("px"));
              popUp.style.left = ((gridWidth - popUpWidth) / 2 + sender.get_element().offsetLeft).toString() + "px";
              popUp.style.top = 25 + "px";
            } 
        </script>
    </telerik:RadCodeBlock>
</asp:Content>
