import { useMenuItem } from '~/composables/useMenuItem'

export const tokensMenu = useMenuItem({
  title: 'Tokens',
  href: '/design/tokens',
})
export const designMenu = useMenuItem({
  title: 'Design',
  icon: 'fab fa-dribbble',
  child: [
    tokensMenu,
  ],
})
