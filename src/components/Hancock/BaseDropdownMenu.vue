<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Array,
      default: () => [
        {
          id: 1,
          slug: 'dashboard',
          label: 'Dashboard',
        },
      ],
    },
  },
  setup() {
    const { t } = useI18n()
    const open = ref(false)
    const onClickAway = () => {
      open.value = false
    }

    return { onClickAway, open, t }
  },
})
</script>

<template>
  <div class="relative">
    <div v-if="open" @click="open = false" class="fixed inset-0" />
    <button
      v-click-away="onClickAway"
      @click="open = !open"
      class="relative flex items-center h-full whitespace-nowrap focus:outline-none"
    >
      <slot>
        <img
          v-if="false"
          :src="person.avatarUrl"
          :alt="`${person.fullName}'s avatar`"
          class="w-8 h-8 rounded-full"
        />
        <span class="ml-2 font-medium whitespace-nowrap">{{ fullName }}</span>
      </slot>
      <svg
        class="w-5 h-5 ml-1 text-gray-700 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        />
      </svg>
    </button>

    <Transition
      enter-class="scale-95 opacity-0"
      enter-active-class="transition duration-200 ease-out transform scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in transform scale-95 opacity-0"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-if="open"
        class="absolute left-0 z-10 w-64 mt-0 -ml-4 origin-top-right bg-white border rounded shadow-md top-full"
      >
        <ul>
          <li>
            <RouterLink
              v-for="option in options"
              :key="option.id"
              :to="{ name: option.name }"
              class="block px-4 py-2 m-1 rounded hover:bg-primary-500 hover:text-white"
            >{{ option.label }}</RouterLink>
          </li>

          <li v-if="false">
            <a href="#" class="block px-4 py-2 hover:bg-primary-500 hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
