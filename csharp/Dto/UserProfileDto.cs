namespace Exemplar.Dto
{
  public class UserProfileDto
  {
    public int Id { get; set; }

    public string FullName { get; set; }

    public bool IsActive { get; set; }

    public RoleDto Role { get; set; }

    public UserTypeDto UserType { get; set; }
  }
}
