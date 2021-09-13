namespace Exemplar.Web.Models
{
  public struct CurrentUser
  {
    public bool IsAuthenticated;
    public bool IsAuthorized;
    public string Name;
    public int UserId;
    public string UserLevel;
    public string UserType;
    public string StatusCode;
  }
}
