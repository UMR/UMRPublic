using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Web.Http.Cors;

namespace UMRPublicAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {            
            config.EnableCors(new EnableCorsAttribute(String.Join(", ", UMRPublicAPI.AuthorizationServer.Constants.WebClientServerPaths.ToArray()), "*", "*"));
            config.Filters.Add(new AuthorizeAttribute());
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            config.Formatters.JsonFormatter
            .SerializerSettings
            .ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        }
    }
}
