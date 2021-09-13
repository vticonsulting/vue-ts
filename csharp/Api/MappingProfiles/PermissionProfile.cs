namespace Exemplar.Api.MappingProfiles
{
  using AutoMapper;
  using Exemplar.Domain;
  using Exemplar.Dto;

  public class PermissionProfile : Profile
  {
    public PermissionProfile()
    {
      CreateMap<Permission, PermissionDto>()
          .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
          .ForMember(dest => dest.GroupName, opt => opt.MapFrom(src => src.GroupName))
          .ForMember(dest => dest.IsPage, opt => opt.MapFrom(src => src.IsPage))
          .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
          .ForMember(dest => dest.Order, opt => opt.MapFrom(src => src.Order))
          .ForAllOtherMembers(vm => vm.Ignore());

      CreateMap<Permission, PermissionListDto>()
          .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
          .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
          .ForAllOtherMembers(vm => vm.Ignore());
    }
  }
}
