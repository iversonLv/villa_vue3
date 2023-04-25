<template>
  <div class="reviews">
    <h3>Reviews <strong>({{store.state.villa?.reviews?.length}})</strong></h3>
    <p v-if="!store.state.villa?.reviews?.length">Current no reviews</p>
    <div
      v-else
      v-for="(review, index) in dataReviews"
      :key="index"
    >
      <el-rate
        v-model="review.rate"
        disabled
        show-score
        text-color="#ff9900"
      />
      <p>{{review?.review}}</p>
    </div>
    <div class="bottom-bar">
      <el-button type="primary" @click="handleLoadMoreReviews" v-if="store.state.villa?.reviews?.length > 5">
         {{dataReviews?.length < store.state.villa?.reviews?.length ? 'Load all' : 'Load less'}}
      </el-button>
    </div>
  </div>
</template>

<script>
  import { inject } from 'vue'

  // store
  import store from '../store/index'

  export default {
    name: 'VillaReviews',
    setup() {
      const dataReviews = inject('dataReviews')

      const handleLoadMoreReviews = () => {
        if (dataReviews.value?.length < store.state.villa.reviews.length) {
          dataReviews.value = store.state.villa.reviews.slice(0, store.state.villa.reviews.length)
        } else {
          dataReviews.value = store.state.villa.reviews.slice(0, 5)
        }
      }

      return {
        store,

        dataReviews,
        handleLoadMoreReviews
      }
    }
  }
</script>

<style lang="scss">
  .reviews {
    p {
      line-height: 1.5;
      padding-bottom: 20px;
    }
  }

  .bottom-bar {
    display: flex;
    justify-content: center;
  }
</style>
