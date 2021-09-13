namespace Exemplar.Api.Repositories
{
  using System.Threading.Tasks;
  using Exemplar.Data;
  using Exemplar.Domain;

  public class ExemplarMessageRepo
  {
    private ExemplarContext context;

    public ExemplarMessageRepo(ExemplarContext context)
    {
      this.context = context;
    }

    public async Task<ExemplarMessage> InsertAsync(ExemplarMessage model)
    {
      context.ExemplarMessages.Add(model);
      await context.SaveChangesAsync();
      return model;
    }

    public async Task DeleteAsync(int exemplarMessageId)
    {
      var entity = await context.ExemplarMessages.FindAsync(exemplarMessageId);
      if (entity != null)
      {
        context.ExemplarMessages.Remove(entity);
        await context.SaveChangesAsync();
      }
    }
  }
}
