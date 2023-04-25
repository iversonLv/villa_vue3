<template>
  <div class="not-found">
    4<el-icon><Drizzling /></el-icon>4
  </div>
</template>

<script>
  // icons
  import {
    Drizzling,
  } from '@element-plus/icons-vue'

  export default {
    name: 'PageNotFound',
    setup() {
      return {
        Drizzling
      }
    }
  }
</script>

<style lang="scss" scoped>
  .not-found {
    font-size: 30vw;
    height: calc(100vh - 61px - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
</style>
