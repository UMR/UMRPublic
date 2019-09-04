using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UMRPublicBO.DAL;

namespace UMRPublicBO.BO
{
    public class JobManager
    {
        public static List<JobContent> GetAllJobs()
        {
            UMRJobs JobsEntities = new UMRJobs();

            var jobsData = from jobs in JobsEntities.JobContents
                            join uj in JobsEntities.UserJobs on jobs.JobContentId equals uj.JobContenId
                            where uj.IsActive == true
                            orderby jobs.JobContentId descending select jobs;
            return jobsData.ToList();
        }

        public static List<JobContent> GetAllJobsByUserID(int userId)
        {
            UMRJobs JobsEntities = new UMRJobs();
            List<JobContent> jobContents = new List<JobContent>();
            var jobsData = from jContent in JobsEntities.JobContents
                           join uJob in JobsEntities.UserJobs on jContent.JobContentId equals uJob.JobContenId
                           where uJob.UserCredentialId == userId && uJob.IsActive == true
                           orderby jContent.JobContentId descending
                           select jContent;
            if (jobsData.Any())
            {
                jobContents = jobsData.ToList();
            }
            return jobContents;
        }

        public static void InsetJob(JobContent jobContent, int userCredentialId)
        {
            using (UMRJobs JobsEntities = new UMRJobs())
            {
                JobsEntities.JobContents.Add(jobContent);
                JobsEntities.SaveChanges();

                UserJob userJob = new UserJob();
                userJob.UserCredentialId = userCredentialId;
                userJob.JobContenId = jobContent.JobContentId;
                userJob.IsActive = true;
                JobsEntities.UserJobs.Add(userJob);
                JobsEntities.SaveChanges();
            }

        }

        public static void UpdateJob(int jobContentId, int userCredentialId, string description)
        {
            JobContent jobContent;
            using (UMRJobs JobsEntities = new UMRJobs())
            {
                jobContent = JobsEntities.JobContents.Where(s => s.JobContentId == jobContentId).FirstOrDefault<JobContent>();
            }
            if (jobContent != null)
            {
                jobContent.JobDescription = description;
            }
            using (UMRJobs JobsEntities = new UMRJobs())
            {
                JobsEntities.Entry(jobContent).State = EntityState.Modified;
                JobsEntities.SaveChanges();
            }
        }

        public static void DeleteJob(int jobContentId, int userId)
        {
            try
            {
                using (UMRJobs JobsEntities = new UMRJobs())
                {
                    var result = JobsEntities.UserJobs.Where(j => j.JobContenId == jobContentId && j.UserCredentialId == userId).FirstOrDefault<UserJob>();
                    if (result != null)
                    {
                        result.IsActive = false;
                        JobsEntities.Entry(result).State = EntityState.Modified;
                        JobsEntities.SaveChanges();
                    }
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
        }

        public static JobContent JobExist(int jobContentId)
        {
            JobContent jobContent;
            using (UMRJobs JobsEntities = new UMRJobs())
            {
                jobContent = JobsEntities.JobContents.Where(s => s.JobContentId == jobContentId).FirstOrDefault<JobContent>();
            }
            return jobContent;
        }
    }
}
