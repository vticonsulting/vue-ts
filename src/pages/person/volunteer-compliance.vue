
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  inject: ['GStore'],
  setup() {
    const { t } = useI18n()
    return { t }
  },
  methods: {
    save() {
      // Call to API
      this.GStore.flashMessage = 'Saved'

      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'PersonHome'
      })
    }
  }
})
</script>

<template>
  <form @click.prevent="save" class="flex-1 lg:col-span-9">
    <SectionWrapper>
      <SectionHeader>{{ t('volunteer_compliance') }} (Doesn't apply to most affiliates)</SectionHeader>

      <!-- Volunteer Compliance -->
      <fieldset class="mt-8">
        <OField class="mt-4" label="Affiliate Training Completed">
          <ODatepicker
            icon="calendar"
            input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </OField>

        <OField class="mt-4" label="Agency Training Completed">
          <ODatepicker
            icon="calendar"
            input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </OField>

        <OField class="mt-4" label="Church Training Completed">
          <ODatepicker
            icon="calendar"
            input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </OField>

        <OField class="mt-4" label="Agency Background Check Completed">
          <ODatepicker
            icon="calendar"
            input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </OField>

        <OField class="mt-4" label="Church Background Check Completed">
          <ODatepicker
            icon="calendar"
            input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </OField>

        <OField class="mt-4" label="Fingerprints Completed">
          <ODatepicker
            icon="calendar"
            input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </OField>

        <OField class="mt-4" label="CPR Expiration Date">
          <ODatepicker
            icon="calendar"
            input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </OField>

        <OField>
          <OSwitch>{{ t('approved_to_babysit') }}</OSwitch>
        </OField>
        <OField class="mt-4" label="Which agency">
          <select
            id="agency"
            name="agency"
            autocomplete="off"
            class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
          >
            <option :value="undefined">{{ t('select_agency') }}</option>
          </select>
        </OField>
      </fieldset>

      <div class="flex justify-end mt-8">
        <a
          href="http://promiseserves.test/resources/admin/list"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          name="cancel"
        >{{ t('cancel') }}</a>
        <button
          type="submit"
          class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          name="save"
          value="1"
        >{{ t('save') }}</button>
      </div>
    </SectionWrapper>
  </form>
</template>
