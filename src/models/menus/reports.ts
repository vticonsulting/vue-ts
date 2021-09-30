import { useMenuItem } from '~/composables/useMenuItem'
import { Permissions } from '~/enums/Permissions'

export const userInfo = {
  permissions: [40, 22, 32],
}

const reportListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.ReportList),
  title: 'Reports List',
  href: {
    path: '/reports',
  },
  external: true,
})

const addReportMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.AddEditReports),
  title: 'Add Report',
  href: '/reports/add',
})

const userReportListMenu = useMenuItem({
  hidden: !userInfo.permissions.includes(Permissions.UserReportList),
  title: 'User Reports List',
  href: {
    path: '/reports/user',
  },
})

export const reportsMenu = useMenuItem({
  hidden: !(
    userInfo.permissions.includes(Permissions.ReportList)
    || userInfo.permissions.includes(Permissions.AddEditReports)
    || userInfo.permissions.includes(Permissions.UserReportList)
  ),
  title: 'Reports',
  icon: 'fas fa-chart-bar',
  child: [
    reportListMenu,
    addReportMenu,
    userReportListMenu,
  ],
})
