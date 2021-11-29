<template>
  <div class="container vue-note-page">
    <h3>About vue</h3>
    <ul>
      <li v-for="(note, index) in vueNote" :key="index">
        <h4>{{ note.question }}</h4>
        <p>{{ note.answer }}</p>
      </li>
    </ul>
    <VueNoteList title="hello hello" :num="2" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { AnyObject } from '@/utils/types'
import VueNoteList from '@/components/note/vue-note-list.vue'

const vueNote = ref<Array<AnyObject>>([])
vueNote.value.push(
  ...[
    {
      question: 'use <script setup>',
      answer: '见代码',
    },
  ]
)
</script>

<style></style>
