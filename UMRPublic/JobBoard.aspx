<%@ Page Title="" Language="C#" MasterPageFile="~/Public.Master" AutoEventWireup="true" CodeBehind="JobBoard.aspx.cs" Inherits="UMRPublic.JobBoard" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1>Job Board</h1>
    <hr />
    <asp:DataList ID="lstJobsBoard" runat="server" OnLoad="lstJobs_Load" RepeatColumns="1" RepeatDirection="Horizontal" RepeatLayout="Table" >
        <ItemTemplate>
            <asp:Panel ID="Panel1" runat="server" GroupingText="Job Opening" Width="700px">
                <table style="font-size: 12px;">
                    <tr>
                        <td>State:  <%# Eval("State") %></td>
                        <td>County: <%# Eval("County") %></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <%# Eval("JobRequirement") %>
                        </td>
                    </tr>
                </table>
            </asp:Panel>
            <br style="padding-bottom: 5px;" />
        </ItemTemplate>
    </asp:DataList>
</asp:Content>
