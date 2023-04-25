<template>
  <!-- top filter view bar -->
  <VillasFilterViewBar />

  <div class="content">
    <!-- villas table -->
    <VillasTable v-if="store.state.viewMode === 'table'"/>
    
    <!-- villas grid -->
    <VillasGrid v-else/>
  </div>

  <div class="bottom-bar">
    <el-button type="primary" @click="handlePageSize" v-if="store.state.villas.length >= 5">Load more</el-button>
  </div>

  <!-- Click book will show a confirmation modal -->
  <VillaBookModal />
</template>

<script>
  import { ref, watchEffect, inject, provide  } from "vue";

  // utils
  import utils from '../utils'

  // config
  import config from '../config'

  // components
  import VillaBookModal from '../components/VillaBookModal.vue'
  import VillasTable from '../components/VillasTable.vue'
  import VillasGrid from '../components/VillasGrid.vue'
  import VillasFilterViewBar from '../components/VillasFilterViewBar.vue'

  export default {
    name: 'Villas',
    components: {
      VillaBookModal,
      VillasTable,
      VillasGrid,
      VillasFilterViewBar,
    },
    setup() {
      // state store
      const store = inject('store')
      // initial state
      const dialogVisible = ref(false)
      const selectedVilla = ref(null)
      
      // pageSize
      const pageSize = 5;
      let pager = 1

      // load next X villas.
      const handlePageSize = () => {
        pager++
        store.methods.getVillas(pageSize * pager, store.state.availableDate, store.state.order, store.state.sort);
      }

      // We need watch the watchEffect() properties update then to update the API response data
      watchEffect(async () => {
        await store.methods.getVillas(pageSize * pager, store.state.availableDate, store.state.order, store.state.sort);
      });

      provide("dialogVisible", dialogVisible);
      provide("selectedVilla", selectedVilla);


      return {
        store,
        utils,
        config,

        handlePageSize,
      };
    }
  }
</script>

<style lang="scss">
  .content {
    padding-bottom: 20px;
  }

  .bottom-bar {
    display: flex;
    justify-content: center;
  }
</style>
