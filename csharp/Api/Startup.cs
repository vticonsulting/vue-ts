namespace Exemplar.Api
{
  using System;
  using AutoMapper;
  using Exemplar.Api.Middleware;
  using Exemplar.Api.Repositories;
  using Exemplar.Data;
  using IdentityServer4.AccessTokenValidation;
  using Microsoft.AspNetCore.Builder;
  using Microsoft.AspNetCore.Hosting;
  using Microsoft.AspNetCore.Http;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.AspNetCore.Mvc.Infrastructure;
  using Microsoft.AspNetCore.Mvc.Routing;
  using Microsoft.EntityFrameworkCore;
  using Microsoft.Extensions.Configuration;
  using Microsoft.Extensions.DependencyInjection;
  using Microsoft.Extensions.Logging;
  using Microsoft.OpenApi.Models;
  using Newtonsoft.Json.Serialization;

  public class Startup
  {
    private const string ErrorMessage = "Were sorry, an unexpected error has occurred. If problem persist, please contact the Exemplar I.T. Department.";

    [Obsolete]
    public Startup(IConfiguration configuration, IHostingEnvironment env)
    {
      AppDomain.CurrentDomain.FirstChanceException += (sender, eventArgs) =>
      {
        var telemetry = new Microsoft.ApplicationInsights.TelemetryClient();

        telemetry.TrackTrace("FirstChanceException: " + eventArgs.Exception.ToString());
      };

      var builder = new ConfigurationBuilder()

         .SetBasePath(env.ContentRootPath)

         .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)

         .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)

         .AddEnvironmentVariables();

      Configuration = builder.Build();
    }

    public IConfiguration Configuration { get; set; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Exemplar API", Version = "v1" });
      });

      var authority = Configuration["authority"] ?? Configuration.GetValue<string>("AppSettings:authority");

      var connectionString = Configuration["connectionStrings:ExemplarCoreConnectionString"];

      var telemetry = new Microsoft.ApplicationInsights.TelemetryClient();

      telemetry.TrackTrace("authority: " + authority);
      telemetry.TrackTrace("connectionString: " + connectionString);
      services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
       .AddJwtBearer(opts =>
       {
         opts.Authority = authority;
         opts.RequireHttpsMetadata = true;
         opts.Audience = "exemplarapi";
       });

      services.AddMvc()
          .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
          .AddJsonOptions(options =>
          {
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            options.SerializerSettings.ContractResolver = new DefaultContractResolver();
          });

      // Keep in alpha order
      services.AddScoped<AssetLogItemRepo>();
      services.AddScoped<AssetRepo>();
      services.AddScoped<AutoSchedulerRepo>();
      services.AddScoped<AvailableServiceTypeRepo>();
      services.AddScoped<CompanyCarrierRepo>();
      services.AddScoped<CompanyEmailDomainRepo>();
      services.AddScoped<CompanyRepo>();
      services.AddScoped<CompanyServiceTypeRepo>();
      services.AddScoped<CustomerEmailAccountRepo>();
      services.AddScoped<ExemplarMessageRepo>();
      services.AddScoped<FieldTechAvailabilityRepo>();
      services.AddScoped<HoverOrderedProjectRepo>();
      services.AddScoped<HoverJobHistoryRepo>();
      services.AddScoped<ProjectCommentRepo>();
      services.AddScoped<ProjectInspectionRepo>();
      services.AddScoped<ProjectInspectionTravelTimeRepo>();
      services.AddScoped<ProjectInspectionTechnicianRepo>();
      services.AddScoped<ProjectLogItemRepo>();
      services.AddScoped<ProjectRepo>();
      services.AddScoped<PropertyInspectionFormDetailsRepo>();
      services.AddScoped<PropertyInspectionFormElevationRepo>();
      services.AddScoped<PropertyInspectionFormElevationRepo>();
      services.AddScoped<PropertyInspectionFormInteriorRepo>();
      services.AddScoped<PropertyInspectionFormInteriorRepo>();
      services.AddScoped<PropertyInspectionFormMainRepo>();
      services.AddScoped<PropertyInspectionFormRepo>();
      services.AddScoped<PropertyInspectionFormRoofDamagedItemRepo>();
      services.AddScoped<PropertyInspectionFormRoofRepo>();
      services.AddScoped<ServiceAreaRepo>();
      services.AddScoped<ServiceAreaAvailabilityRepo>();
      services.AddScoped<ServiceAreaPostalCodeRepo>();
      services.AddScoped<ServiceRegionRepo>();
      services.AddScoped<ServiceRegionManagerRepo>();
      services.AddScoped<ServiceAreaTechnicianRepo>();
      services.AddScoped<StateRepo>();
      services.AddScoped<UserRepo>();
      services.AddScoped<UserTypeRepo>();
      services.AddScoped<XactAnalysisCompanyConfigurationRepo>();
      services.AddScoped<XactAnalysisServiceMappingRepo>();

      services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
      services.AddScoped<IUrlHelper, UrlHelper>(implementationFactory =>
      {
        var actionContext = implementationFactory.GetService<IActionContextAccessor>().ActionContext;
        return new UrlHelper(actionContext);
      });

      services.AddSingleton(Configuration);

      services.AddDbContext<ExemplarContext>(o => o.UseSqlServer(connectionString));
      services.AddDbContext<ExemplarContext>(ServiceLifetime.Scoped);

      services.AddAutoMapper(typeof(Startup));
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler(appBuilder =>
        {
          appBuilder.Run(async context =>
                  {
                    context.Response.StatusCode = 500;
                    await context.Response.WriteAsync(ErrorMessage);
                  });
        });
      }

      app.UseCors(cfg =>
      {
        cfg.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
      });

      app.UseSwagger();

      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Exemplar API V1");
      });

      app.UseAuthentication();
      app.UseHttpsRedirection();

      //app.UseMiddleware<SecurityHeaderMiddleware>();
      app.UseMiddleware<RequestLoggerMiddleware>();
      app.UseStatusCodePages();
      app.UseMvc();
    }
  }
}
