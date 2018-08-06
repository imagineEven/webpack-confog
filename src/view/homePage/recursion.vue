<template>
  <div class="wraper">
    <div v-for="item in data" class="title">
      <div @click="onClick">
        {{ item.name }}
      </div>
      <recurison :data="item.children" v-show="isShow"></recurison>
    </div>
  </div>  
</template>

<script>
  export default {
    name: "recurison",
    props: ['data'],
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      onClick() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    padding-left: 20px;
  }
  .content {
    padding-left: 40px;
  }
</style>
