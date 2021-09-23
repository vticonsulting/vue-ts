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
      <SectionHeader>{{ t('mother_info') }}</SectionHeader>

      <!--
        - Basic Info
        - Assignments
        - Members
        - Notes
        - Agreements (List of agreement types -- supported family, care volunteer)
        - Staff Roles
        - Church Roles
        - Care community Volunteer roles
        - Care Communities
        - History / Timeline
        - Contact Log
        - Family Photo
      -->
      <fieldset class="mt-8">
        <!-- Family Name -->
        <OField class="mt-4" :label="t('mother_name')">
          <input
            type="text"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            id="family-name"
            name="family_name"
            placeholder="Family name"
            autocomplete="off"
          />
        </OField>

        <!-- Family Status -->
        <OField class="mt-4" label="Family Status">
          <select
            placeholder="Select a subject"
            id="family-status"
            name="family_status"
            autocomplete="off"
            class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
          >
            <option value>Closed</option>
          </select>
        </OField>

        <!-- Home Type -->
        <OField class="mt-4" label="Home Type">
          <select
            placeholder="Select home type"
            id="home-type"
            name="home_type"
            autocomplete="off"
            class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
          >
            <option value="1">Traditional Home - Foster</option>
          </select>
        </OField>

        <!-- Family Structure -->
        <OField class="mt-4" label="Family Structure">
          <select
            placeholder="Select family structure"
            id="family-structure"
            name="family_structure"
            autocomplete="off"
            class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
          >
            <option value="1">Single Mother</option>
          </select>
        </OField>

        <!-- Agency -->
        <OField class="mt-4" label="Agency">
          <select
            placeholder="Select agency"
            id="agency"
            name="agency"
            autocomplete="off"
            class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
          >
            <option value="1">Gwinett County DFCS (Lawrenceville, GA)</option>
          </select>
        </OField>

        <!-- Family Language -->
        <OField class="mt-4" label="Family Language">
          <select
            placeholder="Select language"
            id="family-language"
            name="family_language"
            autocomplete="off"
            class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
          >
            <option value="1">English Only</option>
          </select>
        </OField>

        <!-- <h4 class="mt-8 text-lg font-medium">Family Address</h4> -->
        <SectionHeader class="mt-8">{{ t('family_address') }}</SectionHeader>

        <!-- Family Address -->
        <OField class="mt-4" label="Address">
          <input
            type="text"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            id="family-addres"
            name="family_address"
            placeholder="Family address"
            autocomplete="off"
          />
        </OField>

        <!-- Family Address 2 -->
        <OField class="mt-4" label="Apt or Unit #">
          <input
            type="text"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            id="family-apt-of-unit"
            name="family_apt_of_unit"
            placeholder="Apt or Unit #"
            autocomplete="off"
          />
        </OField>

        <!-- Family City -->
        <OField class="mt-4" label="City">
          <input
            type="text"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            id="family-city"
            name="family-city"
            placeholder="City"
            autocomplete="off"
          />
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
