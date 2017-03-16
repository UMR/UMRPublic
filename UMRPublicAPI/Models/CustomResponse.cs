using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UMRPublicAPI.Models
{
    public class CustomResponse<T>
    {
        public T Data { get; set; }
        public int Count { get; set; }
        public string Message { get; set; }

        public CustomResponse(string message)
        {
            this.Message = message;
        }
        public CustomResponse(T data, int count)
        {
            this.Data = data;
            this.Count = count;
        }
    }
}