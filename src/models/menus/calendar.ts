import { useMenuItem } from '~/composables/useMenuItem'
import { Permissions } from '~/enums/Permissions'

export const userInfo = {
  permissions: [38],
}

export const calendarMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.Calendar),
  title: 'Calendar',
  href: '/calendar',
  icon: 'fas fa-calendar',
})
