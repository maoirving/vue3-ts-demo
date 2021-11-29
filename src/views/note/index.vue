<template>
  <div class="container note-page">
    <h2>Note list</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <!-- <span>{{ index + 1 }}. </span> -->
        <router-link :to="link.url">{{ link.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnyObject } from '@/utils/types'

const links = ref<Array<AnyObject>>([
  {
    title: 'About vue',
    url: '/note/vue',
  },
  {
    title: 'About ts',
    url: '/note/ts',
  },
  {
    title: 'About js',
    url: '/note/js',
  },
  {
    title: 'About tool',
    url: '/note/tool',
  },
])
</script>
