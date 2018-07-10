<template>
  <div class="sign_in_wrapper">
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
  .sign_in_wrapper {
    height: 100%;
    width: 100%;
    background: url(../static/background.jpg);
    background-size: 100% 100%;
  }
</style>
