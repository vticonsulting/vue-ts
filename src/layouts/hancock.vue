<template>
  <div :class="['app-layout', collapsed ? 'collapsed' : '']">
    <header-component>
      <search-input-component></search-input-component>
    </header-component>

    <menu-component @toggle-collapse="onToggleCollapse"></menu-component>

    <main class="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// your custom styles here

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'

// windicss devtools support (dev only)
import 'virtual:windi-devtools'

export default {
  name: 'VueLayoutComponent',
  data: () => ({
    collapsed: false,
    isOnMobile: false,
  }),
  head: {
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = false
        this.collapsed = true
      }
      else {
        this.isOnMobile = false
        this.collapsed = false
      }
    },
    onToggleCollapse() {
      this.collapsed = !this.collapsed
      console.log(this.collapsed)
    },
  },
}
</script>

<style lang="scss">
@import "../styles/hancock/variables";
@import "../../node_modules/bootstrap/scss/bootstrap.scss";
// @import "../styles/hancock/components/sidebar-menu";

.app-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-left: $app-sidebar-width;
}

.app-layout.collapsed {
  padding-left: $app-sidebar-width-collapsed + 1rem;

  .app-header {
    padding-left: $app-sidebar-width-collapsed + 2rem;
  }
}

.app-header {
  position: fixed;
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: $app-header-height;
  padding-right: 1rem;
  padding-left: $app-sidebar-width + 1rem;
  background-color: $color-white;
  border-bottom: 1px solid $color-gray-100;

  .title {
    margin-bottom: 0;
    font-size: $font-size-lg;
    line-height: 1;
  }
}

.app-header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .actions {
    margin-left: 1rem;
  }
}

.app-main {
  flex: 1 1 0%;
  padding-top: $app-header-height;
  padding-right: 1rem;
  padding-left: 1rem;
}

.app-footer {
  padding-right: 1rem;
  padding-left: 1rem;
}

.app-button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  text-transform: none;
  cursor: pointer;
  border-color: transparent;
  border-width: 1px;
  border-radius: 9999px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: $app-header-height;
  font-weight: $font-bold;
  color: $color-brand-500;
  text-decoration: none;
  background-color: $color-white;
}

.sidebar-profile-container {
  padding: 0.5rem 0;
  margin-top: 0.75rem;
  font-size: $font-size-xs;
}

.sidebar-profile-button {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: $color-white;
  text-align: left;
  text-transform: none;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 1px;

  &:hover {
    color: $color-white;
  }

  > div {
    margin-left: 0.5rem;
  }
}

.sidebar-profile-name {
  font-weight: $font-bold;
  text-transform: uppercase;
}

.sidebar-toggle-icon {
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  white-space: nowrap;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: $color-gray-300;
  }

  span {
    margin-left: 0.5rem;
  }
}

.v-sidebar-menu.vsm_expanded .vsm--link_level-1.vsm--link_open .vsm--icon,
.v-sidebar-menu.vsm_expanded .vsm--link_level-1.vsm--link_open {
  font-weight: 700;
  background-color: $color-primary-500;
}

.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  // color: $color-primary-100;
  color: $color-secondary-500;
  // background-color: $color-primary-700;
  background-color: $color-secondary-100;
}

.v-sidebar-menu .vsm--link_level-1.vsm--link_active .vsm--icon {
  color: $color-secondary-500;
  background-color: $color-secondary-300;
}

.v-sidebar-menu .vsm--dropdown {
  background-color: $color-primary-700;
}

.v-sidebar-menu .vsm--dropdown .vsm--link {
}
.v-sidebar-menu .vsm--dropdown .vsm--link.vsm--link_active {
  font-weight: 600;
  color: $color-primary-100;
  // background-color: $color-primary-600;
}

.v-sidebar-menu .vsm--link_level-2 .vsm--title {
  margin-left: 3rem;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
