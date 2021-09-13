namespace Exemplar.Api.MappingProfiles
{
  using AutoMapper;
  using Exemplar.Domain;
  using Exemplar.Dto;

  public class ExemplarMessageProfile : Profile
  {
    public ExemplarMessageProfile()
    {
      CreateMap<ExemplarMessage, ExemplarMessageDto>()
          .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
          .ForMember(dest => dest.ClassName, opt => opt.MapFrom(src => src.ClassName))
           .ForMember(dest => dest.CreatedOn, opt => opt.MapFrom(src => src.CreatedOn))
           .ForMember(dest => dest.ExemplarMessageTypeId, opt => opt.MapFrom(src => src.ExemplarMessageTypeId))
           .ForMember(dest => dest.Message, opt => opt.MapFrom(src => src.Message))
           .ForMember(dest => dest.MethodName, opt => opt.MapFrom(src => src.MethodName))
           .ForMember(dest => dest.Parameters, opt => opt.MapFrom(src => src.Parameters))
           .ForMember(dest => dest.VsProject, opt => opt.MapFrom(src => src.VsProject))
           .ForMember(dest => dest.Operation, opt => opt.MapFrom(src => src.Operation))
           .ForMember(dest => dest.StackTrace, opt => opt.MapFrom(src => src.StackTrace))
           .ReverseMap()
           .ForAllOtherMembers(vm => vm.Ignore());
    }
  }
}
