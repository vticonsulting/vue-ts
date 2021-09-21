<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ComponentPublicInstance } from 'vue'
import { SidebarItem } from 'vue-sidebar-menu'

import {
  billingMenu,
  calendarMenu,
  customersMenu,
  dashboardMenu,
  projectsMenu,
  reportsMenu,
  settingsMenu,
  usersMenu,
} from '~/models/menus'

export default defineComponent({
  emits: ['toggle-collapse'],

  setup(props, { emit }) {
    const state = reactive({
      collapsed: false,
      isOnMobile: false,
      menu: [
        dashboardMenu,
        projectsMenu,
        calendarMenu,
        customersMenu,
        billingMenu,
        usersMenu,
        reportsMenu,
        settingsMenu,
      ],
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
