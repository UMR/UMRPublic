using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IdentityServer3.Core.Models;

namespace UMRPublicAPI.AuthorizationServer
{
    public class Constants
    {
        ////////////  LocalHost
        //public const string AuthorizationServer = "http://localhost:35427";
        //public const string AuthorizationServerPath = AuthorizationServer + "/UMRPublic";
        //public const string ResourceServerPath = "http://localhost:2696";
        //public static List<string> WebClientServerPaths = new List<string> { "http://localhost:14247", "http://localhost:14248" };
        //public const bool IsProductionBuild = false;

        ////////////  Spike Android/IOS
        //public const string AuthorizationServer = "http://172.16.205.67/UMRPublicAuthorizationServer";
        //public const string AuthorizationServerPath = AuthorizationServer + "/UMRPublic";
        //public const string ResourceServerPath = "http://172.16.205.67:2222";
        //public static List<string> WebClientServerPaths = new List<string> { "http://172.16.205.67:1212" };
        //public const bool IsProductionBuild = false;

        ////////////  Spike Web
        //public const string AuthorizationServer = "http://172.16.205.67:1515";
        //public const string AuthorizationServerPath = AuthorizationServer + "/UMRPublic";
        //public const string ResourceServerPath = "http://172.16.205.67:1516";
        //public static List<string> WebClientServerPaths = new List<string> { "http://172.16.205.67:1517", "http://spike:1517", "http://localhost:1517" };
        //public const bool IsProductionBuild = false;

        ////////////  172.16.1.11 TEST
        //public const string AuthorizationServer = "http://www.umrtest.com/UMRPublicAPIAuthorizationServer";
        //public const string AuthorizationServerPath = AuthorizationServer + "/UMRPublic";
        //public const string ResourceServerPath = "http://www.umrtest.com/UMRPublicAPIResourceServer";
        //public static List<string> WebClientServerPaths = new List<string> { "http://www.umrtest.com", "http://umrtest.com", "http://localhost" };
        //public const bool IsProductionBuild = false;

        ////////////  172.16.1.104 PRODUCTION
        public const string AuthorizationServer = "https://www.universalmedicalrecord.com/UMRPublicAPIAuthorizationServer";
        public const string AuthorizationServerPath = AuthorizationServer + "/UMRPublic";
        public const string ResourceServerPath = "https://www.universalmedicalrecord.com/UMRPublicAPIResourceServer";
        public static List<string> WebClientServerPaths = new List<string> { "http://www.universalmedicalrecord.com", "http://universalmedicalrecord.com", "http://localhost", "https://www.universalmedicalrecord.com", "https://universalmedicalrecord.com" };
        public const bool IsProductionBuild = false;


        public const string TokenPath = "/connect/token";
        public const string UserinfoPath = "/connect/userinfo";
        public const string IntrospectPath = "/connect/introspect";
        public const string RevocationPath = "/connect/revocation";
        public const string UMRPublicScope = "UMRPublic";
        public const string UMRPublicScopeSecret = "s*|9%2~*=95*+|t8*~3**%;U73*+-c";
        public const string AndroidClientId = "AndroidUMRPublicClient";
        public const string WebClientId = "WebUMRPublicClient";
    }
}