<template>
  <h3>Facilities</h3>
  <p>
      <el-tag class="ml-2" type="info" v-for="item in store.state.villa?.facilities" :key="item" effect="plain">{{item}}</el-tag>
  </p>
</template>

<script>
  // store
  import store from '../store/index'

  export default {
    name: 'VillaFacility',
    setup() {
      return {
        store,
      }
    }
  }
</script>

<style lang="scss">
  
</style>
