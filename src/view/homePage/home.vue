<template>
<div>
  <div @click.self="onClick">
    我是home组件的内容
    <div v-show="isShow">
      下面好痒啊
    </div>
  </div>
  <Navigation :navDetail = "navDetail"></Navigation>
  <Navigation :navDetail = "navDetail"></Navigation>
  <Navigation :navDetail = "navDetail"></Navigation>
  <Navigation :navDetail = "navDetail"></Navigation>
</div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        navDetail: {
          name: '会员管理',
          detail: [
            {hide: false, name: '张三', path: '/home/test'},
            {hide: false, name: 'lisi', path: '/home/test'}
          ]
        }
      }
    },
    methods: {
      onClick(event) {
        console.log(event)
        this.isShow = !this.isShow
      }
    },
    mounted() {
      console.log(this.$router)
    }
  }
</script>

<style scoped>

</style>
