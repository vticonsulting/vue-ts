namespace Exemplar.Services
{
  using System.Net.Http;
  using System.Threading.Tasks;

  public interface IDataAccessService
  {
    //HttpClient client { get; set; }
    Task<DataAccessResult<T>> Post<T>(string route, T modelIn);

    Task<DataAccessResult<T>> Get<T>(string route);

    Task<DataAccessResult<T>> Delete<T>(string route);

    Task<DataAccessResult<O>> Put<T, O>(string route, T modelIn);

    // Task<DataAccessResult<T>> Patch<T>(string route, T modelIn);
  }
}
