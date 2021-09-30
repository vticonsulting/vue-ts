import { useMenuItem } from '~/composables/useMenuItem'
import { Permissions } from '~/enums/Permissions'

export const userInfo = {
  permissions: [4, 26, 27],
}

export const customerListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ViewCustomersMenu),
  title: 'Customers List',
  href: '/customers',
})

export const addCustomerMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddCustomer),
  title: 'Add Customer',
  href: '/customers/add',
})

export const addBusinessUnitMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddBusinessUnit),
  title: 'Add Business Unit',
  href: '/customers/add-business-unit',
})

export const customersMenu = useMenuItem({
  hidden: !(
    userInfo.permissions.includes(Permissions.ViewCustomersMenu)
    || userInfo.permissions.includes(Permissions.AddCustomer)
    || userInfo.permissions.includes(Permissions.AddBusinessUnit)
  ),
  title: 'Customers',
  icon: 'fas fa-users',
  child: [
    customerListMenu,
    addCustomerMenu,
    addBusinessUnitMenu,
  ],
})
