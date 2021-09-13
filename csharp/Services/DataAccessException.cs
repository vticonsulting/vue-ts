namespace Exemplar.Services
{
  using Exemplar.Dto.Enums;
  using System;
  using System.Text;

  public class DataAccessException : Exception
  {
    public new string Message { get; set; }
    public DataAccessException(Exception innerException)
        : base("Data Access Error.", innerException)
    {
    }
    public DataAccessException(ExemplarMessageTypeEnum messageType, System.Exception ex)
        : base(ex.Message, ex.InnerException)
    {
      Message = BuildMessage(base.Message);

    }
    private string BuildMessage(string baseMessage)
    {
      var stringBuilder = new StringBuilder();
      stringBuilder.AppendLine(baseMessage);

      var innerException = InnerException;
      while (innerException != null)
      {
        stringBuilder.AppendLine(innerException.Message);
        innerException = innerException.InnerException;
      }


      return stringBuilder.ToString();
    }
  }
}
