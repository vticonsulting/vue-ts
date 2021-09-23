<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  inject: ['GStore'],
  props: {
    user: {
      type: Object,
      default: () => { },
    },
  },
  setup() {
    const { t, locale } = useI18n()
    const langs = ref(['en', 'es'])

    const showAnnouncements = ref(false)
    const showMenu = ref(false)
    const showNewProjectView = ref(false)
    const showVolunteerView = ref(false)
    const showProfile = ref(false)
    const fullwidth = ref(false)
    const people = ref([
      {
        id: 1,
        name: 'Jeremy Doublestein',
        username: 'jdoublestein',
        isOnline: true,
      },
      {
        id: 2,
        name: 'Victor Tolbert',
        username: 'username',
        isOnline: false,
      },
    ])

    // const slug = snakeCase(GStore.affiliate.name)

    return {
      showAnnouncements,
      showNewProjectView,
      showVolunteerView,
      fullwidth,
      showMenu,
      showProfile,
      people,
      langs,
      t,
      locale,
    }
  },
  computed: {
    routes() {
      return [
        // {
        //   name: 'testing',
        //   label: this.t('testing'),
        //   path: '/testing/',
        //   isActive: true,
        // },
        // {
        //   name: 'foo',
        //   label: this.t('foo'),
        //   path: '/foo/',
        //   isActive: true,
        // },
        // {
        //   name: 'dashboard',
        //   label: this.t('dashboard'),
        //   path: '/dashboard/',
        //   isActive: true,
        // },
        // {
        //   name: 'affiliates',
        //   label: this.t('affiliates'),
        //   path: '/affiliates/',
        //   isActive: true,
        // },
        // {
        //   name: 'people',
        //   label: this.t('people'),
        //   path: '/people/',
        //   isActive: true,
        // },
        // {
        //   name: 'resources',
        //   label: this.t('resources'),
        //   path: '/resources/',
        //   isActive: true,
        // },
        // {
        //   name: 'directory',
        //   label: this.t('directory'),
        //   path: '/directory/',
        //   isActive: true,
        // },
        // {
        //   name: 'advocates',
        //   label: this.t('advocates'),
        //   path: '/advocates/',
        //   isActive: true,
        // },
        // {
        //   name: 'announcements',
        //   label: this.t('announcements'),
        //   path: '/announcements/',
        //   isActive: true,
        // },
        // {
        //   name: 'training',
        //   label: this.t('training'),
        //   path: '/training/',
        //   isActive: true,
        // },
        // {
        //   name: 'events',
        //   label: this.t('events'),
        //   path: '/events/',
        //   isActive: true,
        // },
        // {
        //   name: 'resume',
        //   label: this.t('resume'),
        //   path: '/resume/',
        //   isActive: true,
        // },
        // {
        //   name: 'form',
        //   label: this.t('form'),
        //   path: '/form/',
        //  isActive: true,
        // },
        // {
        //   name: 'resume',
        //   label: this.t('resume'),
        //   path: '/resume/',
        // isActive: true,
        // },
        // {
        //   name: 'advocates',
        //   label: this.t('advocates'),
        //   path: '/advocates/',
        // isActive: true,
        // },
        // {
        //   name: 'inbox',
        //   label: this.t('inbox'),
        //   path: '/inbox/',
        // isActive: true,
        // },
        // {
        //   name: 'directory',
        //   label: this.t('directory'),
        //   path: '/directory/',
        // isActive: true,
        // },

        // {
        //   name: 'calendar',
        //   label: this.t('calendar'),
        //   path: '/calendar/',
        // isActive: true,
        // },
        // {
        //   name: 'clients',
        //   label: this.t('clients'),
        // },
        // {
        //   name: 'media',
        //   label: this.t('media'),
        // },
        // {
        //   name: 'overview',
        //   label: this.t('overview'),
        // },
        // {
        //   name: 'events',
        //   label: this.t('events'),
        //   path: '/events/',
        //   isActive: true,
        // },
        // {
        //   name: 'next-actions',
        //   label: this.t('next_actions'),
        //   path: '/next-actions/',
        //   isActive: true,
        // },
        // {
        //   name: 'color-palette',
        //   label: this.t('color_palette'),
        // },
        // {
        //   name: 'directory',
        //   label: this.t('directory'),
        // },
        // {
        //   name: 'sandbox',
        //   label: this.t('sandbox'),
        // },
        {
          name: 'resources',
          label: this.t('resources'),
        },
        // {
        //   name: 'map',
        //   label: this.t('map'),
        // },
        // {
        //   name: 'profile',
        //   label: this.t('profile'),
        // },
        // {
        //   name: 'person',
        //   label: this.t('person'),
        //   path: '/person/',
        // isActive: true,
        // },
        // {
        //   name: 'team',
        //   label: this.t('team'),
        //   path: '/team/',
        // isActive: true,
        // },
        // {
        //   name: 'tasks',
        //   label: this.t('tasks'),
        //   path: '/tasks/',
        // isActive: true,
        // },
        // {
        //   name: 'announcements',
        //   label: this.t('announcements'),
        // },
        // {
        //   name: 'about',
        //   label: this.t('about'),
        // },
      ]
    },
  },
})
</script>

<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <RouterLink :to="{ name: 'dashboard' }" class="flex items-center flex-shrink-0">
            <BaseLogo :name="GStore.affiliate.subdomain" class="text-primary-500" />
          </RouterLink>

          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <BaseDropdownMenu
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              :options="[
                { id: 6, name: 'reports', label: t('reports') },
              ]"
            >
              <span class="whitespace-nowrap">{{ t('all_affiliates') }}</span>
            </BaseDropdownMenu>
          </div>
        </div>

        <div class="hidden space-x-1 sm:ml-6 sm:flex sm:items-center">
          <BaseLanguageToggle />
          <AppMessagesButton />
          <AppAnnouncementsButton />
          <BaseProfileDropdownButton :user="GStore.authUser" />
        </div>

        <div class="flex items-center -mr-2 sm:hidden">
          <!-- Mobile menu button -->
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
  </nav>
</template>
