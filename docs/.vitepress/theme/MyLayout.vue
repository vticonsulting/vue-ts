<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-top>
      My custom sidebar top content
    </template>

    <!-- navbar-search
    sidebar-top
    sidebar-bottom
    page-top-ads
    page-top
    page-bottom
    page-bottom-ads
    Only when home: true is enabled via frontmatter:
    home-hero
    home-features
    home-footer -->
  </Layout>
</template>
