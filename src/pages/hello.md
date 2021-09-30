---
title: Hello
meta:
  - name: description
    content: Hello World
test: test
---

# Hello world!

Front matter: {{ frontmatter }}

<style>
h1 {
  color: cadetblue;
}
</style>

<Counter />


<router-link to="/">Home</router-link>

<route>
{
  meta: {
    layout: 'home'
  }
}
</route>
