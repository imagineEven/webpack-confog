<template>
  <div class="footer">
    <div class="footer-content" @click="onClick">
      我是footer里的组件
    </div>
    <router-view>

    </router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      console.log(this.$router)
    },
    methods: {
      onClick() {
        this.$router.push({
          path: '/footer/test'
        })
      }
    }
  }
</script>

<style>
  .footer {
    font-size: 36px;
    height: 1rem;
    width: 7.5rem;
    background: wheat;
  }
  .footer-content {
    margin-bottom: 50px;
  }
</style>