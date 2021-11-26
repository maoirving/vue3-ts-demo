<template>
  <div>Note</div>
  <ul>
    <li v-for="(link, index) in links" :key="index">
      <router-link :to="link.url">{{ link.title }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnyObject } from '@/utils/types'

const links = ref<Array<AnyObject>>([])
links.value.push(
  ...[
    {
      title: 'About tool',
      url: '/note/tool',
    },
  ]
)
</script>
