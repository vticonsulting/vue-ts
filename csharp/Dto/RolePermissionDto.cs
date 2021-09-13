namespace Exemplar.Dto.RolePermission
{
  public class RolePermissionDto
  {
    public int PermissionId { get; set; }

    public int RoleId { get; set; }

    public virtual RoleDto Role { get; set; }

    public virtual PermissionDto Permission { get; set; }
  }
}
