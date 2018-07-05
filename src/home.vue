<template>
  <div class="home">
    <router-link to="/footer">我是home里的组件</router-link>
    <b-alert show>真的可以用了吗</b-alert>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {

    }
  }
</script>

<style lang='scss'>
  .home {
    background: wheat;
  }
</style>
