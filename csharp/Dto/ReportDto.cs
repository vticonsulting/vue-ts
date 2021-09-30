namespace Exemplar.Dto
{
    using System;

    public class ReportDto
    {
      public bool? HasCovid { get; set; }
      public int Id { get; set; }
      public int PropertyInspectionFormId { get; set; }
      public DateTime CreatedOn { get; set; }
      public DateTime LastModifiedOn { get; set; }
      public string InsuredName { get; set; }
      public string InteriorInspected { get; set; }
      public string Adjuster { get; set; }
      public string ClaimNumber { get; set; }
      public string ContractorPresent { get; set; }
      public string ContractorPresentOnRoof { get; set; }
      public string OutsideAdjusterPresent { get; set; }

      // Roof
      public string StormDamagePresent { get; set; }

      // Siding
      public string SidingDamage { get; set; }
      public string SidingDamageBack { get; set; }
      public string SidingDamageFront { get; set; }
      public string SidingDamageLeft { get; set; }
      public string SidingDamageRight { get; set; }

      // Gutters / Downspouts
      public string DownSpoutsDamaged { get; set; }
      public string GuttersDamage { get; set; }
      public string CloggedGuttersBack { get; set; }
      public string CloggedGuttersFront { get; set; }
      public string CloggedGuttersLeft { get; set; }
      public string CloggedGuttersRight { get; set; }

      // Windows / Screens
      public string WindowScreenDamaged { get; set; }

      // Doors
      // Patio
      // Patio Covering
      // Garage
      // Carport
      // Pool Enclosure
      // A/C Unit
      public string RefrigerationCoilsDamaged { get; set; }

      // Deck
      public string DeckDamaged { get; set; }

      // Shed/Outbuilding
      public string OutBuildingDamage { get; set; }

      // Fence
      public string FenceDamaged { get; set; }
      public string FenceDeckDamaged { get; set; }
      public string DeckDamaged { get; set; }

      // Mailbox

      //////////// Interior
      public bool? InteriorDamaged { get; set; }
      public bool? InteriorInspected { get; set; }

      // Living Room
      public string LivingRoomDamaged { get; set; }
      public string LivingRoomDescription { get; set; }

      // Family Room
      public string FamilyRoomDamaged { get; set; }
      public string FamilyRoomDescription { get; set; }
      // Dining Room
      public string DiningRoomDamaged { get; set; }
      public string DiningRoomDescription { get; set; }

      // Kitchen
      public string KitchenDamaged { get; set; }
      public string KitchenDescription { get; set; }

      // Breakfast Area
      public string BreakfastAreaDamaged { get; set; }
      public string BreakfastAreaDescription { get; set; }
      // Pantry
      public string PantryDamaged { get; set; }
      public string PantryDescription { get; set; }
      // Foyer
      public string FoyerDamaged { get; set; }
      public string FoyerDescription { get; set; }

      // Game Room
      public string GameRoomDamaged { get; set; }
      public string GameRoomDescription { get; set; }

      // Office/Study
      public string OfficeDamaged { get; set; }
      public string OfficeDescription { get; set; }

      // Hall
      public string HallDamaged { get; set; }
      public string HallDescription { get; set; }

      // Hall Closet
      public string HallClosetDamaged { get; set; }
      public string HallClosetDescription { get; set; }

      // Utility Room
      public string UtilityDamaged { get; set; }
      public string UtilityDescription { get; set; }

      // Garage
      public string GarageDamaged { get; set; }
      public string GarageDescription { get; set; }

      // Attic
      public string AtticDamaged { get; set; }
      public string AtticDescription { get; set; }

      // Crawlspace
      public string CrawlSpaceDamaged { get; set; }
      public string CrawlSpaceDescription { get; set; }

      // Basement
      public string BasementDamaged { get; set; }
      public string BasementDescription { get; set; }

      // Master Bedroom
      public string MasterBedroomDamaged { get; set; }
      public string MasterBedroomDescription { get; set; }

      // Master Bedroom Closet
      public string MasterClosetDamaged { get; set; }
      public string MasterClosetDescription { get; set; }

      // Bedroom 2
      public string BedroomTwoDamaged { get; set; }
      public string BedroomTwoDescription { get; set; }

      // Bedroom 2 Closet
      public string BedroomTwoClosetDamaged { get; set; }
      public string BedroomTwoClosetDescription { get; set; }

      // Bedroom 3
      public string BedroomThreeDamaged { get; set; }
      public string BedroomThreeDescription { get; set; }

      // Bedroom 3 Closet
      public string BedroomThreeClosetDamaged { get; set; }
      public string BedroomThreeClosetDescription { get; set; }

      // Bedroom 4
      public string BedroomFourDamaged { get; set; }
      public string BedroomFourDescription { get; set; }

      // Bedroom 4 Closet
      public string BedroomFourClosetDamaged { get; set; }
      public string BedroomFourClosetDescription { get; set; }

      // Master Bathroom
      public string MasterBathroomDamaged { get; set; }
      public string MasterBathroomDescription { get; set; }

      // Bathroom 2
      public string BathroomTwoDamaged { get; set; }
      public string BathroomTwoDescription { get; set; }

      // Bathroom 3
      public string BathroomThreeDamaged { get; set; }
      public string BathroomThreeDescription { get; set; }

      // Contents
      public string ContentsDamaged { get; set; }
      public string ContentsDescription { get; set; }

      public string AdditionalFiveArea { get; set; }
      public string AdditionalFiveDamaged { get; set; }
      public string AdditionalFiveDescription { get; set; }
      public string AdditionalFourArea { get; set; }
      public string AdditionalFourDamaged { get; set; }
      public string AdditionalFourDescription { get; set; }
      public string AdditionalOneArea { get; set; }
      public string AdditionalOneDamaged { get; set; }
      public string AdditionalOneDescription { get; set; }
      public string AdditionalSummary { get; set; }
      public string AdditionalThreeArea { get; set; }
      public string AdditionalThreeDamaged { get; set; }
      public string AdditionalThreeDescription { get; set; }
      public string AdditionalTwoArea { get; set; }
      public string AdditionalTwoDamaged { get; set; }
      public string AdditionalTwoDescription { get; set; }
      public string AwningDamaged { get; set; }
      public string FlashingVentsDamaged { get; set; }
      public string LandscapeDamaged { get; set; }
      public string NeighborhoodDamaged { get; set; }
      public string PatioFurnitureDamaged { get; set; }
      public string PlasticPipebootDamaged { get; set; }
      public string RodentDamage { get; set; }
    }
}
