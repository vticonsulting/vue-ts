<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  },
  data() {
    return {
      changeTo: 'Español?',
    }
  },
  methods: {
    switchLanguage() {
      if (this.locale === 'en') {
        this.locale = 'es'
        this.changeTo = 'English?'
      }
      else {
        this.locale = 'en'
        this.changeTo = 'Español?'
      }
    },
  },
})
</script>

<template>
  <button type="button" @click="switchLanguage">{{ changeTo }}</button>
</template>
