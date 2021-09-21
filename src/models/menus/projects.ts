import { useMenuItem } from '~/composables/useMenuItem'
import { Permissions } from '~/enums/Permissions'

export const userInfo = {
  permissions: [2, 20, 24, 25, 42],
}

export const addProjectMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddProject),
  title: 'Add Project',
  icon: 'fas fa-plus',
})

export const listProjectMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ViewProjectsList),
  title: 'Project List',
  icon: 'fas fa-list',
})

export const projectsMenu = useMenuItem({
  hidden: !(
    userInfo.permissions.includes(Permissions.ViewProjectsList)
    || userInfo.permissions.includes(Permissions.AddProject)
    || userInfo.permissions.includes(Permissions.ProjectAssignment)
    || userInfo.permissions.includes(Permissions.ViewClosedProjects)
    || userInfo.permissions.includes(Permissions.ExternalClaimsList)
  ),
  title: 'Projects',
  icon: 'fas fa-project-diagram',
  child: [
    listProjectMenu,
    addProjectMenu,
  ],
})
