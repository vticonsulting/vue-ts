import { useMenuItem } from '~/composables/useMenuItem'
import { Permissions } from '~/enums/Permissions'

export const userInfo = {
  permissions: [7, 10, 19, 34, 36, 37, 39, 46],
}

const addServiceAreaMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddServiceArea),
  title: 'Add Service Area',
  href: '/settings/service-areas/add',
})

const addAnnouncementMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddAnnouncement),
  title: 'Add Announcement',
  href: '/settings/announcements/add',
})

const announcementListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ViewAnnouncements),
  title: 'Announcement List',
  href: '/settings/announcements',
})

const addServiceTypeMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddServiceType),
  title: 'Add Service Type',
  href: '/settings/service-types/add',
})

export const serviceTypeListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ViewServiceTypes),
  title: 'Service Type List',
  href: '/settings/service-types',
})

export const territoriesListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ViewRegionsMenu),
  title: 'Territories List',
  href: '/settings/regions',
})

export const manageFAQListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ManageFAQList),
  title: 'FAQ List',
  href: '/settings/faq/edit',
})

export const editRolePermissionsMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.EditPermissions),
  title: 'Edit Role Permissions',
  href: '/settings/permissions/edit',
})

export const settingsMenu = useMenuItem({
  hidden: !(
    userInfo.permissions.includes(Permissions.ViewServiceTypes)
    || userInfo.permissions.includes(Permissions.AddServiceType)
    || userInfo.permissions.includes(Permissions.AddAnnouncement)
    || userInfo.permissions.includes(Permissions.AddServiceArea)
    || userInfo.permissions.includes(Permissions.ViewAnnouncements)
    || userInfo.permissions.includes(Permissions.AddEditTodaysMessage)
    || userInfo.permissions.includes(Permissions.ViewRegionsMenu)
    || userInfo.permissions.includes(Permissions.ManageFAQList)
    || userInfo.permissions.includes(Permissions.EditPermissions)
  ),
  title: 'Settings',
  icon: 'fas fa-cog',
  child: [
    territoriesListMenu,
    addServiceTypeMenu,
    serviceTypeListMenu,
    announcementListMenu,
    addAnnouncementMenu,
    addServiceAreaMenu,
    manageFAQListMenu,
    editRolePermissionsMenu,
  ],
})
