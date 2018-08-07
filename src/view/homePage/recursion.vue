<template>
  <div class="wraper">
    <div v-for="(item, index) in data" class="title">
      <div @click="onClick(item, index)">
        {{ item.name }}
      </div>
      <recurison v-if="scope[index]" :data="item.children"></recurison>
    </div>
  </div>  
</template>

<script>
export default {
  name: "recurison",
  props: ["data"],
  data() {
    return {
      isShow: false,
      scope: {}
    };
  },
  methods: {
    doTask(index) {
      console.log('这里有执行吗')
      this.$set(this.scope, index, !this.scope[index]);
    },
    onClick(item, index) {
      console.log(item);
      console.log(index);
      if (item.children && item.children.length) {
        this.doTask(index)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding-left: 20px;
}
.content {
  padding-left: 40px;
}
</style>
