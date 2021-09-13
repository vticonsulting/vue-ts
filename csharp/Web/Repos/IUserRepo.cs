namespace Exemplar.Web.Repos
{
  using System.Collections.Generic;
  using System.Threading.Tasks;
  using Exemplar.Dto;
  using Exemplar.Services;

  public interface IUserRepo
  {
    Task<DataAccessResult<UserDto>> GetByUserEmailAsync(string primaryEmail);
  }
}
