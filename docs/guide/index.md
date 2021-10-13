---
title: Guide
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
editLink: true
---

# {{ $frontmatter.title }}

<script setup>
import { useData } from 'vitepress'
import Counter from '../components/Counter.vue'
const { page } = useData()
</script>

<pre>{{ page }}</pre>
<script setup>
</script>

# Docs

This is a .md using a custom component

<Counter />

## More docs


<style lang="sass">
.title
  font-size: 20px;
</style>
