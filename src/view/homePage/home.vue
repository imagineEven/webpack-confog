<template>
<div class="home_wrap">
  <!-- 头部导航 -->
  <div class="home_header">
    <div class="nav_handle center" @click="changeNav">
      <img src="" alt="nav">
    </div>
  </div>

  <!-- nav导航 -->
  <div class="nav_wrap" :style="{ width: navWidth }">
    <div class="nav_detail center" v-show="navShow">
      
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        width: '160px'
      }
    },
    methods: {
      ...mapActions(['changeNav']),
    },
    computed: {
      ...mapGetters(['navWidth', 'navShow']),
    },
    mounted() {
      console.log(this.$store)
    }
  }
</script>

<style scoped lang='scss'>
  .home_wrap{
    height: 100%;
    width: 100%;
    background: antiquewhite;
  }
  .home_header {
    display: flex;
    flex-direction: row;
    height: 100px;
    background: blueviolet;
    padding: 20px;
  }
  .nav_wrap {
    height: 100%;
    background: yellow;
    padding: 20px;
  }
  .nav_handle {
    height: 60px;
    width: 60px;
  }
  .nav_detail{
    height: 100px;
    background: violet;
  }
</style>
