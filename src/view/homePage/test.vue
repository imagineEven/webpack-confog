<template>
  <div class="Navigation_wrap">
    <div class="nav_content">
      <div class="nav_title" @click="onClick">
          {{ name }}
      </div>
      <div class="nav_detail" v-for="detalItem in detail" v-if="isShow">
        <div v-if="detalItem.hide" @click="onClickDetail(detalItem.path)">
            {{ detalItem.cname }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      name: "主页",
      detail: [{
        path: '/home/test1',
        cname: '员工管理',
        hide: true
      }, {
        path: '/home/test2',
        cname: '员工奖励',
        hide: true
      }]
    }
  },
  methods: {
    onClick() {
      this.isShow = !this.isShow
    },
    onClickDetail(path) {
        console.log(path)
    }
  }
};
</script>

<style scoped>
.Navigation_wrap {
  padding: 100px;
}
.nav_content {
  background: palegreen;
}
.nav_title {
  background: rgb(77, 74, 74, 0.5);
}
.nav_detail {
  margin-left: 20px;
}
</style>
