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
      <router-link to="/" class="flex py-2 pl-2 text-brand-500 sidebar-header items-center">
        <BaseLogo name="hancock-h" />

        <span v-if="!collapsed" class="font-bold leading-none ml-1" style="white-space: nowrap;">
          Design
          <br />Tokens
        </span>
      </router-link>

      <div class="mt-3 p-2 sidebar-profile-container">
        <router-link to="/user" class="flex text-white no-underline items-center hover:text-white">
          <BaseAvatar class="rounded-full h-11 w-11" />

          <div v-if="!collapsed" class="text-xs ml-2">
            <span class="font-bold uppercase">Victor Tolbert</span>
            <div>vtolbert@hancockclaims.com</div>
          </div>
        </router-link>
      </div>
    </template>

    <template #toggle-icon>
      <span class="sidebar-toggle-icon">
        <BaseIconOutlined :name="collapsed ? 'chevron-right' : 'chevron-left'"></BaseIconOutlined>

        <span v-if="!collapsed">Toggle Toolbar</span>
      </span>
    </template>

    <template #dropdown-icon>
      <BaseIconOutlined name="chevron-right"></BaseIconOutlined>
    </template>
  </sidebar-menu>
</template>

<style lang="scss">
@import "../../styles/hancock/variables";

$base-bg: $color-primary-800;
$primary-color: $color-secondary-500;

@import "../../../node_modules/vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
</style>
