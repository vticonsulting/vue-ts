namespace Exemplar.Domain
{
  using System.Collections.Generic;

  public class Role
  {
    public Role()
    {
      Users = new HashSet<User>();
      RolePermissions = new HashSet<RolePermission>();
      ReportPublishTos = new HashSet<ReportPublishTo>();
    }

    public int Id { get; set; }

    public string Name { get; set; }

    public int? UserTypeId { get; set; }

    public virtual UserType UserType { get; set; }

    public virtual ICollection<User> Users { get; set; }

    public virtual ICollection<RolePermission> RolePermissions { get; set; }

    public virtual ICollection<ReportPublishTo> ReportPublishTos { get; set; }
  }
}
