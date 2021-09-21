import { MenuItem } from '~/types/MenuItem'

export function useMenuItem({ hidden, title, icon, child, href }: MenuItem) {
  if (child && child.length > 0) {
    return {
      hidden,
      title,
      icon,
      child,
    }
  }
  return {
    hidden,
    href: href ?? '#',
    title,
    icon,
  }
}
