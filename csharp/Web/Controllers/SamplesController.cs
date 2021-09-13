namespace Exemplar.Web.Areas.Samples.Controllers
{
  using System;
  using System.Net.Http;
  using Exemplar.Services;
  using Exemplar.Web.Controllers;
  using Hancock.Web.Core.Utilities;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.Extensions.Configuration;
  using Microsoft.Extensions.Options;

  [Area("Samples")]

  public class SamplesController : BaseController
  {
    public SamplesController(
        IExemplarMessageService exemplarMessageService,
        IOptions<AppSettings> appSettings,
        IConfiguration configuration,
        IHttpClientFactory httpClientFactory
    )
   : base(httpClientFactory, exemplarMessageService, configuration, appSettings)
    {
      httpClientFactory = httpClientFactory ?? throw new ArgumentNullException(nameof(httpClientFactory));
    }

    public IActionResult Index()
    {
      return View();
    }
  }
}
