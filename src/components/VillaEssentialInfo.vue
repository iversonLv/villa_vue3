<template>
  <h3>Essential info</h3>
  <p><label>Entire house:</label> {{store.state.villa?.share ? 'Yes' : 'Could be shared with other customers'}}</p>
  <p><label>Bedrooms:</label> {{store.state.villa?.bedrooms}}</p>
  <p><label>Bathrooms:</label> {{store.state.villa?.bathrooms}}</p>
  <p><label>Min nights:</label> {{store.state.villa?.minNights}}</p>
</template>

<script>
  // store
  import store from '../store/index'

  export default {
    name: 'VillaEssentialInfo',
    setup() {
      return {
        store
      }
    }
  }
</script>

<style lang="scss">
  
</style>
