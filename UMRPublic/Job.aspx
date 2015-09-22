<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Public.Master" CodeBehind="Job.aspx.cs" Inherits="UMRPublic.Job" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <style>
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
    <h1>
        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Login.aspx">Add Job Openings</asp:HyperLink></h1>

    <h1>Job Openings</h1>
    <asp:ListView ID="lstJobs" runat="server" OnLoad="lstJobs_Load">
        <EmptyDataTemplate>
            <hr />
            <label style="text-align: center; vertical-align: central; margin: 10px">No Jobs Available Now</label>
        </EmptyDataTemplate>
        <ItemTemplate>
            <hr />
            <div style="margin: 10px">
                <%# Eval("JobDescription") %>
            </div>
        </ItemTemplate>
    </asp:ListView>
</asp:Content>
