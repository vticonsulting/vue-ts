namespace Exemplar.Api.Repositories
{
  using System.Collections.Generic;
  using System.Threading.Tasks;
  using Exemplar.Data;
  using Exemplar.Domain;
  using Microsoft.EntityFrameworkCore;

  public class UserTypeRepo
  {
    private ExemplarContext context;

    public UserTypeRepo(ExemplarContext context)
    {
      this.context = context;
    }

    public async Task<List<UserType>> GetAllAsync()
    {
      return await context.UserTypes.ToListAsync();
    }
  }
}
