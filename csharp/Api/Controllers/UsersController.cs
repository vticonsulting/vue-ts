namespace Exemplar.Api.Controllers
{
  using System;
  using System.Collections.Generic;
  using System.Threading.Tasks;
  using AutoMapper;
  using Exemplar.Api.Helpers;
  using Exemplar.Api.Repositories;
  using Exemplar.Domain;
  using Exemplar.Dto;
  using Exemplar.Utilities.MappingTypes;
  using Exemplar.Utilities.ResourceParameters;
  using Microsoft.AspNetCore.Authorization;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.Extensions.Logging;

  [Route("api/users")]
  [Authorize]
  public class UsersController : BaseController
  {
    private readonly UserRepo repo;
    private readonly IUrlHelper urlHelper;
    private readonly IMapper mapper;
    private readonly ILogger<UsersController> logger;

    public UsersController(ExemplarMessageRepo exemplarMessageRepo, IMapper mapper, UserRepo repository, IUrlHelper urlHelper, ILogger<UsersController> logger)
         : base(exemplarMessageRepo)
    {
      repo = repository;
      this.mapper = mapper;
      this.logger = logger;
      this.urlHelper = urlHelper;
    }

    [HttpGet("{email}", Name = "GetUser")]
    public async Task<IActionResult> GetAsync(string email, UserMappingType userMappingType = 0)
    {
      var methodParams = string.Format("email: {0}", email);
      try
      {
        var user = await repo.GetByEmailAsync(email);

        if (user == null)
          return NotFound($"No User record found.");

        switch (userMappingType)
        {
          case UserMappingType.Profile:
            var ret = mapper.Map<UserProfileDto>(user);
            return Ok(ret);

          default:
            return Ok(mapper.Map<List<UserDto>>(user));
        }
      }
      catch (System.Exception ex)
      {
        await LogException(GetType().ToString(), GetCurrentMethod(), methodParams, string.Empty, ex);

        return StatusCode(500, ExceptionMessage);
      }
    }

    private PagedList<User> CreatePagedList(List<User> lst, UserResourceParameters resourceParameters, string routeName)
    {
      var model = PagedList<User>.Create(lst, resourceParameters.PageNumber, resourceParameters.PageSize);
      Response.Headers.Add("X-Pagination", Newtonsoft.Json.JsonConvert.SerializeObject(model.CreatePaginationDto(model, routeName, urlHelper)));
      return model;
    }
  }
}
