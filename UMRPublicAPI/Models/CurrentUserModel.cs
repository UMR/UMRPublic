using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UMRPublicAPI.Models
{
    public class CurrentUserModel
    {
        public int UserCredentialId { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public bool IsActive { get; set; }
    }
}