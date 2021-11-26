<template>
  <div class="container js-note-page">
    <h3>About js</h3>
    <ul>
      <li v-for="(note, index) in jsNote" :key="index">
        <h4>{{ note.question }}</h4>
        <p>{{ note.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnyObject } from '@/utils/types'

const jsNote = ref<Array<AnyObject>>([])
jsNote.value.push(
  ...[
    {
      question: 'yarn 安装在dev',
      answer: 'yarn add <package...> [--dev/-D]',
    },
  ]
)
</script>

<style></style>
