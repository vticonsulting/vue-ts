<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import RecipeForm from "./components/RecipeForm.vue";
import UserTable from "./components/UserTable.vue"
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"

const collapsed = ref(false);
const isOnMobile = ref(false);
const menu = ref([
  {
    header: 'Getting Started',
    hiddenOnCollapse: true,
  },
  {
    href: '/',
    title: 'Installation',
    icon: 'fa fa-download'
  }
])

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

function onResize() {
  if (window.innerWidth <= 767) {
    isOnMobile.value = true;
    collapsed.value = true;
  } else {
    isOnMobile.value = false;
    collapsed.value = false;
  }
}

function onToggleCollapse() {
  collapsed.value = !collapsed.value;
}
</script>

<template>
  <!-- <RecipeForm /> -->
  <div :class="['min-h-screen flex flex-col', collapsed ? 'ml-12' : 'ml-66']">
    <header-component></header-component>
    <main class="flex-1">
      <div>
        <UserTable />
      </div>
    </main>
    <sidebar-menu v-model:collapsed="collapsed" :menu="menu" @update:collapsed="onToggleCollapse">
      <template v-slot:header>
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

      <template v-slot:toggle-icon class="flex space-x-2 px-2 items-center">
        <span>
          <base-icon-outlined
            class="h-5 text-gray-300 w-5"
            :name="collapsed ? 'chevron-right' : 'chevron-left'"
          ></base-icon-outlined>
        </span>

        <span v-if="!collapsed" class="whitespace-nowrap">Toggle Toolbar</span>
      </template>

      <template v-slot:dropdown-icon="{ isOpen }">
        <base-icon-outlined v-if="isOpen" name="chevron-right"></base-icon-outlined>
        <base-icon-outlined v-if="!isOpen" name="chevron-right"></base-icon-outlined>
      </template>
    </sidebar-menu>
    <footer-component></footer-component>
  </div>
</template>
