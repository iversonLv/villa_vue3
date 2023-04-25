<template>
  <div class="galleries">
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="`View other ${store.state.villa?.galleries?.length - 3}`"
      placement="top-end"
    >
      <el-icon class="more-image" @click="moreImages = true" v-if="!moreImages && store.state.villa?.galleries?.length > 3"><Plus /></el-icon>
    </el-tooltip>
    <el-carousel trigger="click" height="400px" :autoplay="false" v-if="!moreImages && store.state.villa?.galleries">
      <el-carousel-item v-for="item in store.state.villa?.galleries.slice(0,3)" :key="item">
        <el-image :key="item" :src="config.IMG_URL + item"/>
      </el-carousel-item>
    </el-carousel>
    
    <el-icon class="less-image" @click="moreImages = false;" v-if="moreImages"><Minus /></el-icon>
    <div v-if="moreImages">
      <el-image :key="item" :src="config.IMG_URL + item" v-for="item in store.state.villa?.galleries" :lazy="true"/>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  // sotre
  import store from '../store/index'

  // config
  import config from '../config'

  // icons
  import {
    Plus,
    Minus,
  } from '@element-plus/icons-vue'

  export default {
    name: 'VillaGallery',
    setup() {
      const moreImages = ref(false)
      return {
        store,
        config,

        moreImages,

        // icons
        Plus,
        Minus,
      }
    }
  }
</script>

<style lang="scss">
  .galleries {
    position: relative;

    .more-image,
    .less-image {
      position: absolute;
      z-index: 1;
      bottom: 0;
      right: 0;
      font-size: 60px;
      color: var(--el-color-info-light-5);

      &:hover {
        color: var(--el-color-primary-light-3);
        cursor: pointer;
      }
    }
  }

  .el-image {
    width: 100%;
    height: 100%;
  }

  img.el-image__inner {
    object-fit: cover !important;
  }

</style>

