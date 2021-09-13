using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace Exemplar.Services
{
  public class DataAccessService : IDataAccessService
  {
    private HttpClient apiClient { get; set; }

    public DataAccessService(HttpClient apiClient)
    {
      this.apiClient = apiClient;
    }

    public async Task<DataAccessResult<T>> Get<T>(string route)
    {
      var request = new HttpRequestMessage(HttpMethod.Get, route);

      var response = await apiClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead).ConfigureAwait(false);

      if (response.IsSuccessStatusCode)
      {
        string content = await response.Content.ReadAsStringAsync();
        return new DataAccessResult<T>(true, JsonConvert.DeserializeObject<T>(content), string.Empty);
      }
      else
      {
        var actionResult = response.ReasonPhrase;

        if (actionResult == "Not Found")
        {
          return new DataAccessResult<T>(false, default, "No Records Found.");
        }
        else
        {
          return new DataAccessResult<T>(false, default, response.Content.ReadAsStringAsync().Result);
        }
      }
    }

    public async Task<DataAccessResult<T>> Post<T>(string route, T modelIn)
    {
      var jsonDto = JsonConvert.SerializeObject(modelIn);

      var request = new HttpRequestMessage(HttpMethod.Post, route);

      request.Content = new StringContent(jsonDto, System.Text.Encoding.Unicode, "application/json");

      var response = await apiClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead).ConfigureAwait(false);

      if (response.IsSuccessStatusCode)
      {
        string content = await response.Content.ReadAsStringAsync();
        return new DataAccessResult<T>(true, JsonConvert.DeserializeObject<T>(content), string.Empty);
      }
      else
      {
        return new DataAccessResult<T>(false, default, response.Content.ReadAsStringAsync().Result);

        // TODO: Figure this out throw new DataAccessException(new Exception(response.Content.ReadAsStringAsync().Result));
      }
    }

    public async Task<DataAccessResult<O>> Put<T, O>(string route, T modelIn)
    {
      var jsonDto = JsonConvert.SerializeObject(modelIn);

      var request = new HttpRequestMessage(HttpMethod.Put, route);

      request.Content = new StringContent(jsonDto, System.Text.Encoding.Unicode, "application/json");

      var response = await apiClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead).ConfigureAwait(false);

      if (response.IsSuccessStatusCode)
      {
        return new DataAccessResult<O>(true, default, string.Empty);
      }
      else
      {
        //TODO CHECK 404 RESPONSE CODE AND HANDLE
        return new DataAccessResult<O>(false, default, response.Content.ReadAsStringAsync().Result);
      }
    }

    //public async Task<DataAccessResult<T>> Patch<T>(string route, T modelIn)
    //{
    //    var jsonDto = JsonConvert.SerializeObject(modelIn);

    //    HttpResponseMessage response = await client.PatchAsync(route, new StringContent(jsonDto, System.Text.Encoding.Unicode, "application/json"));

    //    if (response.IsSuccessStatusCode)
    //    {
    //        string content = await response.Content.ReadAsStringAsync();
    //        return new DataAccessResult<T>(true, JsonConvert.DeserializeObject<T>(content), string.Empty);
    //    }
    //    else
    //    {
    //        return new DataAccessResult<T>(false, default(T), response.Content.ReadAsStringAsync().Result);
    //    }
    //}

    public async Task<DataAccessResult<T>> Delete<T>(string route)
    {
      var request = new HttpRequestMessage(HttpMethod.Delete, route);

      var response = await apiClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead).ConfigureAwait(false);

      if (response.IsSuccessStatusCode)
      {
        return new DataAccessResult<T>(true, default, string.Empty);
      }
      else
      {
        return new DataAccessResult<T>(false, default, response.Content.ReadAsStringAsync().Result);
      }
    }
  }
}
