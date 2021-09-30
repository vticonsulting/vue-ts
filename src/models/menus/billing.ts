import { useMenuItem } from '~/composables/useMenuItem'
import { Permissions } from '~/enums/Permissions'

export const userInfo = {
  permissions: [5],
}

export const billingMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ViewBillingMenu),
  title: 'Billing',
  icon: 'fas fa-money-bill-alt',
  href: '/billing',
})
