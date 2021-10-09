<template>
  <img :src="imageSrc" alt />
</template>

<script>
import victor from '~/assets/img/users/victor.jpg'

export default {
  name: 'BaseAvatar',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageSrc() {
      return this.src ? `${this.src}` : victor
    },
  },
}
</script>
