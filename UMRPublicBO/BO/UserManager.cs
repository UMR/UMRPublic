using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UMRPublicBO.DAL;

namespace UMRPublicBO.BO
{
    public class UserManager
    {
        public static bool IsValidLogIn(string userName, string password)
        {
            var user = GetUserByUserNameAndPassword(userName, password);
            if (user.Count() > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static List<UserCredential> GetUserByUserNameAndPassword(string userName, string password)
        {
            UMRJobs JobsEntities = new UMRJobs();
            string generatedMD5 = Utility.GenerateMD5(password.Trim());
            try
            {

                var user = from userCred in JobsEntities.UserCredentials
                           where userCred.UserName == userName.Trim()
                           && userCred.UserPassword == generatedMD5
                           select userCred;
                return user.ToList();
            }
            catch(Exception ex) {
                throw ex;
            }
        }
        public static UserCredential GetUserByUserID(string userID)
        {            
            UMRJobs JobsEntities = new UMRJobs();            
            try
            {

                var user = (from userCred in JobsEntities.UserCredentials
                           where userCred.UserCredentialId.ToString() == userID                           
                           select userCred).FirstOrDefault();
                return user;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static bool UpdatePassword(int userCredentialId, string userName, string confirmPassword)
        {
            try
            {
                UserCredential userCredential;
                using (UMRJobs JobsEntities = new UMRJobs())
                {
                    userCredential = JobsEntities.UserCredentials.Where(s => s.UserCredentialId == userCredentialId && s.UserName == userName).FirstOrDefault<UserCredential>();
                }
                if (userCredential != null)
                {
                    userCredential.UserPassword = Utility.GenerateMD5(confirmPassword);
                }
                using (UMRJobs JobsEntities = new UMRJobs())
                {
                    JobsEntities.Entry(userCredential).State = EntityState.Modified;
                    JobsEntities.SaveChanges();
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
