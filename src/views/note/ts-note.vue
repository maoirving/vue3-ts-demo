<template>
  <div class="container ts-note-page">
    <h3>About ts</h3>
    <ul>
      <li v-for="(note, index) in tsNote" :key="index">
        <h4>{{ note.question }}</h4>
        <p>{{ note.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnyObject } from '@/utils/types'

const tsNote = ref<Array<AnyObject>>([])
tsNote.value.push(
  ...[
    {
      question: 'yarn 安装在dev',
      answer: 'yarn add <package...> [--dev/-D]',
    },
  ]
)
</script>

<style></style>
