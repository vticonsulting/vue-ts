<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

import Multiselect from '@vueform/multiselect'
import FormWizard from '~/components/demo/FormWizard.vue'
import ResourceGallery from '~/components/resource/Gallery.vue'
import ResourceList from '~/components/resource/List.vue'
import ResourceAutocompleteField from '~/components/resource/AutocompleteField.vue'
import DemoForm from '~/components/demo/Form.vue'

export default defineComponent({
  components: { FormWizard, Multiselect, DemoForm, ResourceAutocompleteField, ResourceList, ResourceGallery },

  setup() {
    const { t } = useI18n()
    const state = reactive({
      selectedOption: null,
      selectOptions: [
        'Batman',
        'Robin',
        'Joker',
      ],
      chartData: [['Jan', 4], ['Feb', 2], ['Mar', 10], ['Apr', 5], ['May', 3]],
      resources: [{
        id: 1,
        title: 'Resource 1 Title',
        description: 'Resource 1 description',
        date: '2021-04-08 00:00:00',
      }],
    })
    return { t, ...toRefs(state) }
  },
})
</script>

<template>
  <main class="flex-1">
    <SectionWrapper class="max-w-xs">
      <SectionHeading />

      <div class="mt-4">
        <FormWizard />
      </div>

      <div class="mt-4">
        <DemoForm />
      </div>

      <div class="mt-4">
        <Multiselect v-model="selectedOption" :options="selectOptions" />
      </div>

      <div class="mt-4">
        <!-- <ExampleSignupForm /> -->
      </div>

      <div class="mt-4">
        <line-chart :data="chartData"></line-chart>
      </div>

      <div class="mt-4">
        <BaseMenu />
      </div>

      <div class="mt-4">
        <ResourceAutocompleteField />
      </div>

      <div class="mt-4">
        <ResourceList :resources="resources" />
      </div>

      <div class="mt-4">
        <ResourceGallery :resources="resources" />
      </div>

      <div class="mt-4">
        <BaseToggleSwitch />
      </div>

      <div class="mt-4">
        <BaseButtonGroup />
      </div>

      <div class="mt-4">
        <BaseSortButton />
      </div>
      <div class="mt-4">
        <BaseAddButton />
      </div>

      <div class="mt-4">
        <BasePreviousNextButtonGroup />
      </div>

      <div class="flex items-center justify-between mt-8 text-sm text-gray-400">
        <p>Design</p>
        <p>3/8</p>
      </div>
      <div class="w-full h-3 mt-1 rounded-full bg-primary-100">
        <div class="w-1/3 h-full text-xs text-center text-white rounded-full bg-primary-400" />
      </div>
    </SectionWrapper>
  </main>
</template>
