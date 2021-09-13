namespace Exemplar.Api.MappingProfiles
{
  using AutoMapper;
  using Exemplar.Domain;
  using Exemplar.Dto.RolePermission;

  public class RolePermissionProfile : Profile
  {
    public RolePermissionProfile()
    {
      CreateMap<RolePermission, RolePermissionDto>()
          .ForMember(dest => dest.PermissionId, opt => opt.MapFrom(src => src.PermissionId))
          .ForMember(dest => dest.RoleId, opt => opt.MapFrom(src => src.RoleId))
          .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role))
          .ForMember(dest => dest.Permission, opt => opt.MapFrom(src => src.Permission))
          .ForAllOtherMembers(vm => vm.Ignore());
    }
  }
}
