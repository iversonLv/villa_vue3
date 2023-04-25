<template>
  <header>
    <h1 @click="backHome">
      illa party
    </h1>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
  import { useRouter } from 'vue-router'
  import { provide  } from "vue";

  // state
  import store from './store/index'

  // Components
  import Villas from "./views/Villas.vue";

  export default {
    components: {
      Villas
    },
    setup() {
      provide('store', store)
      const router = useRouter()
      const backHome = () => {
        router.push('/')
      }

      return {
        backHome
      }
    }
  }
</script>

<style scoped>
  header {
    padding: 10px 20px;
    border-bottom: 1px solid var(--el-border-color);
  }

  h1 {
    background: url(./assets/images/logo.svg) no-repeat 0 0;
    padding-left: 36px;
    padding-top: 14px;
    height: 26px;
    background-size: contain;
    margin: 0;
    cursor: pointer;
    display: inline-block;
  }

  .container {
    padding: 30px;
    max-width: 1440px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .container {
      padding: 24px;
    }
  }
</style>
