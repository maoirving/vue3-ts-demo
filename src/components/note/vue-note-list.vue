<template>
  <div>{{ props.title }}</div>
  <div>{{ props.num }}</div>
  <p>{{ test }}</p>
  <el-button @click="printNum">print</el-button>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'

const test = ref<number>(3)
test.value = 33

interface propsType {
  title: string
  num?: number
}
const props = defineProps<propsType>()
function printNum() {
  console.log(props.num)
}
</script>

<style></style>
