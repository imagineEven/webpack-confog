<template>
  <div>
    <div v-for="item in detail" :style="{marginLeft: width + 'px'}">
      {{ item }}
    </div>
  </div>
</template>

<script>
  import recursion from './recursion.vue';
  export default {
    data() {
      return {
        detail: ['even', 'tony', 'levi'],
        left: 20
      }
    },
    computed: {
      width() {
        return this.left += this.left
      }
    },
    components: {
      recursion
    }
  }
</script>

<style>

</style>
