<template>
  <h2 class="page-title">
    <span class="left">
      <el-button :icon="Back" circle @click="goBack" />
      {{store.state.villa.name}}
    </span>
    <span class="right">
      {{utils.pricePipe(store.state.villa.price)}}
      <BookBtn :selectedVillaProps="store.state.villa" />
    </span>
  </h2>
</template>

<script>
  import { useRouter } from 'vue-router'

  // sotre
  import store from '../store/index'

  // utils
  import utils from '../utils'

  // components
  import BookBtn from './BookBtn.vue'

  // icons
  import {
      Back
  } from '@element-plus/icons-vue'
  
  export default {
    name: 'VillaPageTitleBar',
    components: {
      BookBtn,
    },
    setup() {
      // router
      const router = useRouter()
      const goBack = () => {
        router.push('/')
      }
      return {
        store,
        utils,

        goBack,

        // icons
        Back,
      }
    }
  }
</script>

<style lang="scss">
  .page-title {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    justify-content: space-between;

    .left {
      .el-button {
        margin-right: 10px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
</style>
