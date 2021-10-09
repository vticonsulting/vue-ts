<script lang="ts">
import axios from 'axios'
import { defineComponent, reactive, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const state = reactive({
      name: '',
      data: [],
      resources: [],
      isFetching: false,
      selected: {},
    })

    const getAsyncData = (name) => {
      // String update
      if (state.name !== name) {
        state.name = name
        state.data = []
      }
      // String cleared
      if (!name.length) {
        state.data = []
        return
      }
      state.isFetching = true
      // resources?title=json-server&author=typicode
      // resources?id=1&id=2
      // resources?author.name=typicode
      // resources?_page=7
      // resources?_page=7&_limit=20
      // resources?_sort=views&_order=asc
      // posts/1/comments?_sort=votes&_order=asc
      // resources?_sort=title,modified_at&_order=asc,desc
      // posts?_start=20&_end=30
      // posts/1/comments?_start=20&_end=30
      // posts/1/comments?_start=20&_limit=10
      /// posts?views_gte=10&views_lte=20
      // posts?id_ne=1
      // posts?title_like=server
      // posts?q=internet
      // posts?_embed=comments
      // posts/1?_embed=comments
      // comments?_expand=post
      // comments/1?_expand=post
      // `https://api.victortolbert.com&query=${name}&page=${this.page}`,
      axios.get(`${process.env.MIX_API_URL}/resources?q=${name}`)
        .then((response) => {
          // console.log(response.data)
          state.resources = response.data
          response.data.forEach((item) => {
            console.log(item)
            state.data.push(item)
          })
        })
        .catch((error) => { throw error })
        .finally(() => { state.isFetching = false })
    }

    const getMoreAsyncData = () => { getAsyncData(state.name) }

    const go = (option) => {
      // option => (state.selected = option)
      state.selected = option

      // console.log(state.selected?.file_url)
      window.open(state.selected?.fileUrl, '_blank')
    }

    return {
      getAsyncData,
      getMoreAsyncData,
      go,
      t,
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <!-- @select="go($event)" -->
  <OField label="Find a resource">
    <OAutocomplete
      :data="data"
      placeholder="e.g. Ecco Users Manual"
      field="title"
      :loading="isFetching"
      check-infinite-scroll
      :debounce-typing="500"
      icon="search"
      icon-pack="fal"
      clearable
      :rounded="false"
      :expanded="false"
      @typing="getAsyncData"
      @infinite-scroll="getMoreAsyncData"
      @select="option => selected = option"
    >
      <template #default="props">
        <div class="relative z-10 w-full max-w-md">
          <span class="text-xs tracking-widest uppercase">{{ props.option.category }}</span>
          <h4>{{ props.option.title }}</h4>
          <p>{{ props.option.description }}</p>
          <p class="hidden space-x-2">
            <span
              v-for="tag in JSON.parse(props.option.tags)"
              :key="tag"
              class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
            >{{ tag }}</span>
          </p>
          <a :href="props.option.url" target="_blank" class="text-xs">{{ props.option.url }}</a>
        </div>
      </template>
    </OAutocomplete>
  </OField>
</template>
