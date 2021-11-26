<template>
  <div class="tool-note-page">
    <ul>
      <li v-for="(note, index) in toolNote" :key="index">
        <h3>{{ note.question }}</h3>
        <p>{{ note.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnyObject } from '@/utils/types'

const toolNote = ref<Array<AnyObject>>([])
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
