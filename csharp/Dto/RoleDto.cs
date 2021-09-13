namespace Exemplar.Dto
{
  using System.Collections.Generic;
  using Exemplar.Dto.RolePermission;

  public class RoleDto
  {
    public RoleDto()
    {
      RolePermissions = new HashSet<RolePermissionDto>();
    }

    public int Id { get; set; }

    public string Name { get; set; }

    public string UserType { get; set; }

    public virtual ICollection<RolePermissionDto> RolePermissions { get; set; }
  }
}
