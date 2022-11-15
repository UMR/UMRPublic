using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PublicJobAPI.Models
{
    public class JobContent
    {
        public int JobContentId { get; set; }
        public string JobTitle { get; set; }
        public string NoOfVacancies { get; set; }
        public string JobDescription { get; set; }
        public string JobNature { get; set; }
        public string EducationalRequirements { get; set; }
        public string ExperienceRequirements { get; set; }
        public string AdditionalJobRequirements { get; set; }
        public string JobLocation { get; set; }
        public string SalaryRange { get; set; }
        public string OtherBenefits { get; set; }
        public string EmailCV { get; set; }
        public string SpecialInstruction { get; set; }
        public string ApplicationDeadline { get; set; }
        public string CreatedDate { get; set; }
        public string County { get; set; }
        public string StateCode { get; set; }
        public string StateName { get; set; }
    }
}