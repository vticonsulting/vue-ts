
<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
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
      <SectionHeader>
        {{ t('mother_timeline') }}
        <template #actions>
          <button
            class="flex items-center px-4 py-2 space-x-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            name="cancel"
          >
            <BaseIconSolid name="plus" />
            <span>{{ t('add') }}</span>
          </button>
        </template>
      </SectionHeader>
      <p>Timeline</p>

      <SectionHeader class="mt-8">{{ t('family_history') }}</SectionHeader>

      <fieldset>
        <div class="mt-4">
          <label>Has either parent previously served on a Care Community?</label>
          <div>
            <input type="hidden" name="previously_served_on_cc_prev" value="0" />
          </div>
        </div>

        <div class="mt-4">
          <label
            class="control-label col-sm-3 col-xs-12"
          >Did the church play any part in recruiting this Foster Family?</label>
          <div>
            <input type="hidden" name="recruited_by_church_prev" value="1" />
          </div>
        </div>

        <div class="mt-4">
          <label class="control-label col-md-3 col-sm-3 col-xs-12">Recruiting Church</label>
          <div>
            <ChurchSelectInput />
          </div>
        </div>

        <div class="mt-4">
          <label class="control-label col-sm-3 col-xs-12">Has this family previously fostered?</label>
          <div>
            <input type="hidden" name="has_past_fostered_prev" value />
          </div>
        </div>

        <div class="mt-4">
          <label
            class="control-label col-sm-3 col-xs-12"
          >Has this family previously had a kinship placement?</label>
          <div>
            <input type="hidden" name="has_past_kinship_placement_prev" value />
          </div>
        </div>

        <div class="mt-4">
          <label class="control-label col-sm-3 col-xs-12">Has this family previously adopted?</label>
          <div>
            <input type="hidden" name="has_past_adopted_prev" value />
          </div>
        </div>

        <div class="mt-4">
          <label class="control-label col-md-3 col-sm-3 col-xs-12">Adoption Status</label>
          <div>
            <select name="status_adoption" id="status_adoption" class="input-lg">
              <option value>Select adoption status</option>
              <option value="1">Never Adopted</option>
              <option value="2">Desire to adopt</option>
              <option value="3">In adoption process</option>
              <option value="4" selected="selected">Have adopted</option>
            </select>
            <input type="hidden" name="status_adoption_prev" value="4" />
            <input type="hidden" name="recruited_by_church_prev" value="1" />
            <input type="hidden" name="previously_served_on_cc_prev" value="0" />
          </div>
        </div>
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
