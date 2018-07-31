<template>
<div class="home_wrap">
  <!-- 头部导航 -->
  <div class="home_header">
    <div class="nav_handle center" @click="changeWidth">
      <img src="" alt="nav">
    </div>
  </div>

  <!-- nav导航 -->
  <div class="nav_wrap" :class="{ nav_wrap_width: widthSign }">
    <div class="nav_detail" v-show="!widthSign">
      <div>1111</div>
      <div>2222</div>
      <div>3333</div>
    </div>
  </div>

  <div>我是内容的部分</div>
</div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
//import { parsedDate } from '../../router/parseRouter.js'
  export default {
    data() {
      return {
        widthSign: false
      }
    },
    methods: {
      ...mapActions(['changeNav']),
      changeWidth() {
        this.widthSign = !this.widthSign
      }
    },
    computed: {
      ...mapGetters(['navData']),
    },
    mounted() {
      console.log(this.$store)
      console.log('这里又执行吗？')
      console.log(this.navData)
    }
  }
</script>

<style scoped lang='scss'>
  .home_wrap{
    display: flex;
    height: 100%;
    width: 100%;
    padding-top: 100px;
    background: antiquewhite;
  }
  .home_header {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    background: rgba(151, 79, 79, 0.3);
    padding: 20px;
  }
  .nav_wrap {
    height: 100%;
    width: 160px;
    background: rgba(92, 48, 48, 0.3);
    padding: 20px;
  }
  .nav_wrap_width {
    width: 60px;
  }
  .nav_handle {
    height: 60px;
    width: 60px;
  }
  .nav_detail{
    height: 100px;
    background: violet;
    display: flex;
    flex-direction: column;
  }
</style>
