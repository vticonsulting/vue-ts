namespace Exemplar.Api.MappingProfiles
{
  using AutoMapper;
  using Exemplar.Domain;
  using Exemplar.Dto;

  public class UserProfile : Profile
  {
    public UserProfile()
    {
      CreateMap<User, UserDto>()
          .ForMember(dest => dest.Comment, opt => opt.MapFrom(src => src.Comment))
          .ForMember(dest => dest.CreatedOn, opt => opt.MapFrom(src => src.CreatedOn))
          .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
          .ForMember(dest => dest.HaagCertificationNumber, opt => opt.MapFrom(src => src.HaagCertificationNumber))
          .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
          .ForMember(dest => dest.IsActive, opt => opt.MapFrom(src => src.IsActive))
          .ForMember(dest => dest.IsApproved, opt => opt.MapFrom(src => src.IsApproved))
          .ForMember(dest => dest.IsHaagCertified, opt => opt.MapFrom(src => src.IsHaagCertified))
          .ForMember(dest => dest.IsInCollections, opt => opt.MapFrom(src => src.IsInCollections))
          .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
          .ForMember(dest => dest.MailingCity, opt => opt.MapFrom(src => src.MailingCity))
          .ForMember(dest => dest.MailingPostalCode, opt => opt.MapFrom(src => src.MailingPostalCode))
          .ForMember(dest => dest.MailingStateId, opt => opt.MapFrom(src => src.MailingStateId))
          .ForMember(dest => dest.MailingStreetAddress1, opt => opt.MapFrom(src => src.MailingStreetAddress1))
          .ForMember(dest => dest.MailingStreetAddress2, opt => opt.MapFrom(src => src.MailingStreetAddress2))
          .ForMember(dest => dest.MiddleName, opt => opt.MapFrom(src => src.MiddleName))
          .ForMember(dest => dest.PrimaryEmail, opt => opt.MapFrom(src => src.PrimaryEmail))
          .ForMember(dest => dest.PrimaryPhone, opt => opt.MapFrom(src => src.PrimaryPhone))
          .ForMember(dest => dest.PrimaryPhoneExt, opt => opt.MapFrom(src => src.PrimaryPhoneExt))
          .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role.Name))
          .ForMember(dest => dest.SecondaryEmail, opt => opt.MapFrom(src => src.SecondaryEmail))
          .ForMember(dest => dest.SecondaryPhone, opt => opt.MapFrom(src => src.SecondaryPhone))
          .ForMember(dest => dest.ServiceCity, opt => opt.MapFrom(src => src.ServiceCity))
          .ForMember(dest => dest.ServicePostalCode, opt => opt.MapFrom(src => src.ServicePostalCode))
          .ForMember(dest => dest.ServiceStateId, opt => opt.MapFrom(src => src.ServiceStateId))
          .ForMember(dest => dest.ServiceStreetAddress1, opt => opt.MapFrom(src => src.ServiceStreetAddress1))
          .ForMember(dest => dest.ServiceStreetAddress2, opt => opt.MapFrom(src => src.ServiceStreetAddress2))
          .ForMember(dest => dest.SmsEmail, opt => opt.MapFrom(src => src.SmsEmail))
          .ForMember(dest => dest.UserType, opt => opt.MapFrom(src => src.UserType.Name))
          .ForAllOtherMembers(vm => vm.Ignore());

      CreateMap<User, UserListDto>()
          .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
          .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.LastName + ", " + src.FirstName))
          .ForAllOtherMembers(vm => vm.Ignore());

      CreateMap<User, UserProfileDto>()
         .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
         .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.LastName + ", " + src.FirstName))
         .ForMember(dest => dest.IsActive, opt => opt.MapFrom(src => src.IsActive))
         .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role))
         .ForMember(dest => dest.UserType, opt => opt.MapFrom(src => src.UserType))
         .ForAllOtherMembers(vm => vm.Ignore());
    }
  }
}
