<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    user: {
      type: Object,
      default: () => { },
    },
  },
  setup(props) {
    const { t, locale } = useI18n()
    const show = ref(false)
    // const avatarURL = computed(() => `${process.env.MIX_ASSETS_URL}/${props.user.avatarPath}`)
    const avatarURL = computed(() => '/assets/img/avatar.jpeg')
    const onClickAway = () => {
      show.value = false
    }

    return {
      onClickAway,
      show,
      t,
      locale,
      avatarURL,
    }
  },
})
</script>

<template>
  <div class="relative ml-3">
    <div>
      <button
        id="user-menu"
        v-click-away="onClickAway"
        class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        aria-haspopup="true"
        @click="show = !show"
      >
        <span class="sr-only">{{ t('open_user_menu') }}</span>
        <img class="rounded-full w-11 h-11" :src="avatarURL" :alt="user.name" />
      </button>
    </div>
    <Transition
      enter-class="scale-95 opacity-0"
      enter-active-class="transition duration-200 ease-out transform scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in transform scale-95 opacity-0"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-if="show == true"
        class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <RouterLink
          :to="{ name: 'person', params: { id: user.id } }"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >{{ t('my_profile') }}</RouterLink>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >{{ t('sign_out') }}</a>
      </div>
    </Transition>
  </div>
</template>
