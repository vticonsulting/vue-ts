<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ComponentPublicInstance } from 'vue'
import { SidebarItem } from 'vue-sidebar-menu'

export default defineComponent({
  emits: ['toggle-collapse'],
  setup(props, { emit }) {
    const state = reactive({
      collapsed: false,
      isOnMobile: false,
      menu: [
        {
          href: '#',
          title: 'Dashboard',
          icon: 'fas fa-tachometer-alt',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'template',
          //   },
          // },
          badge: {
            text: 'new',
            class: 'vsm--badge_default',
          },
        },
        {
          href: '#',
          title: 'Projects',
          icon: 'fas fa-project-diagram',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'collection',
          //   },
          // },
        },
        {
          href: '#',
          title: 'Calendar',
          icon: 'fas fa-calendar-alt',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'calendar',
          //   },
          // },
        },
        {
          href: '#',
          title: 'Customers',
          icon: 'fas fa-users',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'office-building',
          //   },
          // },
        },
        {
          href: '#',
          title: 'Billing',
          icon: 'fas fa-money-bill-alt',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'credit-card',
          //   },
          // },
        },
        {
          href: '#',
          title: 'Users',
          icon: 'fas fa-users',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'users',
          //   },
          // },
        },
        {
          href: '#',
          title: 'Reports',
          icon: 'fas fa-chart-bar',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'document-report',
          //   },
          // },
        },
        {
          href: '#',
          title: 'Documentation',
          icon: 'fas fa-book',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'document-text',
          //   },
          // },
        },
        {
          title: 'Settings',
          icon: 'fas fa-cog',
          // icon: {
          //   element: 'base-icon-outlined',
          //   class: 'text-gray-300',
          //   attributes: {
          //     name: 'cog',
          //   },
          // },
          child: [
            {
              title: 'Territories List',
              icon: 'fas fa-map-marker-alt',
              href: '#',
            },
            {
              title: 'Service Areas',
              icon: 'fas fa-map-marked-alt',
              child: [
                {
                  title: 'Add Service Area',
                  icon: 'fas fa-plus',
                },
                {
                  title: 'Assign Service Tech',
                  icon: 'fas fa-user-plus',
                },
              ],
            },
            {
              title: 'Preferences',
              icon: 'fas fa-cog',
            },
            {
              title: 'Service Types',
              icon: 'fas fa-cog',
              child: [
                {
                  title: 'Just an example',
                  child: [
                    {
                      title: 'A Page',
                    },
                    {
                      title: 'Another Page',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ] as SidebarItem[],
    })

    onMounted(() => {
      onResize()
      window.addEventListener('resize', onResize)
      console.log('mounted')
    })

    function onToggleCollapse(collapsed: boolean) {
      state.collapsed = collapsed
      emit('toggle-collapse', collapsed)
    }

    function onItemClick(event: PointerEvent, item: SidebarItem, vnode: ComponentPublicInstance) {
      console.log(event, item, vnode)
    }

    function onResize() {
      if (window.innerWidth <= 767) {
        state.isOnMobile = false
        state.collapsed = true
      }
      else {
        state.isOnMobile = false
        state.collapsed = false
      }
    }

    return {
      onToggleCollapse,
      onItemClick,
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <sidebar-menu
    v-model:collapsed="collapsed"
    width="264px"
    :menu="menu"
    show-one-child
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
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
  </sidebar-menu>
</template>
