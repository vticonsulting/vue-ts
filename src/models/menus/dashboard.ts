import { useMenuItem } from '~/composables/useMenuItem'

export const dashboardMenu = useMenuItem({
  href: '/dashboard',
  hidden: false,
  title: 'Dashboard',
  icon: 'fas fa-tachometer-alt',
})
