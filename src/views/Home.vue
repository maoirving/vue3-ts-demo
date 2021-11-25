<template>
  <div class="home"></div>
  <el-button @click="printJobs">hello</el-button>
  <p>hello mao</p>
</template>

<script lang="ts" setup>
const printJobs = () => {
  console.log(1)
}
</script>

<style lang="scss" scoped>
p {
  color: $c-green-400;
}
</style>
