<template>
  <div class="container tool-note-page">
    <h3>About tool</h3>
    <ul>
      <li v-for="(note, index) in toolNote" :key="index">
        <h4>{{ note.question }}</h4>
        <p>{{ note.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IAnyObject } from '@/utils/types'

const toolNote = ref<Array<IAnyObject>>([])
toolNote.value.push(
  ...[
    {
      question: 'yarn 安装在dev',
      answer: 'yarn add <package...> [--dev/-D]',
    },
  ]
)
</script>

<style></style>
