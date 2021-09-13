namespace Exemplar.Api.MappingProfiles
{
  using AutoMapper;
  using Exemplar.Domain;
  using Exemplar.Dto;

  public class UserTypeProfile : Profile
  {
    public UserTypeProfile()
    {
      CreateMap<UserType, UserTypeDto>()
          .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
          .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
          .ForAllOtherMembers(vm => vm.Ignore());
    }
  }
}
