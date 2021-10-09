<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResourceFinder',
  inject: ['GStore'],
  data() {
    return {
      isOpen: -1,
      filter: 'all',
      isLoading: true,
    }
  },
  computed: {
    filteredResources() {
      switch (this.filter) {
        case 'featured':
          return GStore.resources.filter((resource) => {
            return resource.isFeatured
          })
        case 'faster':
          return [...GStore.resources].sort((a, b) => a.time - b.time)
        default:
          return GStore.resources
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2500)
  },
})
</script>

<template>
  <div class="border-b border-gray-100 divide-y divide-gray-100">
    <div class="flex py-3 space-x-2">
      <ORadio v-model="filter" name="all" native-value="all" @click.native="isOpen = -1">All</ORadio>
      <ORadio
        v-model="filter"
        name="featured"
        native-value="featured"
        @click.native="isOpen = -1"
      >Featured</ORadio>
      <ORadio
        v-model="filter"
        name="faster"
        native-value="faster"
        @click.native="isOpen = -1"
      >Faster</ORadio>
    </div>

    <article
      v-for="(resource, index) of filteredResources"
      :key="`loading-${index}`"
      class="flex p-4 space-x-4"
      :class="{ hidden: !isLoading }"
    >
      <div>
        <OSkeleton circle width="64px" height="64px" />
      </div>
      <div class="w-full">
        <OSkeleton width="100%" />
        <OSkeleton width="100%" />
        <OSkeleton width="100%" />
      </div>
    </article>

    <OCollapse
      v-for="(resource, index) of filteredResources"
      :key="index"
      animation="slide"
      :class="{ hidden: isLoading }"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <article
        slot="trigger"
        slot-scope="props"
        class="flex p-4 space-x-4 card-header text-main dark:text-main-dark"
      >
        <ResourceImage :src="resource.image" :alt="`Image for resource ${resource.title}`" />
        <div class="relative flex-auto min-w-0 sm:pr-20 lg:pr-0 xl:pr-20">
          <h2 class="text-lg font-semibold mb-0.5">{{ resource.title }}</h2>
          <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
            <div>
              <dt class="sr-only">Time</dt>
              <dd>
                <abbr :title="`${resource.time} minutes`">{{ resource.time }}m</abbr>
              </dd>
            </div>
            <div>
              <dt class="sr-only">Difficulty</dt>
              <dd>· {{ resource.difficulty | difficulty }}</dd>
            </div>
            <div>
              <dt class="sr-only">Servings</dt>
              <dd>· {{ resource.servings }} servings</dd>
            </div>
            <div class="flex-none w-full mt-0.5 font-normal">
              <dt class="inline mr-1">By</dt>
              <dd class="inline">{{ resource.author }}</dd>
            </div>
            <div
              class="absolute top-0 right-0 rounded-full px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1"
            >
              <dt class>
                <o-icon :icon="props.open ? 'caret-up' : 'caret-down'" size="large" />
              </dt>
            </div>
          </dl>
        </div>
      </article>
      <div class="text-main dark:text-main-dark">
        <div class="p-4">{{ resource.procedure }}</div>
      </div>
    </OCollapse>
  </div>
</template>
