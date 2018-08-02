<template>
  <div class="wraper">
    <div class="title">{{ detail.name }}</div>
    <div class="content">{{ detail.detail.name }}</div>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        detail: {
          name: 'even',
          detail: {
            name: 'tony'
          }
        }
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
