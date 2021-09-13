<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import RecipeForm from "./components/RecipeForm.vue";
import { SidebarItem } from 'vue-sidebar-menu'
import UserTable from './components/UserTable.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

type buttonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
type ComicUniverse = 'Marvel' | 'DC'

interface Hero {
  name: string
  age: number
  activeAvenger: boolean
  powers: string[]
  universe: ComicUniverse
}

const dangerBtnStyles: buttonType = 'danger'

interface TodoItem {
  label: string
  complete: boolean
}

const futureTodoItem = {} as TodoItem
futureTodoItem.label = 'Learn Vue'
futureTodoItem.complete = false

const collapsed = ref(false)
const isOnMobile = ref(false)

// function createList(item: number): number[] {
//   const newList: number[] = []
//   newList.push(item)
//   return newList
// }
// const numberList = createList(1)

// function createList<CustomType>(item: CustomType): CustomType[] {
//   const newList: CustomType[] = []
//   newList.push(item)
//   return newList
// }
// const numberList = createList<number>(1)
// numberList.push(2)

function createList<T>(item: T): T[] {
  const newList: T[] = []
  newList.push(item)
  return newList
}

const stringList = createList<string>('123')
stringList.push('456')

const numberList = createList<number>(1)
numberList.push(2)

const addProject = ref({
  title: 'Add Project',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const projectsList = ref({
  title: 'Projects List',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const projects = ref({
  title: 'Projects',
  hidden: true,
  icon: 'fa fa-code',
  child: [
    projectsList.value,
    addProject.value,
  ] as SidebarItem[],
} as SidebarItem)

const calendar = ref({
  title: 'Calendar',
  href: '#',
  icon: 'fas fa-calendar',
  hidden: true,
} as SidebarItem)

const addBusinessUnit = ref({
  title: 'Add Business Unit',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const addCustomer = ref({
  title: 'Add Customer',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const customerList = ref({
  title: 'Customer List',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const customers = ref({
  title: 'Customers',
  icon: 'fas fa-users',
  hidden: true,
  child: [
    customerList.value,
    addCustomer.value,
    addBusinessUnit.value,
  ] as SidebarItem[],
} as SidebarItem)

const billing = ref({
  title: 'Billing',
  href: '#',
  icon: 'far fa-credit-card',
  hidden: true,
} as SidebarItem)

const addInsuranceAdjuster = ref({
  title: 'Add Service Tech',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const addServiceTech = ref({
  title: 'Add Service Tech',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const addApplicationUser = ref({
  title: 'Add Application User',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const bulkAssign = ref({
  title: 'Bulk Assign',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const userList = ref({
  title: 'User List',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const users = ref({
  title: 'Users',
  icon: 'fas fa-users',
  hidden: true,
  child: [
    userList.value,
    bulkAssign.value,
    addApplicationUser.value,
    addServiceTech.value,
    addInsuranceAdjuster.value,
  ] as SidebarItem[],
} as SidebarItem)

const addReport = ref({
  title: 'Add Report',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const reportList = ref({
  title: 'Report List',
  href: '#',
  icon: 'fas fa-plus',
  hidden: false,
} as SidebarItem)

const reports = ref({
  title: 'Reports',
  icon: 'fa fa-cog',
  hidden: true,
  child: [
    reportList.value,
    addReport.value,
  ] as SidebarItem[],
} as SidebarItem)

const editRolePermissions = ref({
  title: 'Edit Role Permissions',
  href: '#',
  hidden: true,
  icon: 'fa fa-cog',
} as SidebarItem)

const addServiceArea = ref({
  title: 'Add Service Area',
  href: '#',
  icon: 'fa fa-cog',
  hidden: true,
} as SidebarItem)

const territoryList = ref({
  title: 'Territory List',
  href: '#',
  icon: 'fa fa-cog',
  hidden: true,
} as SidebarItem)

const faqList = ref({
  title: 'FAQ List',
  href: '#',
  icon: 'fa fa-cog',
  hidden: true,
} as SidebarItem)

const addAnnouncement = ref({
  title: 'Add Announcement',
  href: '#',
  icon: 'fa fa-cog',
  hidden: true,
} as SidebarItem)

const announcementList = ref({
  title: 'Announcement List',
  href: '#',
  icon: 'fa fa-cog',
  hidden: true,
} as SidebarItem)

const addServiceType = ref({
  title: 'Add Service Type',
  href: '#',
  icon: 'fa fa-cog',
  hidden: true,
} as SidebarItem)

const serviceTypeList = ref({
  title: 'Service Type List',
  href: '#',
  icon: 'fa fa-cog',
  hidden: true,
} as SidebarItem)

const settings = ref({
  title: 'Settings',
  icon: 'fa fa-cog',
  hidden: false,
  child: [
    serviceTypeList.value,
    addServiceType.value,
    announcementList.value,
    addAnnouncement.value,
    faqList.value,
    territoryList.value,
    addServiceArea.value,
    editRolePermissions.value,
  ] as SidebarItem[],
} as SidebarItem)

const menu = ref([
  projects.value,
  calendar.value,
  customers.value,
  billing.value,
  users.value,
  reports.value,
  settings.value,
] as SidebarItem[])

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

function onResize() {
  if (window.innerWidth <= 767) {
    isOnMobile.value = true
    collapsed.value = true
  }
  else {
    isOnMobile.value = false
    collapsed.value = false
  }
}

function onToggleCollapse() {
  collapsed.value = !collapsed.value
  // this.$emit('toggle-collapse', collapsed)
}
</script>

<template>
  <!-- <RecipeForm /> -->
  <div :class="['min-h-screen flex flex-col', collapsed ? 'ml-12' : 'ml-66']">
    <header-component />

    <main class="flex-1">
      <div>
        <UseMouse v-slot="{ x, y }">
          x: {{ x }}
          y: {{ y }}
        </UseMouse>

        <div class="h-24 bg-gradient-to-b from-black/0 to-black/12"></div>
        <div class="h-24 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,.12)]"></div>
        <div class="h-24 bg-gradient-to-b from-transparent to-black to-opacity-12"></div>
        <user-table />
      </div>
    </main>

    <sidebar-menu
      v-model:collapsed="collapsed"
      :show-one-child="true"
      :menu="menu"
      @update:collapsed="onToggleCollapse"
    >
      <template #header>
        <a href="#" class="bg-white flex py-2 text-primary-500 items-center">
          <base-logo name="hancock-h"></base-logo>

          <span v-if="!collapsed" class="font-bold" style="white-space: nowrap;">Claims Consultants</span>
        </a>

        <div class="mt-3 p-2">
          <a href="#" class="flex text-white items-center hover:text-white">
            <base-avatar class="rounded-full h-8 w-8"></base-avatar>

            <div v-if="!collapsed" class="text-xs ml-2">
              <span class="font-bold uppercase">Michael Houser</span>
              <div>mhouser@hancockclaims.com</div>
            </div>
          </a>
        </div>
      </template>
      <template #toggle-icon class="flex space-x-2 px-2 items-center">
        <span>
          <base-icon-outlined
            class="h-5 text-gray-300 w-5"
            :name="collapsed ? 'chevron-right' : 'chevron-left'"
          ></base-icon-outlined>
        </span>

        <span v-if="!collapsed" class="whitespace-nowrap">Toggle Toolbar</span>
      </template>
    </sidebar-menu>

    <footer-component />
  </div>
</template>
