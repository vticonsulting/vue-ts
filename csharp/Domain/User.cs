namespace Exemplar.Domain
{
  using System;
  using System.Collections.Generic;
  using System.ComponentModel.DataAnnotations;

  public class User
  {
    public User()
    {
      AdjusterManagers = new HashSet<AdjusterManager>();
      AssetLogItems = new HashSet<AssetLogItem>();
      Assets = new HashSet<Asset>();
      Claims = new HashSet<Claim>();
      Comments = new HashSet<ProjectComment>();
      Companies = new HashSet<CompanyUser>();
      CompanyAdjusterDirectors = new HashSet<Company>();
      CompanyAdjusterManagers = new HashSet<Company>();
      CompanyBillingContacts = new HashSet<Company>();
      CreatedAdjusterManager = new HashSet<AdjusterManager>();
      CreatedAnnouncements = new HashSet<Announcement>();
      CreatedAppointments = new HashSet<Appointment>();
      CreatedAvailableServiceTypes = new HashSet<AvailableServiceType>();
      CreatedCompanies = new HashSet<Company>();
      CreatedCompanyEmailDomains = new HashSet<CompanyEmailDomain>();
      CreatedCompanyServiceTypes = new HashSet<CompanyServiceType>();
      CreatedCompanyUsers = new HashSet<CompanyUser>();
      CreatedHelpDesks = new HashSet<HelpDesk>();
      CreatedIaFirms = new HashSet<IaFirm>();
      CreatedProjectRoofAssessmentForms = new HashSet<ProjectRoofAssessmentForm>();
      CreatedProjectLogItems = new HashSet<ProjectLogItem>();
      CreatedProjectInspections = new HashSet<ProjectInspection>();
      CreatedProjects = new HashSet<Project>();
      CreatedProjectServiceTypes = new HashSet<ProjectServiceType>();
      CreatedPropertyInspectionForms = new HashSet<PropertyInspectionForm>();
      CreatedReports = new HashSet<Report>();
      CreatedServiceAreaTechnicians = new HashSet<ServiceAreaTechnician>();
      CreatedServiceAreas = new HashSet<ServiceArea>();
      CreatedServiceRegionManager = new HashSet<ServiceRegionManager>();
      CreatedServiceRegions = new HashSet<ServiceRegion>();
      CreatedSmtpLogs = new HashSet<SmtpLog>();
      CreatedTodaysMessages = new HashSet<TodaysMessage>();
      EvOrderedProjects = new HashSet<EvOrderedProject>();
      ExternalClaims = new HashSet<ExternalClaim>();
      FlaggedProjects = new HashSet<Project>();
      GeomniOrderedProjects = new HashSet<GeomniOrderedProject>();
      ManagedAdjusters = new HashSet<AdjusterManager>();
      PendingClaims = new HashSet<PendingClaim>();
      ProjectAdjusters = new HashSet<Project>();
      ProjectBillingContacts = new HashSet<Project>();
      ProjectInspectionTechnician = new HashSet<ProjectInspectionTechnician>();
      ProjectLogItems = new HashSet<ProjectLogItem>();
      CreatedPropertyInspectionForms = new HashSet<PropertyInspectionForm>();
      ServiceAreas = new HashSet<ServiceAreaTechnician>();
      ServiceRegionLeads = new HashSet<ServiceRegion>();
      ServiceRegionManagers = new HashSet<ServiceRegionManager>();
      Appointments = new HashSet<Appointment>();
      ProjectContactedBy = new HashSet<Project>();
    }

    public int Id { get; set; }

    public double? AddressLatitude { get; set; }

    public double? AddressLongitude { get; set; }

    public string Comment { get; set; }

    public int CreatedBy { get; set; }

    public DateTime CreatedOn { get; set; }

    public DateTime? DeactivationDate { get; set; }

    public string FirstName { get; set; }

    public string HaagCertificationNumber { get; set; }

    public string Initials { get; set; }

    public bool IsActive { get; set; }

    public bool? IsApproved { get; set; }

    public bool? IsHaagCertified { get; set; }

    public bool IsInCollections { get; set; }

    public DateTime? LastLogin { get; set; }

    public string LastName { get; set; }

    public string MailingCity { get; set; }

    public string MailingPostalCode { get; set; }

    public int? MailingStateId { get; set; }

    public string MailingStreetAddress1 { get; set; }

    public string MailingStreetAddress2 { get; set; }

    public string MiddleName { get; set; }

    public string PrimaryEmail { get; set; }

    public string PrimaryPhone { get; set; }

    public string PrimaryPhoneExt { get; set; }

    public int? RoleId { get; set; }

    public string SecondaryEmail { get; set; }

    public string SecondaryPhone { get; set; }

    public string ServiceCity { get; set; }

    public string ServicePostalCode { get; set; }

    public int? ServiceStateId { get; set; }

    public string ServiceStreetAddress1 { get; set; }

    public string ServiceStreetAddress2 { get; set; }

    public string SmsEmail { get; set; }

    public int UserTypeId { get; set; }

    [Timestamp]
    public byte[] RowVersion { get; set; }

    public virtual Role Role { get; set; }

    public virtual UserType UserType { get; set; }

    public virtual State MailingState { get; set; }

    public virtual State ServiceState { get; set; }

    public virtual ICollection<AdjusterManager> AdjusterManagers { get; set; }

    public ICollection<Appointment> Appointments { get; set; }

    public ICollection<AssetLogItem> AssetLogItems { get; set; }

    public ICollection<Asset> Assets { get; set; }

    public ICollection<Claim> Claims { get; set; }

    public ICollection<ProjectComment> Comments { get; set; }

    public ICollection<CompanyUser> Companies { get; set; }

    public ICollection<Company> CompanyAdjusterDirectors { get; set; }

    public ICollection<Company> CompanyAdjusterManagers { get; set; }

    public ICollection<Company> CompanyBillingContacts { get; set; }

    public ICollection<Announcement> CreatedAnnouncements { get; set; }

    public ICollection<AdjusterManager> CreatedAdjusterManager { get; set; }

    public ICollection<Appointment> CreatedAppointments { get; set; }

    public ICollection<AvailableServiceType> CreatedAvailableServiceTypes { get; set; }

    public ICollection<Company> CreatedCompanies { get; set; }

    public ICollection<CompanyEmailDomain> CreatedCompanyEmailDomains { get; set; }

    public ICollection<CompanyServiceType> CreatedCompanyServiceTypes { get; set; }

    public ICollection<CompanyUser> CreatedCompanyUsers { get; set; }

    public ICollection<HelpDesk> CreatedHelpDesks { get; set; }

    public ICollection<IaFirm> CreatedIaFirms { get; set; }

    public ICollection<ProjectRoofAssessmentForm> CreatedProjectRoofAssessmentForms { get; set; }

    public ICollection<Project> CreatedProjects { get; set; }

    public ICollection<ServiceAreaCapacity> CreatedServiceAreaCapacity { get; set; }

    public ICollection<ProjectInspection> CreatedProjectInspections { get; set; }

    public ICollection<ProjectLogItem> CreatedProjectLogItems { get; set; }

    public ICollection<ProjectServiceType> CreatedProjectServiceTypes { get; set; }

    public ICollection<PropertyInspectionForm> CreatedPropertyInspectionForms { get; set; }

    public ICollection<SmtpLog> CreatedSmtpLogs { get; set; }

    public ICollection<Report> CreatedReports { get; set; }

    public ICollection<ServiceAreaTechnician> CreatedServiceAreaTechnicians { get; set; }

    public ICollection<ServiceArea> CreatedServiceAreas { get; set; }

    public ICollection<ServiceRegionManager> CreatedServiceRegionManager { get; set; }

    public ICollection<ServiceRegion> CreatedServiceRegions { get; set; }

    public ICollection<TodaysMessage> CreatedTodaysMessages { get; set; }

    public ICollection<EvOrderedProject> EvOrderedProjects { get; set; }

    public ICollection<ExternalClaim> ExternalClaims { get; set; }

    public ICollection<Project> FlaggedProjects { get; set; }

    public ICollection<GeomniOrderedProject> GeomniOrderedProjects { get; set; }

    public virtual ICollection<AdjusterManager> ManagedAdjusters { get; set; }

    public ICollection<Project> ProjectAdjusters { get; set; }

    public ICollection<PendingClaim> PendingClaims { get; set; }

    public ICollection<Project> ProjectBillingContacts { get; set; }

    public ICollection<Project> ProjectContactedBy { get; set; }

    public ICollection<ProjectInspectionTechnician> ProjectInspectionTechnician { get; set; }

    public ICollection<ProjectLogItem> ProjectLogItems { get; set; }

    public ICollection<ServiceAreaTechnician> ServiceAreas { get; set; }

    public ICollection<ServiceRegion> ServiceRegionLeads { get; set; }

    public ICollection<ServiceRegionManager> ServiceRegionManagers { get; set; }
  }
}
