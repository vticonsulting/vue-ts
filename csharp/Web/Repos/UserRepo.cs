namespace Exemplar.Web.Repos
{
  using System.Collections.Generic;
  using System.Threading.Tasks;
  using Exemplar.Dto;
  using Exemplar.Services;
  using Exemplar.Web.Utilities.Routes;

  public class UserRepo : IUserRepo
  {
    private readonly IDataAccessService dataAccessService;

    public UserRepo(IDataAccessService dataAccessService)
    {
      this.dataAccessService = dataAccessService;
    }

    public async Task<DataAccessResult<UserDto>> GetByUserEmailAsync(string email)
    {
      return await dataAccessService.Get<UserDto>(UserRoute.Get(email));
    }
  }
}
