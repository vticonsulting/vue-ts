namespace Exemplar.Api.Repositories
{
  using System.Collections.Generic;
  using System.Linq;
  using System.Threading.Tasks;
  using Exemplar.Data;
  using Exemplar.Domain;
  using Exemplar.Utilities.ResourceParameters;
  using Microsoft.EntityFrameworkCore;

  public class UserRepo
  {
    private ExemplarContext context;

    public UserRepo(ExemplarContext context)
    {
      this.context = context;
    }

    public async Task<List<User>> GetListAsync(UserResourceParameters resourceParameters)
    {
      return await context.Users
          .Where(x => resourceParameters.ShowActiveOnly ? x.IsActive == true : (x.IsActive == false || x.IsActive == true))
          .OrderBy(x => x.LastName)
          .ToListAsync();
    }

    public async Task<User> GetByEmailAsync(string email)
    {
      return await context.Users
          .Include(x => x.UserType)
          .Include(x => x.Role)
          .ThenInclude(x => x.RolePermissions)
          .ThenInclude(x => x.Permission)
          .FirstOrDefaultAsync(x => x.PrimaryEmail == email);
    }

    public async Task<User> GetByIdAsync(int id)
    {
      return await context.Users
          .Include(x => x.UserType)
          .Include(x => x.Role)
          .ThenInclude(x => x.RolePermissions)
          .ThenInclude(x => x.Permission)
          .FirstOrDefaultAsync(x => x.Id == id);
    }
  }
}
