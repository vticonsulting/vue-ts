import { useMenuItem } from '~/composables/useMenuItem'
import { Permissions } from '~/enums/Permissions'

export const userInfo = {
  permissions: [6, 28, 29, 30, 31],
}

const userListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ViewUsersMenu),
  title: 'Users List',
  href: '/users',
})

const bulkAssignMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.BulkAssign),
  title: 'Bulk Assign',
  href: '/users/bulk-assign',
})

const addApplicationUserMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddApplicationUser),
  title: 'Add Application User',
  href: '/users/add-application-user',
})

const addServiceTechMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddServiceTech),
  title: 'Add Service Tech',
  href: '/users/add-service-tech',
})

const addInsuranceAdjusterMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddInsuranceAdjuster),
  title: 'Add Insurance Adjuster',
  href: '/users/add-insurance-adjuster',
})

export const usersMenu = useMenuItem({
  hidden: !(
    userInfo.permissions.includes(Permissions.ViewUsersMenu)
    || userInfo.permissions.includes(Permissions.BulkAssign)
    || userInfo.permissions.includes(Permissions.AddApplicationUser)
    || userInfo.permissions.includes(Permissions.AddServiceTech)
    || userInfo.permissions.includes(Permissions.AddInsuranceAdjuster)
  ),
  title: 'Users',
  icon: 'fas fa-users',
  child: [
    userListMenu,
    bulkAssignMenu,
    addApplicationUserMenu,
    addServiceTechMenu,
    addInsuranceAdjusterMenu,
  ],
})
