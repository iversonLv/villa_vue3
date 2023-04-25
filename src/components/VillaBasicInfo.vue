<template>
  <p>
    <el-icon><Location /></el-icon>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="Click to view on the google map"
      placement="top"
    >
      <el-link :href="`http://maps.google.com/?q=${store.state.villa?.latitude},${store.state.villa?.longitude}`" target="_blank">{{store.state.villa?.address}}</el-link>
    </el-tooltip>
  </p>
  <p><el-icon><Postcard /></el-icon> <el-link :href="`mailto:${store.state.villa?.email}`">{{store.state.villa?.email}}</el-link></p>
  <p><el-icon><Iphone /></el-icon> <el-link :href="`tel:${store.state.villa?.phone}`">{{store.state.villa?.phone}}</el-link></p>
  <p><el-icon><OfficeBuilding /></el-icon> {{store.state.villa?.capacity}}</p>
  <p><el-icon><Clock /></el-icon> {{store.state.villa?.checkOutTime}}</p>
</template>

<script>
  // store
  import store from '../store/index'

  // icons
  import {
    Location,
    Iphone,
    Postcard,
    OfficeBuilding,
    Clock
  } from '@element-plus/icons-vue'

  export default {
    name: 'VillaBasicInfo',
    setup() {
      return {
        store,

        // icons
        Location,
        Iphone,
        Postcard,
        OfficeBuilding,
        Clock
      }
    }
  }
</script>

<style lang="">
  
</style>
