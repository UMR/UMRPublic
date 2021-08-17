using log4net;
using System;

namespace UMRPublicAPI.AuthorizationServer
{
    public class Log
    {
        private static readonly ILog log = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        internal static void Write(Exception ex)
        {
            string exceptionMessage = string.Empty;
            if (ex.InnerException == null)
            {
                exceptionMessage = ex.Message;
            }
            else
            {
                exceptionMessage = ex.InnerException.Message;
            }
            log.Error("\n\nDateTime: " + DateTime.Now + " \n Message: " + exceptionMessage + "\nStackTrace: " + ex.StackTrace);
        }
        internal static void Info(Object info)
        {
            log.Info("\n\nDateTime: " + DateTime.Now + " \n Info Message: " + info);
        }
    }
}