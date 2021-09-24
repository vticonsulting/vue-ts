<script>
// import { defineComponent, PropType } from 'vue'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
// import { PersonItem } from '~/types'

export default defineComponent({
  inject: ['GStore'],
  props: {
    person: {
      // type: Object as PropType<PersonItem>,
      type: Object,
      required: true,
    },
  },
  setup() {
    const { t } = useI18n()
    const toast = useToast()
    return {
      assetsURL: process.env.MIX_ASSETS_URL,
      t,
      toast,
    }
  },
  methods: {
    handleSubmit() {
      this.toast.info('I’m an info toast!')
    },
    save() {
      // Call to API
      this.GStore.flashMessage = 'Saved'

      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'PersonHome',
      })
    },
  },
})
</script>

<template>
  <main class="flex-1 lg:col-span-9">
    <SectionWrapper>
      <SectionHeader>{{ t('contact_info') }}</SectionHeader>
      <form method="POST" @submit.prevent="handleSubmit">
        <div class="flex flex-col lg:flex-row">
          <div class="flex-grow space-y-6">
            <!-- First / Last Names -->
            <div class="grid grid-cols-4 gap-6 mt-6">
              <!-- First Name -->
              <div class="col-span-4 sm:col-span-2">
                <OField label="First Name">
                  <input
                    id="name_first"
                    v-model="person.name_first"
                    type="text"
                    name="name_first"
                    placeholder="Enter your first name"
                    autocomplete="off"
                    class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </OField>
              </div>

              <!-- Last Name -->
              <div class="col-span-4 sm:col-span-2">
                <OField label="Last Name">
                  <input
                    id="name_last"
                    v-model="person.name_last"
                    type="text"
                    name="name_last"
                    placeholder="Enter your last name"
                    autocomplete="off"
                    class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </OField>
              </div>
            </div>

            <!-- Primary Email / Mobile -->
            <div class="grid grid-cols-4 gap-6 mt-6">
              <!-- Primary Email -->
              <div class="col-span-4 sm:col-span-2">
                <OField class="mt-4" label="Primary Email">
                  <input
                    id="primary-email"
                    v-model="person.people_email_primary"
                    type="email"
                    name="primary_email"
                    placeholder="Enter your email"
                    autocomplete="off"
                    class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </OField>
              </div>
              <!-- Mobile Phone -->
              <div class="col-span-4 sm:col-span-2">
                <OField class="mt-4" label="Mobile Phone">
                  <input
                    id="mobile-phone"
                    v-model="person.people_phone_mobile"
                    type="tel"
                    name="mobile_phone"
                    placeholder="Enter your phone number"
                    autocomplete="off"
                    class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </OField>
              </div>
            </div>

            <!-- Fields -->
          </div>

          <!-- Profile Picture -->
          <div class="flex-grow mt-6 lg:mt-6 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
            <p class="text-sm font-medium text-gray-700">{{ t('photo') }}</p>
            <div class="mt-1 lg:hidden">
              <div class="flex items-center">
                <div
                  class="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                  aria-hidden="true"
                >
                  <img
                    v-if="person.url_avatar"
                    class="w-full h-full rounded-full"
                    :src="`/${person.url_avatar.replace('[BASEURL]', '')}`"
                    :alt="`${person.name_first} ${person.name_last}`"
                  />
                  <img
                    v-else
                    class="w-full h-full rounded-full"
                    src="http://placekitten.com/300/300"
                  />
                </div>
                <div class="ml-5 rounded-md shadow-sm">
                  <div
                    class="relative flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md group hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500"
                  >
                    <label
                      for="user_photo"
                      class="relative text-sm font-medium leading-4 text-gray-700 pointer-events-none"
                    >
                      <span>{{ t('change') }}</span>
                      <span class="sr-only">{{ t('user_photo') }}</span>
                    </label>
                    <input
                      id="user_photo"
                      name="user_photo"
                      type="file"
                      class="absolute w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="relative hidden overflow-hidden rounded-full lg:block">
              <img
                v-if="person.url_avatar"
                class="relative w-40 h-40 rounded-full"
                :src="`/${person.url_avatar.replace('[BASEURL]', '')}`"
                :alt="`${person.name_first} ${person.name_last}`"
              />
              <img
                v-else
                class="relative w-40 h-40 rounded-full"
                src="http://placekitten.com/300/300"
              />
              <label
                for="user-photo"
                class="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100 focus-within:opacity-100"
              >
                <span>Change</span>
                <span class="sr-only">user photo</span>
                <input
                  id="user-photo"
                  type="file"
                  name="user-photo"
                  class="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                />
              </label>
            </div>
          </div>
        </div>

        <!-- Old upload button -->
        <div class="hidden mt-8">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >{{ t('change_profile_picture') }}</button>
        </div>

        <!-- Home church / assigned church -->
        <div class="grid grid-cols-4 gap-6 mt-6">
          <!-- Home Church -->
          <div class="col-span-4 sm:col-span-2">
            <OField label="Home Church">
              <input
                id="home-church"
                v-model="person.home_church"
                type="text"
                name="home_church"
                placeholder="Enter your home church"
                autocomplete="off"
                class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </OField>
          </div>

          <!-- Assigned Church -->
          <div class="col-span-4 sm:col-span-2">
            <OField label="Assigned Church">
              <select
                id="assigned-church"
                placeholder="Select church"
                name="assigned_church"
                autocomplete="off"
                class="block w-full max-w-lg mt-1 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-lg sm:text-sm"
              >
                <option value="1">12Stone - Snellville - Snellvill, GA - Active</option>
              </select>
            </OField>
          </div>
        </div>

        <!-- Status -->
        <OField class="mt-4" label="Status">
          <select
            id="status"
            placeholder="Select status"
            name="status"
            autocomplete="off"
            class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
          >
            <option value="1">Serving</option>
          </select>
        </OField>

        <!-- Secondary Email -->
        <OField class="mt-4" label="Secondary Email">
          <input
            id="secondary-email"
            v-model="person.people_email_secondary"
            type="email"
            name="secondary_email"
            placeholder="Enter your email"
            autocomplete="off"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </OField>

        <!-- Home Phone -->
        <OField class="mt-4" label="Home Phone">
          <input
            id="home-phone"
            v-model="person.people_phone_home"
            type="tel"
            name="home_phone"
            placeholder="Home phone number (optional)"
            autocomplete="off"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </OField>

        <!-- Work Phone -->
        <OField class="mt-4" label="Work Phone">
          <input
            id="work-phone"
            v-model="person.people_phone_office"
            type="tel"
            name="work_phone"
            placeholder="Work phone number (optional)"
            autocomplete="off"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </OField>

        <!-- Occupation -->
        <OField class="mt-4" label="Occupation">
          <input
            id="occupation"
            type="text"
            name="occupation"
            placeholder="Occupation"
            autocomplete="off"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </OField>

        <!-- Address -->
        <OField class="mt-4" label="Address">
          <input
            id="address"
            v-model="person.address_street_1"
            type="text"
            name="address"
            placeholder="Address"
            autocomplete="off"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </OField>

        <!-- Address 2 -->
        <OField class="mt-4" label="Apt or Unit #">
          <input
            id="apt"
            v-model="person.address_street_2"
            type="text"
            name="apt"
            placeholder="Suite, apartment number, or unit"
            autocomplete="off"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </OField>

        <!-- City -->
        <OField class="mt-4" label="City">
          <input
            id="city"
            v-model="person.address_street_2"
            type="text"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            name="city"
            placeholder="City"
            autocomplete="off"
          />
        </OField>

        <!-- State -->
        <OField class="mt-4" label="State">
          <input
            id="state"
            v-model="person.address_state"
            type="text"
            class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            name="state"
            placeholder="State"
            autocomplete="off"
          />
        </OField>

        <div class="grid grid-cols-4 gap-6 mt-6">
          <!-- Country -->
          <div class="col-span-4 sm:col-span-2">
            <OField label="Country / Region">
              <input
                id="country"
                v-model="person.address_country"
                type="text"
                class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                name="country"
                placeholder="Country"
                autocomplete="off"
              />
            </OField>
          </div>

          <!-- Zip -->
          <div class="col-span-4 sm:col-span-2">
            <OField label="ZIP / Postal">
              <input
                id="zip"
                v-model="person.address_zip"
                type="text"
                class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                name="zip"
                placeholder="Zip code"
                autocomplete="off"
              />
            </OField>
          </div>
        </div>

        <ul class="mt-2 divide-y divide-gray-200">
          <InterestItem label="Has church volunteer approval" />
        </ul>

        <!-- Interest -->
        <fieldset class="mt-8">
          <h3 class="text-lg font-medium">Interests</h3>
          <OField class="mt-4">
            <!--  -->
            <OSwitch v-model="person.cert_church_approval">Has church volunteer approval</OSwitch>
          </OField>

          <OField class="mt-4">
            <OSwitch>Helping in a Care Community</OSwitch>
          </OField>

          <OField class="mt-4">
            <OSwitch>Care Community Team Leader</OSwitch>
          </OField>
          <OField class="mt-4">
            <OSwitch>Care Community Family Helper</OSwitch>
          </OField>
          <OField class="mt-4">
            <OSwitch>Care Community Child Mentor</OSwitch>
          </OField>
          <OField class="mt-4">
            <OSwitch v-model="person.interest_interim_caregiver">Interim Care Giver</OSwitch>
          </OField>
          <OField class="mt-4">
            <OSwitch v-model="person.interest_foster_family">Becoming a Foster Family</OSwitch>
          </OField>
          <OField class="mt-4">
            <OSwitch
              v-model="person.interest_foster_family_respite"
            >Becoming a Respite Foster Family</OSwitch>
          </OField>
          <OField class="mt-4">
            <OSwitch v-model="person.interest_advocate">Joining the Advocate Team</OSwitch>
          </OField>
          <OField class="mt-4">
            <OSwitch v-model="person.interest_care_portal">CarePortal</OSwitch>
          </OField>
          <OField class="mt-4">
            <OSwitch>Loaves and Fishes (12Stone Church Central)</OSwitch>
          </OField>
        </fieldset>

        <fieldset class="mt-8">
          <OField class="mt-4" label="Church">
            <select
              id="church"
              placeholder="Role"
              name="church"
              autocomplete="off"
              class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
            >
              <option :value="undefined">{{ t('select_church') }}</option>
            </select>
          </OField>

          <!-- Role -->
          <OField class="mt-4" label="Role">
            <select
              id="role"
              placeholder="Role"
              name="role"
              autocomplete="off"
              class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
            >
              <option :value="undefined">{{ t('select_a_role') }}</option>
              <option value="1">{{ t('staff_only') }}</option>
            </select>
          </OField>
        </fieldset>

        <div class="flex justify-end mt-8">
          <RouterLink
            :to="{ name: 'people' }"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >{{ t('cancel') }}</RouterLink>
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            name="save"
            value="1"
          >{{ t('save') }}</button>
        </div>
      </form>
    </SectionWrapper>
  </main>
</template>
