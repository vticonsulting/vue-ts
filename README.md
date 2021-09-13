# Vue TS

- My Dashboard
- Super Dashboard ViewSuperDashboard
- Projects ViewProjectsList, AddProject, ProjectAssignment, ViewClosedProjects, ExternalClaimsList
  - Projects List ViewProjectsList
  - Project Assignment ProjectAssignment
  - Add Project AddProject
  - Archived Projects ViewArchivedProjects
  - Closed Projects ViewClosedProjects
  - Upload Projects UploadProject
  - Pending Claims PendingClaimsList
  - External Claims ExternalClaimsList
  - EagleView Projects ViewEVProjects
  - Geomni Projects ViewEVProjects
- Auto Scheduler ViewSvtAvailibility
- Calendar Calendar
- Helpdesk FAQs ViewFAQList NOT ManageFAQList
- Customers ViewCustomersMenu, AddCustomer, AddBusinessUnit
  - Customer List ViewCustomersMenu
  - Add Customer AddCustomer
  - Add Business Unit AddBusinessUnit
- Billing ViewBillingMenu
- Users ViewUsersMenu, BulkAssign, AddApplicationUser, AddServiceTech,AddInsuranceAdjuster
  - User List ViewUsersMenu
  - Bulk Assign BulkAssign
  - Add Application User AddApplicationUser
  - Add Service Tech AddServiceTech
  - Add Insurance Adjuster AddInsuranceAdjuster
- Reports ReportList, AddEditReports, UserReportList
  - Report List ReportList
  - Add Report AddEditReports
  - Report List UserReportList
- Settings ViewServiceTypes, AddServiceType, AddAnnouncement, AddServiceArea, EditPermissions, ViewAnnouncements, AddEditTodaysMessage, ViewRegionsMenu, ManageFAQList
  - Service Type List ViewServiceTypes
  - Add Service Type AddServiceType
  - Announcement List
  - Add Announcement AddAnnouncement
  - FAQ List ManageFAQList
  - Territory List ViewRegionsMenu
  - Add Service Area AddServiceArea
  - Edit Role Permissions EditPermissions
  - IA Firm List ViewAddEditIAFirm
  - Release Information
  - Tokens Administrator

## Vue 3 + Typescript + Vite


This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
