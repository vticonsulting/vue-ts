namespace Exemplar.Domain
{
  using System;
  using System.Collections.Generic;

  public class Permission
  {
    public Permission()
    {
      RolePermissions = new HashSet<RolePermission>();
    }

    public int Id { get; set; }

    public string GroupName { get; set; }

    public bool IsPage { get; set; }

    public string Name { get; set; }

    public int Order { get; set; }

    public virtual ICollection<RolePermission> RolePermissions { get; set; }
  }
}
