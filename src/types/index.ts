import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

export enum Permissions {
  Administrator = 1,
  ViewProjectsList = 2,
  ViewSvtAvailabilityMenu = 3,
  ViewCustomersMenu = 4,
  ViewBillingMenu = 5,
  ViewUsersMenu = 6,
  ViewRegionsMenu = 7,
  ExportProjects = 8,
  ViewBillingPrice = 9,
  ViewAnnouncements = 10,
  ViewPastDueAppointments = 11,
  ViewTodaysAppointments = 12,
  ViewTomorrowsAppointments = 13,
  ViewRecentActivity = 14,
  ViewProjectsByStatus = 15,
  ViewServiceBilling = 16,
  ViewAugProjectsGrid = 17,
  ViewProjectsInMyRegion = 18,
  ViewServiceTypes = 19,
  AddProject = 20,
  AddEditTodaysMessage = 21,
  AddEditReports = 22,
  ViewSuperDashboard = 23,
  ViewClosedProjects = 24,
  ProjectAssignment = 25,
  AddCustomer = 26,
  AddBusinessUnit = 27,
  BulkAssign = 28,
  AddApplicationUser = 29,
  AddServiceTech = 30,
  AddInsuranceAdjuster = 31,
  ReportList = 32,
  AddAnnouncement = 34,
  AddServiceArea = 36,
  EditPermissions = 37,
  Calendar = 38,
  AddServiceType = 39,
  UserReportList = 40,
  ViewBillingInfo = 41,
  ExternalClaimsList = 42,
  ExternalClaimsDetails = 43,
  UploadProject = 44,
  PendingClaimsList = 45,
  ManageFAQList = 46,
  ViewFAQList = 47,
  ViewArchivedProjects = 48,
  ViewProjectComments = 49,
  AddEditAsset = 50,
  ViewAddEditIAFirm = 51,
  ViewEVProjects = 52,
  ViewCallScripts = 53,
  EditProject = 54,
  ProcessPendingProjects = 55
}