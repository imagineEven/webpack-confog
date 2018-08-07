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
      <tree :data="data"></tree>
    </div>
  </div>
  <div class="home_content">
    <div class="progress">
      <div v-for="item in progressData" class="progress_detaul center">
        {{ item.name }}
      </div>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { navDetail } from "../../router/parseRouter.js";
import tree from "./treeWrapper.vue";
export default {
  data() {
    return {
      widthSign: false,
      data: ""
    };
  },
  methods: {
    ...mapActions(["changeNav"]),
    changeWidth() {
      this.widthSign = !this.widthSign;
    }
  },
  computed: {
    ...mapGetters(["navData", "progressData"])
  },
  mounted() {
    this.data = navDetail;
    console.log("111111");
    console.log(this.progressData);
  },
  components: {
    tree
  }
};
</script>

<style scoped lang='scss'>
.home_wrap {
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
  width: 180px;
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
.nav_detail {
  background: violet;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.home_content {
  width: 100%;
}
.progress {
  background: #ffffff;
  padding: 10px;
  margin: 20px;
  height: 50px;

  .progress_detaul {
    background: #6e6e6e;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
  }
}
</style>
