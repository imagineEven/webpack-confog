<template>
  <div class="home">
    <router-link to="/footer">我是home里的组件</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang='scss'>
  .home {
    height: 100px;
    width: 100px;
    background: wheat;
  }
</style>
