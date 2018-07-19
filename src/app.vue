<template>
  <router-view></router-view>
</template>

<script>
import remhelper from "./edit/remhelper.js";
export default {
  data() {
    return {
      num: 1
    }
  },
  // mounted() {
  //   window.onresize = () => {
  //     let scale = remhelper();
  //     if (document.body.clientWidth * scale > 750) {
  //       document.getElementById("app").style.width = 750/scale + "px";
  //     } else {
  //       document.getElementById("app").style.width = "100%";
  //     }
  //   };
  //   window.onresize();
  // }
};
</script>

<style lang="scss">
.wrap {
  height: 200px;
  width: 200px;
  background: yellowgreen;
}
</style>

