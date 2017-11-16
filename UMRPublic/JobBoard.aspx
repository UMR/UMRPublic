<%@ Page Title="" Language="C#" MasterPageFile="~/Public.Master" AutoEventWireup="true" CodeBehind="JobBoard.aspx.cs" Inherits="UMRPublic.JobBoard" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1>Job Board</h1>
    <hr />
    <asp:DataList ID="lstJobsBoard" runat="server" OnLoad="lstJobs_Load" RepeatColumns="3" RepeatDirection="Horizontal" RepeatLayout="Table" >
        <ItemTemplate>
            <asp:Panel ID="Panel1" runat="server" GroupingText="Job Opening" Width="200px">
                <table style="font-size: 12px;">
                    <tr>
                        <td style="width: 50px;">State:</td>
                        <td>
                            <div style="font-size: 12px;">
                                <%# Eval("State") %>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>County:</td>
                        <td>
                            <div style="font-size: 12px;">
                                <%# Eval("County") %>
                            </div>
                        </td>
                    </tr>
                </table>
            </asp:Panel>

        </ItemTemplate>
    </asp:DataList>
</asp:Content>
