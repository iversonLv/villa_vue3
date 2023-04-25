<template>
  <!-- top page title bar -->
  <VillaPageTitleBar />

  <VillaGallery />

  <p class="description">{{store.state.villa?.description}}</p>
  <div class="detail section">
    <h3>
      <span>Detail</span>
      
      <el-rate
        v-if="store.state.villa.reviews?.length > 0"
        v-model="rate"
        disabled
        show-score
        text-color="#ff9900"
        :score-template="`${rate} points of ${store.state.villa.reviews?.length} customers`"
      />
    </h3>
    {{store.state.villa.detail}}
  </div>

  <h3>Info</h3>

  <el-row class="section info-section">
    <el-col :span="8" :xs="24">
      <!-- google map -->
      <VillaMap />
    </el-col>

    <el-col :span="8" :xs="24" class="info">
      <VillaBasicInfo />
    </el-col>

    <el-col :span="8" :xs="24" class="info-facilities-essential">
      <VillaFacility />

      <VillaEssentialInfo />
    </el-col>
  </el-row>

  <VillaReviews />

  <!-- villa book unbook confirmation modal -->
  <VillaBookModal />
</template>

<script>
  import { ref, onMounted, inject, provide } from "vue";
  import { useRouter, useRoute } from 'vue-router'

  // utils
  import utils from '../utils'

  // config
  import config from '../config'

  // icons
  import {
    Money,
  } from '@element-plus/icons-vue'

  // components
  import VillaBookModal from '../components/VillaBookModal.vue'
  import VillaPageTitleBar from '../components/VillaPageTitleBar.vue'
  import VillaGallery from '../components/VillaGallery.vue'
  import VillaReviews from '../components/VillaReviews.vue'
  import VillaMap from '../components/VillaMap.vue'
  import VillaBasicInfo from '../components/VillaBasicInfo.vue'
  import VillaFacility from '../components/VillaFacility.vue'
  import VillaEssentialInfo from '../components/VillaEssentialInfo.vue'

  export default {
    name: 'Villa',
    components: {
      VillaBookModal,
      VillaPageTitleBar,
      VillaGallery,
      VillaReviews,
      VillaMap,
      VillaBasicInfo,
      VillaFacility,
      VillaEssentialInfo,
    },
    setup() {
      // state store
      const store = inject('store')
      // router
      const router = useRouter()
      const route = useRoute()
      const rate = ref(0)

      // initial state
      const dialogVisible = ref(false)
      const selectedVilla = ref(null)

      // these will be provided
      const dataReviews = ref([])
      const center = ref({})
      const markerOptions = ref({})

      onMounted(async () => {
        const result = await store.methods.getVilla(route.params.id);
        if (!!result?.response?.status && result.response.status === 404) {
          router.push('/:catchAll(.*)')
        } else {
          // we need await the villa get then update the ref value
          if (store.state.villa) {
            center.value = { lat: store.state.villa.latitude, lng: store.state.villa.longitude }
            markerOptions.value = { position: center, title: store.state.villa.name }
  
            // rate point should be all review rate sum 
            rate.value = (+(store.state.villa.reviews.map(review => review.rate).reduce((cur, total) => cur + total, 0) / store.state.villa.reviews.length).toFixed(2))
            
            // reviews
            dataReviews.value = store.state.villa.reviews.slice(0, 5)
          }
        }
      })

      // provide for other child component to inject
      provide('dialogVisible', dialogVisible)
      provide('selectedVilla', selectedVilla)
      provide('dataReviews', dataReviews)
      provide('center', center)
      provide('markerOptions', markerOptions)

      return {
        store,
        utils,
        config,

        rate,

        // icons
        Money,
      } 
    }
  }
</script>

<style lang="scss">
  .section {
    padding-bottom: 15px;
  }

  .info {
    padding: 10px;
    background-color: var(--el-color-info-light-9);

    * {
      font-weight: normal;
    }

    p {
      display: flex;
      align-items: center;
      padding-bottom: 10px;

      .el-icon {
        margin-right: 5px;
      }
    }
  }

  .info-facilities-essential {
    padding: 10px;

    .el-tag{
      margin: 2px;
    }

    label {
      font-weight: bold;
    }

    p {
      padding-bottom: 10px;
    }
  }

  .detail {
    h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .el-rate {
        font-weight: normal;
        font-size: var(--el-font-size-small)
      }
    }
  }

  .description {
    padding: 15px;
    text-align: right;
    font-weight: bold;
    background-color: var(--el-color-info-light-9);
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    .detail {
      h3 {
        align-items: flex-start;
        flex-direction: column;

        .el-rate {
          font-weight: normal;
          font-size: var(--el-font-size-small)
        }
      }
    }
  }
</style>
