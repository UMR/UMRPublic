using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UMRPublicAPI.Models
{
    public class ExternalJobModel
    {
        public long ExternalJobID { get; set; }
        public string State { get; set; }
        public string County { get; set; }
        public int ReqJobOpeningId { get; set; }
        public string JobRequirement { get; set; }
    }
}