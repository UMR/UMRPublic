using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobAPI.Models
{
    public class CountyState
    {
        public int Count { get; set; }
        public string County { get; set; }
        public int StateId { get; set; }
        public string StateName { get; set; }
    }
}