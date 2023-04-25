<template>
  <el-row class="view-grid" :gutter="10">
    <el-col
      v-for="item in store.state.villas"
      :key="item.id"
      :span="6"
      :xs="24"
      :sm="12"
      :md="8"
      :lg="6"
    >
      <el-card @click="itemClicked(item)" class="villaCard">
        <el-image :src="`${config.IMG_URL}${item?.galleries.slice(0,1)}`"></el-image>
        <div class="car-content">
          <h2>{{item.name}}</h2>
          <div class="bottom">
            <div class="info">
                <p>
                  <el-icon><Location /></el-icon>
                  <span>
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      content="Click to view on the google map"
                      placement="top-end"
                    >
                      <el-link 
                        @click.stop
                        :href="`http://maps.google.com/?q=${item?.latitude},${item?.longitude}`"
                        target="_blank">
                        {{item.location}}
                      </el-link>
                    </el-tooltip>
                  </span>
                </p>
                <p><el-icon><Money /></el-icon> <span>{{utils.pricePipe(item?.price)}}</span></p>
                <p><el-icon><OfficeBuilding /></el-icon> <span>{{item?.capacity}}</span></p>
            </div>
            
            <BookBtn :selectedVillaProps='item' />
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import { useRouter } from 'vue-router'
  // store
  import store from '../store/index'
  
  // config
  import config from '../config'

  // utils
  import utils from '../utils'

  // components
  import BookBtn from './BookBtn.vue'

  export default {
    name: 'VillasGrid',
    components: { BookBtn },
    setup() {
      const router = useRouter()

      // move to villa detail page
      const itemClicked = (row) => {
        router.push(`/villa/${row.id}`) 
      }
      return {
        store,
        config,
        utils,

        itemClicked,
      }
    }
  }
</script>

<style scoped lang="scss">
  .view-grid {
    padding-top: 15px;

    .car-content {
      padding-top: 14px;
    }

    .bottom {
      .info {
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 5px;
        }
      }

      button {
        width: 100%;
      }
    }
  }

  .villaCard {
    margin-bottom: 10px;

    &:hover {
      background-color: var(--el-fill-color-light);
      cursor: pointer;
      box-shadow: var(--el-box-shadow-dark);
    }

    .el-image {
      height: 200px;
    }

    h2 {
      padding-bottom: 10px;
    }
  }
</style>
