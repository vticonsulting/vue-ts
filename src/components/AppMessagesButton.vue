<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const fullwidth = ref(false)
    const showMessages = ref(false)
    return { t, fullwidth, showMessages }
  },
})
</script>

<template>
  <div>
    <span class="relative inline-flex rounded-md shadow-sm cursor-pointer">
      <button
        class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        @click="showMessages = !showMessages"
      >
        <span class="sr-only">{{ t('view_messages') }}</span>
        <BaseIconOutlined name="mail" />
      </button>
      <!-- <span
        class="absolute top-0 right-0 flex w-2 h-2 -mt-1 -mr-1 pointer-events-none"
        style="margin: 8px 7px 0 0"
      >
        <span
          class="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 pointer-events-none animate-ping"
        />
        <span
          class="relative inline-flex w-2 h-2 bg-red-500 rounded-full pointer-events-none"
        />
      </span>-->
    </span>

    <OSidebar
      :fullwidth="fullwidth"
      fullheight
      right
      position="fixed"
      overlay
      mobile="fullwidth"
      :open="showMessages"
    >
      <section class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
        <div class="flex flex-col flex-1 min-h-0 overflow-y-scroll">
          <header class="px-4 mt-4 sm:px-6">
            <div class="flex items-start justify-between">
              <h2
                id="slide-over-heading"
                class="text-lg font-medium text-gray-900"
              >{{ t('messages') }}</h2>
              <div class="flex items-center ml-3 h-7">
                <button
                  class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  @click="showMessages = false"
                >
                  <span class="sr-only">{{ t('close_panel') }}</span>
                  <BaseIconOutlined name="x" />
                </button>
              </div>
            </div>
          </header>

          <article>Messages</article>
        </div>

        <footer v-if="false" class="flex justify-end flex-shrink-0 px-4 py-4">
          <button
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            @click="showMessages = false"
          >{{ t('cancel') }}</button>
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >{{ t('save') }}</button>
        </footer>
      </section>
    </OSidebar>
  </div>
</template>
