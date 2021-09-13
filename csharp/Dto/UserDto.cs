namespace Exemplar.Dto
{
  using System;

  public class UserDto
  {
    public int Id { get; set; }

    public string Comment { get; set; }

    public DateTime CreatedOn { get; set; }

    public string FirstName { get; set; }

    public string HaagCertificationNumber { get; set; }

    public bool IsActive { get; set; }

    public bool? IsApproved { get; set; }

    public bool? IsHaagCertified { get; set; }

    public bool IsInCollections { get; set; }

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

    public string SecondaryEmail { get; set; }

    public string SecondaryPhone { get; set; }

    public string ServiceCity { get; set; }

    public string ServicePostalCode { get; set; }

    public int? ServiceStateId { get; set; }

    public string ServiceStreetAddress1 { get; set; }

    public string ServiceStreetAddress2 { get; set; }

    public string SmsEmail { get; set; }

    public string Role { get; set; }

    public string UserType { get; set; }

    public string MailingState { get; set; }

    public string ServiceState { get; set; }

    public string CreatedByUser { get; set; }
  }
}
