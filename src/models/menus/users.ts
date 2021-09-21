import { useMenuItem } from '~/composables/useMenuItem'
import { Permissions } from '~/enums/Permissions'

export const userInfo = {
  permissions: [6, 28, 29, 30, 31],
}

const userListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ViewUsersMenu),
  title: 'User List',
  icon: 'fas fa-list',
})

const bulkAssignMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.BulkAssign),
  title: 'Bulk Assign',
  icon: '',
})

const addApplicationUserMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddApplicationUser),
  title: 'Add Application User',
  icon: 'fas fa-user-plus',
})

const addServiceTechMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddServiceTech),
  title: 'Add Service Tech',
  icon: 'fas fa-plus',
})

const addInsuranceAdjusterMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddInsuranceAdjuster),
  title: 'Add Insurance Adjuster',
  icon: 'fas fa-plus',
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
