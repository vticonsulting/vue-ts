namespace Exemplar.Domain
{
  using System.Collections.Generic;

  public class UserType
  {
    public UserType()
    {
      ReportPublishTos = new HashSet<ReportPublishTo>();
    }

    public int Id { get; set; }

    public string Name { get; set; }

    public virtual ICollection<ReportPublishTo> ReportPublishTos { get; set; }
  }
}
