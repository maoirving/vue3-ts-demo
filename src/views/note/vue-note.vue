<template>
  <div class="container vue-note-page">
    <h3>About vue</h3>
    <ul>
      <li v-for="(note, index) in vueNote" :key="index">
        <h4>{{ note.question }}</h4>
        <p>{{ note.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IAnyObject } from '@/utils/types'

const vueNote = ref<Array<IAnyObject>>([])
vueNote.value.push(
  ...[
    {
      question: 'yarn 安装在dev',
      answer: 'yarn add <package...> [--dev/-D]',
    },
  ]
)
</script>

<style></style>
