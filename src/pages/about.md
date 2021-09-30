---
title: About
---

```ts
type MenuItem = {
  title: string
  href?: string
  icon?: string
  hidden?: boolean
  child?: MenuItem[]
}
```

```ts
function useMenuItem({ hidden, title, icon, child, href }: MenuItem) {
  if (child && child.length > 0) {
    return { hidden, title, icon, child, }
  }
  return {
    hidden,
    href: href ?? '#',
    title,
    icon,
  }
}
```
<route>
{
  meta: {
    layout: 'hancock'
  }
}
</route>
