using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IdentityServer3.Core;
using IdentityServer3.Core.Extensions;
using IdentityServer3.Core.Models;
using IdentityServer3.Core.Services;
using IdentityServer3.Core.Services.Default;
using Microsoft.Owin;
using IdentityServer3.Core.Validation;
using IdentityServer3.Core.Services.InMemory;
using System.Collections.Concurrent;

namespace UMRPublicAPI.AuthorizationServer
{
    public class CustomInMemoryRefreshTokenStore : IRefreshTokenStore
    {
        readonly static ConcurrentDictionary<string, RefreshToken> _repository = new ConcurrentDictionary<string, RefreshToken>();
        //private OwinEnvironmentService OwinEnv;
        public CustomInMemoryRefreshTokenStore(OwinEnvironmentService env)
        {
            //OwinEnv = env;
        }
        public Task StoreAsync(string key, RefreshToken value)
        {
            _repository[key] = value;

            return Task.FromResult<object>(null);
        }

        public Task<RefreshToken> GetAsync(string key)
        {
            RefreshToken code;
            if (_repository.TryGetValue(key, out code))
            {
                //SetCookie(code);
                return Task.FromResult(code);
            }

            return Task.FromResult<RefreshToken>(null);
        }

        //private void SetCookie(RefreshToken code)
        //{
        //    var responseHeader = (IDictionary<string, string[]>)OwinEnv.Environment["owin.ResponseHeaders"];
        //    switch (code.ClientId)
        //    {
        //        case Constants.WebClientId:
        //            if (responseHeader.Keys.Contains("Set-Cookie"))
        //            {
        //                responseHeader.Remove("Set-Cookie");
        //            }
        //            string[] cookies = { "Access_Token=; expires="+DateTime.UtcNow.ToUniversalTime().ToString("ddd, dd MMM yyyy HH:mm:ss 'GMT'")+"; path=/;" 
        //                            ,"Refresh_Token=; expires="+DateTime.UtcNow.ToUniversalTime().ToString("ddd, dd MMM yyyy HH:mm:ss 'GMT'")+"; path=/;" };
        //            responseHeader.Add("Set-Cookie", cookies);
        //            string[] value = { "true" };
        //            responseHeader.Add("access-control-allow-credentials", value);
        //            break;
        //        case Constants.AndroidClientId:
        //            break;
        //    }
        //}

        public Task RemoveAsync(string key)
        {
            RefreshToken val;
            _repository.TryRemove(key, out val);

            return Task.FromResult<object>(null);
        }

        public Task<IEnumerable<ITokenMetadata>> GetAllAsync(string subject)
        {
            var query =
                from item in _repository
                where item.Value.SubjectId == subject
                select item.Value;
            var list = query.ToArray();
            return Task.FromResult(list.Cast<ITokenMetadata>());
        }

        public Task RevokeAsync(string subject, string client)
        {
            var query =
                from item in _repository
                where item.Value.SubjectId == subject && item.Value.ClientId == client
                select item.Key;

            foreach (var key in query)
            {
                RemoveAsync(key);
            }

            return Task.FromResult(0);
        }
    }
}
