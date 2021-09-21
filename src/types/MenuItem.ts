export type MenuItem = {
  title: string
  href?: string | undefined
  icon?: string
  hidden?: boolean
  child?: MenuItem[]
}
