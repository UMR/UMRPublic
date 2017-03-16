using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;

namespace UMRPublicBO
{
    public class Utility
    {
        public static string GenerateMD5(string password)
        {
            return string.Join("", MD5.Create().ComputeHash(
               Encoding.ASCII.GetBytes(password)).Select(s => s.ToString("x2")));
        }
    }
}
