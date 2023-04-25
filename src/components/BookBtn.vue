<template>
  <el-button
    size="small"
    class="button"
    :type="selectedVillaProps.isBooked ? 'danger' : 'success'"
    @click.stop="handleBook"
    >
    {{selectedVillaProps.isBooked ? 'UnBooked' : 'Book it!'}}
  </el-button>
</template>

<script>
  import { inject, toRefs } from 'vue'

  // import store
  import store from '../store/index'
  
  export default {
    name: 'BookBtn',
    props: ['selectedVillaProps'],
    setup(props) {
      const { selectedVillaProps } = toRefs(props);
      // initial state
      const selectedVilla = inject('selectedVilla')
      const dialogVisible = inject('dialogVisible')

      // update the state to affect modal state
      const handleBook = () => {
        dialogVisible.value = true; 
        // we need to pass props data to the provide data then selectedVilla provide data could shif
        // up and inject to modal
        selectedVilla.value = selectedVillaProps.value
      }

      return {
        store,

        dialogVisible,
        selectedVilla,
        handleBook
      }
    }
  }
</script>

<style lang="scss">
  
</style>
