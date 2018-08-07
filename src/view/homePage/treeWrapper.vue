<template>
  <div>
    <div v-for="(item, index) in data" class="tree_wrapper">
      <div class="tree_detail" @click="onClick(item, index)" v-show="item.hide">
        <i class="icon"></i>
        <div class="name">{{ item.name }}</div>
      </div>
      <navdetail v-if="scoped[index]" :data="item.children"></navdetail>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    name: 'navdetail',
    data() {
      return {
        scoped: {},
      }
    },
    methods: {
      Todast(index) {
        this.$set(this.scoped, index, !this.scoped[index]);
      },
      onClick(item, index) {
        if (item.children && item.children.length) {
          this.Todast(index);
        }
        console.log(item.path)
        this.$router.push({
          path: item.path
        })
      }
    },
    mounted() {

    }
  }
</script>

<style style="scss" scoped>
.tree_wrapper {
  margin-left: 20px;
}
</style>
