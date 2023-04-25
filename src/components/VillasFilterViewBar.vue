<template>
  <!-- top filter bar -->
  <el-row class="filter-sort-order-bar">
    <!-- toggle btn for table and cards -->
    <el-col :span="4.4" :xs="24">
      <el-radio-group
        v-model="viewMode"
      >
        <el-radio-button label="table"><el-icon><Tickets /></el-icon></el-radio-button>
        <el-radio-button label="grids"><el-icon><Grid /></el-icon></el-radio-button>
      </el-radio-group>
    </el-col>
    <!-- sort order bar -->
    <el-col :span="11" :xs="24">
      <div class="sort-order-bar">
        <el-select v-model="sort" class="m-2" placeholder="Select" clearable @clear="sort = null" :disabled="store.state.villas.length <= 1">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-radio-group
          v-model="order"
          :disabled="store.state.villas.length <= 1 || !sort"
        >
          <el-radio-button label="asc"><el-icon><SortUp /></el-icon></el-radio-button>
          <el-radio-button label="desc"><el-icon><SortDown /></el-icon></el-radio-button>
        </el-radio-group>
      </div>
    </el-col>
    <!-- date picker -->
    <el-col :span="9" :xs="24">
      <el-date-picker
        v-model="fromToDate"
        type="daterange"
        :range-separator="To"
        :start-placeholder="selectedFromDate"
        :end-placeholder="selectedToDate"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        :editable="false"
        :clearable="false"
        :disabledDate="disabledDate"
      />
    </el-col>
  </el-row >
</template>

<script>
  import { ref, computed } from 'vue'
  // store
  import store from '../store/index'

  // utils
  import utils from '../utils'
  
  // icons
  import {
    Grid,
    Tickets,
    SortUp,
    SortDown
  } from '@element-plus/icons-vue'

  export default {
    name: 'VillasFilterViewBar',
    setup() {
      // we need the date format strictly as  'yyyy-MM-dd' for triky
      const currentDate = ref(utils.dateFormatPipe(new Date()))

      // from date state
      // default, from date and end date will be current
      let selectedFromDate = ref(currentDate);
      let selectedToDate = ref(currentDate);
      
      // if date less today, the date should not be able to select
      const disabledDate = (date) => {
        const today = new Date();
        today.setDate(today.getDate() - 1);
        if (date > today) {
          return false;
        }
        return true;
      };

      // sort
      const options = [
        {
          value: 'location',
          label: 'location',
        },
        {
          value: 'price',
          label: 'price',
        },
        {
          value: 'capacity',
          label: 'capacity',
        },
      ]
      // as viewMode in store is readonly mode, so we need compute it
      const viewMode = computed({
        get() {
          return store.state.viewMode
        },
        set(value) {
          store.methods.setViewMode(value)
        }
      })

      const sort = computed({
        get() {
          return store.state.sort
        },
        set(value) {
          store.methods.setSort(value)
        }
      })

      const order = computed({
        get() {
          return store.state.order
        },
        set(value) {
          store.methods.setOrder(value)
        }
      })

      const fromToDate = computed({
        get() {
          return store.state.fromToDate
        },
        set(value) {
          store.methods.setSelectedFromToDate(value)
        }
      })
        
      return {
        store,
        utils,

        viewMode,
        sort,
        order,
        fromToDate,

        options,
        disabledDate,
        selectedFromDate,
        selectedToDate,

        // icons
        Grid,
        Tickets,
        SortUp,
        SortDown,
      }
    }
  }
</script>

<style lang="scss">
.filter-sort-order-bar {
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--el-border-color);
  
  // sort order bar
  .sort-order-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-select {
      margin-right: 10px;
    }
  }
  .el-date-editor {
    &.el-input__wrapper {
      width: calc(100% - 20px);
    }
  }
}

@media (max-width: 768px) {
  .filter-sort-order-bar {
    .el-col {
      margin-bottom: 10px;
      padding: 0;
    }

    .sort-order-bar {
      justify-content: space-between;
    }

    .el-date-editor {
      &.el-input__wrapper {
        width: calc(100% - 20px);
      }
    }
  }
}
</style>
