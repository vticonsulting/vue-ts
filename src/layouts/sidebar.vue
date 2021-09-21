<template>
  <div :class="['app-layout', collapsed ? 'collapsed' : '']">
    <HeaderComponent />

    <MenuComponent @toggle-collapse="onToggleCollapse" />

    <main class="app-main">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<script>
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

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
