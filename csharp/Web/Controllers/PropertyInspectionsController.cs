namespace Exemplar.Web.Areas.PropertyInspection.Controllers
{
  using System;
  using System.Net.Http;
  using System.Security.Claims;
  using System.Threading.Tasks;
  using Exemplar.Services;
  using Exemplar.Web.Controllers;
  using Exemplar.Web.Utilities;
  using Hancock.Web.Core.Utilities;
  using Microsoft.AspNetCore.Authorization;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.Extensions.Configuration;
  using Microsoft.Extensions.Options;
  using Newtonsoft.Json;

  [Authorize]
  [Area("PropertyInspection")]
  public class PropertyInspectionsController : BaseController
  {
    public PropertyInspectionsController(
        IExemplarMessageService exemplarMessageService,
        IOptions<AppSettings> appSettings,
        IConfiguration configuration,
        IHttpClientFactory httpClientFactory
    )
    : base(httpClientFactory, exemplarMessageService, configuration, appSettings)
    {
      httpClientFactory = httpClientFactory ?? throw new ArgumentNullException(nameof(httpClientFactory));
    }

    public async Task<IActionResult> Index(string projectNumber)
    {
      if (!CurrentUser.IsAuthenticated)
      {
        if (CurrentUser.StatusCode == "error")
          return RedirectToAction("Error", "Home");

        if (CurrentUser.StatusCode == "refreshToken null")
          return RedirectToAction("Index", "PropertyInspections", new { Area = "PropertyInspection" });
      }

      //await WriteOutIdentityInformation();
      if (CurrentUser.StatusCode == "error")
        return RedirectToAction("AccessDenied", "Authorization");

      if (!CurrentUser.IsAuthorized)
        return RedirectToAction("Logout", "Authorization");

      var claimsIdentity = (ClaimsIdentity)User.Identity;

      ViewData["projectNumber"] = string.Empty;
      ViewData["AssetVaultPath"] = AssetVaultPath;
      ViewData["ImgToken"] = ImgToken;
      ViewData["ImgPath"] = ImgPath;
      ViewData["ExemplarApiUrl"] = ExemplarApiUrl;
      ViewData["ExemplarCoreUrl"] = ExemplarCoreUrl;
      ViewData["UserId"] = CurrentUser.UserId;
      var accessToken = await GetAccessToken();

      if (string.IsNullOrEmpty(accessToken))
      {
        return RedirectToAction("Logout", "Authorization");
      }

      ViewData["AccessToken"] = accessToken;
      if (projectNumber != null)
      {
        ViewData["projectNumber"] = projectNumber;
      }

      return View();
    }
  }
}
