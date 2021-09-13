namespace Exemplar.Api.Controllers
{
  using System.Collections.Generic;
  using System.Linq;
  using System.Threading.Tasks;
  using Exemplar.Api.Repositories;
  using Exemplar.Domain;
  using Exemplar.Dto.Enums;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.AspNetCore.Mvc.ModelBinding;

  public class BaseController : Controller
  {
    protected const int MaxPageSize = 20;
    protected const string ExceptionMessage = "Were sorry, an exception has occurred and reported to our I.T. department. If problem persists, please contact us";
    private ExemplarMessageRepo exemplarMessageRepo;

    public BaseController(ExemplarMessageRepo exemplarMessageRepo)
    {
      this.exemplarMessageRepo = exemplarMessageRepo;
    }

    public static string GetCurrentMethod([System.Runtime.CompilerServices.CallerMemberName] string method = "")
    {
      return method;
    }

    public string ReturnErrors(ModelStateDictionary.ValueEnumerable values)
    {
      var query = from state in values
                  from error in state.Errors
                  select error.ErrorMessage;

      return string.Join(",", query.ToList());
    }

    public async Task LogException(string className, string methodName, string parameters, string operation, System.Exception ex)
    {
      var message = new ExemplarMessage();
      message.VsProject = className.Substring(0, className.IndexOf(".", className.IndexOf(".") + 1));
      message.ClassName = className.Contains(".") ? className.Substring(className.LastIndexOf(".") + 1) : className;
      message.MethodName = methodName;
      message.Message = GetExceptionMessages(ex);
      message.ExemplarMessageTypeId = (int)ExemplarMessageTypeEnum.Exception;
      message.Parameters = parameters;
      message.Operation = operation;
      message.StackTrace = ex.StackTrace;
      message.CreatedOn = System.DateTime.Now;
      try
      {
        await exemplarMessageRepo.InsertAsync(message);
      }
      catch (System.Exception)
      {
      }
    }

    public async Task LogTrace(string className, string methodName, string parameters, string operation, string traceMessage)
    {
      var message = new ExemplarMessage();
      message.VsProject = className.Substring(0, className.IndexOf(".", className.IndexOf(".") + 1));
      message.ClassName = className.Contains(".") ? className.Substring(className.LastIndexOf(".") + 1) : className;
      message.MethodName = methodName;
      message.Message = traceMessage;
      message.ExemplarMessageTypeId = (int)ExemplarMessageTypeEnum.Exception;
      message.Parameters = parameters;
      message.Operation = operation;
      message.StackTrace = string.Empty;
      message.CreatedOn = System.DateTime.Now;
      try
      {
        await exemplarMessageRepo.InsertAsync(message);
      }
      catch (System.Exception)
      {
      }
    }

    private static string GetExceptionMessages(System.Exception e)
    {
      var messages = new List<string>();
      do
      {
        messages.Add(e.Message);
        e = e.InnerException;
      }
      while (e != null);
      return string.Join(" - ", messages);
    }
  }
}
