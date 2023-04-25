<template>
  <el-table :data="store.state.villas"  @row-click="itemClicked">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="price" label="Price">
      <template #default="scope">
        {{utils.pricePipe(scope.row.price)}}
      </template>
    </el-table-column>
    <el-table-column label="Location">
      <template #default="scope">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Click to view on the google map"
          placement="top"
        >
          <el-link 
            @click.stop
            :href="`http://maps.google.com/?q=${scope.row?.latitude},${scope.row?.longitude}`"
            target="_blank">
            {{scope.row.location}}
          </el-link>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column prop="capacity" label="Capacity" />
    <el-table-column label="Action">
      <template #default="scope">
        <BookBtn :selectedVillaProps='scope.row' />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import { useRouter } from 'vue-router'
  // store
  import store from '../store/index'

  // components
  import BookBtn from './BookBtn.vue'

  // utils
  import utils from '../utils'

  export default {
    name: 'VillasTable',
    components: { BookBtn, },
    setup() {
      const router = useRouter()

      const itemClicked = (row) => {
        router.push(`/villa/${row.id}`) 
      }

      return {
        store,
        utils,

        itemClicked,
      }
    }
  }
</script>

<style lang="scss">
  
</style>
