<template>
  <div class="home">
    <AppHeader />
    <el-button @click="printJobs">hello</el-button>
    <p>hello mao</p>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue'
import { ref } from 'vue'

const flag = ref<boolean>(true)
const printJobs = () => {
  flag.value = true
}
console.log(process.env)
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
}
</style>
