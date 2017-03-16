using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using IdentityServer3.Core.Services;
using IdentityServer3.Core.Services.Default;
using IdentityServer3.Core.Models;
using System.Threading.Tasks;
using IdentityServer3.Core.Configuration;
using System.Security.Claims;
using IdentityServer3.Core.Validation;

namespace UMRPublicAPI.AuthorizationServer
{
    class CustomSecretValidator : ISecretValidator
    {
        public Task<SecretValidationResult> ValidateAsync(IEnumerable<Secret> secrets, ParsedSecret parsedSecret)
        {
            if (secrets.FirstOrDefault().Value == parsedSecret.Credential.ToString())
            {
                return Task.FromResult(new SecretValidationResult { Success = true });
            }
            return Task.FromResult(new SecretValidationResult { Success = false });
        }
    }
}
