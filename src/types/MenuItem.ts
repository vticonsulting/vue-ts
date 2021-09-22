export type MenuItem = {
  title: string
  href?: string | object
  icon?: string
  hidden?: boolean
  child?: MenuItem[]
  exact?: boolean
  external?: boolean
}
