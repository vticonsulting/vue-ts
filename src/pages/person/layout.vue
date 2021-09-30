<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  inject: ['GStore'],
  setup() {
    const { t } = useI18n()
    const state = reactive({
      pages: [
        { name: 'person', label: t('basic_info'), icon: 'user-circle' },
        { name: 'person-client', label: t('mother_info'), icon: 'users' },
        { name: 'person-assignments', label: t('assignments'), icon: 'briefcase' },
        { name: 'person-client-team', label: t('family_members'), icon: 'user-group' },
        { name: 'person-notes', label: t('notes'), icon: 'pencil-alt' },
        { name: 'person-agreements', label: t('agreements'), icon: 'scale' },
        { name: 'person-care-communities', label: t('care_communities'), icon: 'heart' },
        { name: 'person-timeline', label: t('timeline'), icon: 'clock' },
        { name: 'person-contact-log', label: t('contact_log'), icon: 'view-list' },
        { name: 'person-client-photo', label: t('mother_photo'), icon: 'photograph' },
        { name: 'person-plans', label: t('plans'), icon: 'clipboard-list' },
        { name: 'person-needs', label: t('needs'), icon: 'inbox-in' },
        { name: 'person-updates', label: t('updates'), icon: 'newspaper' },
        { name: 'person-volunteer-compliance', label: t('volunteer_compliance'), icon: 'badge-check' },
        { name: 'person-volunteer-eligibility', label: t('volunteer_eligibility'), icon: 'check-circle' },
        // { name: 'person-church-volunteer-requests', label: t('church_volunteer_requests'), icon: 'user-circle' },
        // { name: 'person-volunteer-requests', label: t('my_volunteer_requests'), icon: 'user-circle' },
      ],
    })
    return { t, ...toRefs(state) }
  },
})
</script>

<template>
  <div class="flex-1 bg-gray-100">
    <div v-if="GStore.person" class>
      <!-- <h1>{{ GStore.person.firstName }}</h1> -->
      <DemoHeader />
      <main class="relative -mt-32">
        <div class="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8">
          <div class="overflow-hidden bg-white rounded-lg shadow">
            <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside class="py-6 lg:col-span-3">
                <nav class="space-y-1">
                  <RouterLink
                    v-for="page in pages"
                    :key="page.name"
                    v-slot="{ href, isExactActive, navigate }"
                    :to="{ name: page.name }"
                    custom
                  >
                    <a
                      :href="href"
                      :class="[
                        isExactActive && 'bg-primary-50 border-primary-500 text-primary-700 hover:bg-primary-50 hover:text-primary-700',
                        !isExactActive && 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                      ]"
                      class="flex items-center px-3 py-2 text-sm font-medium border-l-4 group"
                      @click="navigate"
                    >
                      <BaseIconOutlined
                        :name="page.icon"
                        :class="[
                          isExactActive && 'text-primary-500 group-hover:text-primary-500',
                          !isExactActive && 'text-gray-400 group-hover:text-gray-500 ',
                        ]"
                        class="flex-shrink-0 mr-3 -ml-1"
                      />
                      <span class="truncate">{{ page.label }}</span>
                    </a>
                  </RouterLink>
                </nav>
              </aside>
              <RouterView :person="GStore.person" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
