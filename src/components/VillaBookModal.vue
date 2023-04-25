<template>
  <el-dialog v-model="dialogVisible" :title="selectedVilla?.isBooked ? 'Warning' : 'Confirmation'">
    <p>
      Do you want to
      <strong :class="selectedVilla?.isBooked ? 'danger-txt' : 'brand-txt'">{{selectedVilla?.isBooked ? 'unbook' : 'book'}}</strong>
      <em> "{{selectedVilla?.name}}"</em>
    </p>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false;">Cancel</el-button>
        <el-button
          :type="selectedVilla?.isBooked ? 'danger' : 'primary'"
          @click="dialogVisible = false; store.methods.updateVilla(selectedVilla.id, {isBooked: !selectedVilla.isBooked}); selectedVilla.isBooked = !selectedVilla.isBooked;"
          >Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
  import { inject } from 'vue'

  // store
  import store from '../store/index'

  export default {
    name: 'VillaBookModal',
    setup() {
      // initial state
      const selectedVilla = inject('selectedVilla')
      const dialogVisible = inject('dialogVisible')

      return {
        store,
        dialogVisible,
        selectedVilla
      }
    }
  }
</script>

<style lang="scss">
  @media (max-width: 768px) {
    .el-dialog {
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      margin: 0;

      .el-dialog__body {
        height: calc(100% - 72px - 2 * (var(--el-dialog-padding-primary) + 10px));
      }

      .el-dialog__footer {
        bottom: 0;
        position: absolute;
        left: 0;
        right: 0;
        border: 0;
      }
    }
  }
</style>
