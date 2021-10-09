<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const state = reactive({
      activeTab: 'preview',
    })
    return { t, ...toRefs(state) }
  },
})
</script>
<template>
  <div class="group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200">
    <button
      ref="preview"
      class="flex rounded-md focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100"
      :class="activeTab === 'preview' ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''"
      :tabindex="activeTab === 'preview' ? '0' : '-1'"
      @click="activeTab = 'preview'"
      @keydown.arrow-left="activeTab = 'code'"
      @keydown.arrow-right="activeTab = 'code'"
    >
      <span
        class="p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm font-medium"
        :class="activeTab === 'preview' ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          class="lg:mr-2"
          :class="activeTab === 'preview' ? 'text-teal-500' : 'text-gray-500 group-hover:text-gray-900'"
        >
          <path
            d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="10"
            cy="10"
            r="2.25"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span
          class="sr-only lg:not-sr-only"
          :class="activeTab === 'preview' ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'"
        >{{ t('preview') }}</span>
      </span>
    </button>
    <button
      ref="code"
      class="ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100"
      :class="activeTab === 'code' ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''"
      :tabindex="activeTab === 'code' ? '0' : '-1'"
      @click="activeTab = 'code'"
      @keydown.arrow-left="activeTab = 'preview'"
      @keydown.arrow-right="activeTab = 'preview'"
    >
      <svg
        width="20"
        height="20"
        fill="none"
        class="lg:mr-2"
        :class="activeTab === 'code' ? 'text-teal-500' : 'text-gray-500 group-hover:text-gray-900'"
      >
        <path
          d="M13.75 6.75l3.5 3.25-3.5 3.25M6.25 13.25L2.75 10l3.5-3.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span
        class="sr-only lg:not-sr-only"
        :class="activeTab === 'code' ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'"
      >{{ t('code') }}</span>
    </button>
  </div>
</template>
