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
import { IAnyObject } from '@/utils/types'

const tsNote = ref<Array<IAnyObject>>([])
tsNote.value.push(
  ...[
    {
      question: 'interface',
      answer: '接口',
    },
  ]
)
interface SquareConfig {
  color?: string
  width?: number
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  const newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

const mySquare = createSquare({})
console.log(mySquare)
</script>

<style></style>
