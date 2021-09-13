namespace Exemplar.Domain
{
  public class RolePermission
  {
    public int PermissionId { get; set; }

    public int RoleId { get; set; }

    public virtual Role Role { get; set; }

    public virtual Permission Permission { get; set; }
  }
}
