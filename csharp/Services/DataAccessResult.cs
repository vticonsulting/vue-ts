namespace Exemplar.Services
{
  using System;
  public class DataAccessResult<T>
  {
    public T Model { get; set; }
    public bool Result { get; set; }
    public String ResultText { get; set; }

    public DataAccessResult(bool result, T obj, string resultText)
    {
      Result = result;
      Model = obj;
      ResultText = resultText;
    }
    public DataAccessResult()
    { }
  }
}
