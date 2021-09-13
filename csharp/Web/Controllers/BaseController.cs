namespace Exemplar.Web.Controllers
{
  using System;
  using System.Diagnostics;
  using System.Globalization;
  using System.Linq;
  using System.Net.Http;
  using System.Security.Claims;
  using System.Threading.Tasks;
  using Exemplar.Dto;
  using Exemplar.Services;
  using Exemplar.Utilities.MappingTypes;
  using Exemplar.Web.Helper;
  using Exemplar.Web.Models;
  using Exemplar.Web.Utilities;
  using Hancock.Web.Core.Utilities;
  using Microsoft.AspNetCore.Authentication;
  using Microsoft.AspNetCore.Authentication.Cookies;
  using Microsoft.AspNetCore.Http;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.Extensions.Configuration;
  using Microsoft.Extensions.Options;
  using Microsoft.IdentityModel.Protocols.OpenIdConnect;
  using Newtonsoft.Json;

  public class BaseController : Controller
  {
    private IExemplarMessageService exemplarMessageService;
    private CurrentUser currentUser;
    private readonly string exceptionMessage = "We're Sorry! An exception has occurred and our I.T. team has been notified. Please try again later.";
    private readonly IHttpClientFactory httpClientFactory;
    private readonly string exemplarApiClient = "ExemplarApiClient";
    private readonly IOptions<AppSettings> appSettings;
    private readonly IConfiguration configuration;

    public BaseController(
        IHttpClientFactory httpClientFactory,
        IExemplarMessageService exemplarMessageService,
        IConfiguration configuration,
        IOptions<AppSettings> appSettings)
    {
      this.httpClientFactory = httpClientFactory;
      this.appSettings = appSettings;
      this.configuration = configuration;
      this.exemplarMessageService = exemplarMessageService;
    }

    public string DefaultHoverWalletId
    {
      get { return configuration["DefaultHoverWalletId"] ?? appSettings.Value.DefaultHoverWalletId; }
    }

    public string RedisCacheConnectionString
    {
      get { return configuration["RedisCacheConnectionString"] ?? appSettings.Value.RedisCacheConnectionString; }
    }

    public string HoverRedisCacheKey
    {
      get { return configuration["HoverRedisCacheKey"] ?? appSettings.Value.HoverRedisCacheKey; }
    }

    public string HoverBaseApi
    {
      get { return configuration["HoverBaseApi"] ?? appSettings.Value.HoverBaseApi; }
    }

    public string HoverAdminEmail
    {
      get { return configuration["HoverAdminEmail"] ?? appSettings.Value.HoverAdminEmail; }
    }

    public string HoverAdminUserId
    {
      get { return configuration["HoverAdminUserId"] ?? appSettings.Value.HoverAdminUserId; }
    }

    public string BaseAddress
    {
      get { return configuration["BaseAddress"] ?? appSettings.Value.BaseAddress; }
    }

    public string ExemplarCoreUrl
    {
      get { return configuration["ExemplarCoreUrl"] ?? appSettings.Value.ExemplarCoreUrl; }
    }

    public string HancockEagleViewTriggerEmail
    {
      get { return configuration["HancockEagleViewTriggerEmail"] ?? appSettings.Value.HancockEagleViewTriggerEmail; }
    }

    public string EagleviewUserId
    {
      get { return configuration["EagleviewUserId"] ?? appSettings.Value.EagleviewUserId; }
    }

    public string EagleViewSourceID
    {
      get { return configuration["EagleViewSourceID"] ?? appSettings.Value.EagleViewSourceID; }
    }

    public string EagleViewClientSecret
    {
      get { return configuration["EagleViewSourceID"] ?? appSettings.Value.EagleViewClientSecret; }
    }

    public string EagleViewUserName
    {
      get { return configuration["EagleViewUserName"] ?? appSettings.Value.EagleViewUserName; }
    }

    public string EagleViewUserPassword
    {
      get { return configuration["EagleViewUserPassword"] ?? appSettings.Value.EagleViewUserPassword; }
    }

    public string EagleViewSendFaildNotificationEmail
    {
      get { return configuration["EagleViewSendFaildNotificationEmail"] ?? appSettings.Value.EagleViewSendFaildNotificationEmail; }
    }

    public string EagleViewPrimaryProductId
    {
      get { return configuration["EagleViewPrimaryProductId"] ?? appSettings.Value.EagleViewPrimaryProductId; }
    }

    public string EagleViewDeliveryProductId
    {
      get { return configuration["EagleViewDeliveryProductId"] ?? appSettings.Value.EagleViewDeliveryProductId; }
    }

    public string EagleViewBaseUrl
    {
      get { return configuration["EagleViewBaseUrl"] ?? appSettings.Value.EagleViewBaseUrl; }
    }

    public string EagleViewRequestsLimitRange
    {
      get { return configuration["EagleViewRequestsLimitRange"] ?? appSettings.Value.EagleViewRequestsLimitRange; }
    }

    public string EagleViewMeasurementInstructionType
    {
      get { return configuration["EagleViewMeasurementInstructionType"] ?? appSettings.Value.EagleViewMeasurementInstructionType; }
    }

    public string EagleViewFileType
    {
      get { return configuration["EagleViewFileType"] ?? appSettings.Value.EagleViewFileType; }
    }

    public string EagleViewFileFormatId
    {
      get { return configuration["EagleViewFileFormatId"] ?? appSettings.Value.EagleViewFileFormatId; }
    }

    public string ExemplarApiUrl
    {
      get { return configuration["ExemplarApiUrl"] ?? appSettings.Value.ExemplarApiUrl; }
    }

    public string StorageAccount
    {
      get { return configuration["StorageAccount"] ?? appSettings.Value.StorageAccount; }
    }

    public string AssetFileShare
    {
      get { return configuration["AssetFileShare"] ?? appSettings.Value.AssetFileShare; }
    }

    public string XactwareFileShare
    {
      get { return configuration["XactwareFileShare"] ?? appSettings.Value.XactwareFileShare; }
    }

    public string ImgPath
    {
      get { return configuration["ImgPath"] ?? appSettings.Value.ImgPath; }
    }

    public string AssetVaultPath
    {
      get { return configuration["AssetVaultPath"] ?? appSettings.Value.AssetVaultPath; }
    }

    public string ImgToken
    {
      get { return configuration["ImgToken"] ?? appSettings.Value.ImgToken; }
    }

    public IExemplarMessageService ExemplarMessageService
    {
      get
      {
        return this.exemplarMessageService;
      }
    }

    public CurrentUser CurrentUser
    {
      get
      {
        currentUser = HttpContext.Session.GetObjectFromJson<CurrentUser>("CurrentUser");

        if (currentUser.UserId == 0 && currentUser.StatusCode == null)
        {
          Task.Run(async () => await CreateCurrentUser()).GetAwaiter().GetResult();
          currentUser = HttpContext.Session.GetObjectFromJson<CurrentUser>("CurrentUser");
          return currentUser;
        }

        return currentUser;
      }
    }

    public static string GetCurrentMethod([System.Runtime.CompilerServices.CallerMemberName] string method = "")
    {
      return method;
    }

    public async Task WriteOutIdentityInformation()
    {
      // get the saved identity token
      var identityToken = await HttpContext.GetTokenAsync(OpenIdConnectParameterNames.IdToken);
      var accessToken = await HttpContext.GetTokenAsync(OpenIdConnectParameterNames.AccessToken);
      var expiresAt = await HttpContext.GetTokenAsync("expires_at");

      var expiresAtAsDateTimeOffset = DateTimeOffset.Parse(expiresAt, CultureInfo.InvariantCulture);

      Trace.WriteLine("-----------------------------------------------------------------------------");

      Trace.WriteLine($"Identity token: {identityToken}");
      Trace.WriteLine($"Access token: {accessToken}");
      Trace.WriteLine($"Expires At: {expiresAtAsDateTimeOffset}");

      // write out the user claims
      foreach (var claim in User.Claims)
      {
        Trace.WriteLine($"Claim type: {claim.Type} - Claim value: {claim.Value}");
      }

      Trace.WriteLine("-----------------------------------------------------------------------------");
    }

    protected async Task<string> GetAccessToken()
    {
      return await HttpContext.GetTokenAsync(OpenIdConnectParameterNames.AccessToken);
    }

    private async Task CreateCurrentUser()
    {
      if (currentUser.UserId == 0)
      {
        try
        {
          var apiClient = httpClientFactory.CreateClient(exemplarApiClient);
          HttpRequestMessage request = null;
          currentUser = default(CurrentUser);
          var claimsIdentity = (ClaimsIdentity)User.Identity;
          currentUser.IsAuthenticated = claimsIdentity.IsAuthenticated;
          currentUser.Name = claimsIdentity.Claims.FirstOrDefault(c => c.Type == "name").Value;

          if (claimsIdentity.Claims.FirstOrDefault(x => x.Type == "userId") == null)
          {
            try
            {
              var email = claimsIdentity.Claims.FirstOrDefault(x => x.Type == "email");
              if (email == null)
              {
                await ExemplarMessageService.InsertTraceMessageAsync(GetType().ToString(), GetCurrentMethod(), $"User: {currentUser.Name} ", string.Empty, "Claims Identity email is null");
                currentUser.StatusCode = "error";
                HttpContext.Session.SetObjectAsJson("CurrentUser", currentUser);
                return;
              }

              var route = $"users/{email.Value}?UserMappingType={UserMappingType.Profile}";
              request = new HttpRequestMessage(HttpMethod.Get, $"users/{email.Value}?UserMappingType={UserMappingType.Profile}");

              var response = await apiClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead).ConfigureAwait(false);

              if (response.IsSuccessStatusCode)
              {
                var modelString = await response.Content.ReadAsStringAsync();
                var viewModel = JsonConvert.DeserializeObject<UserProfileDto>(modelString);
                claimsIdentity.AddClaim(new Claim("userId", viewModel.Id.ToString()));
                claimsIdentity.AddClaim(new Claim("userType", viewModel.UserType.Name));

                if (viewModel.Role != null)
                {
                  claimsIdentity.AddClaim(new Claim("role", viewModel.Role.Name));
                }

                currentUser.UserId = System.Convert.ToInt32(claimsIdentity.Claims.FirstOrDefault(c => c.Type == "userId").Value);
                currentUser.UserLevel = claimsIdentity.Claims.FirstOrDefault(c => c.Type == "role").Value;
                currentUser.UserType = claimsIdentity.Claims.FirstOrDefault(c => c.Type == "userType").Value;
                currentUser.IsAuthorized = true;
                HttpContext.Session.SetObjectAsJson("CurrentUser", currentUser);
              }
              else
              {
                await ExemplarMessageService.InsertTraceMessageAsync(GetType().ToString(), GetCurrentMethod(), string.Empty, string.Empty, response.StatusCode.ToString());
                currentUser.StatusCode = "error";
                HttpContext.Session.SetObjectAsJson("CurrentUser", currentUser);
              }
            }
            catch (Exception ex)
            {
              await ExemplarMessageService.InsertExceptionMessageAsync(GetType().ToString(), GetCurrentMethod(), $"Request Uri: {request.RequestUri}", string.Empty, ex);

              if (ex.Message == "refreshToken null")
              {
                await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
              }

              currentUser.StatusCode = "refreshToken null";
              HttpContext.Session.SetObjectAsJson("CurrentUser", currentUser);
            }
          }
          else
          {
            currentUser.StatusCode = "error";
            HttpContext.Session.SetObjectAsJson("CurrentUser", currentUser);
          }
        }
        catch (Exception ex)
        {
        }
      }
    }
  }
}
