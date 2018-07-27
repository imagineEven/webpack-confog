<template>
  <div class="footer">
    <div> {{ navDetail.name }} </div>
    <div v-for="item in navDetail.detail" @click="onClick">
      <div v-show="item.hide">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    mounted() {
      console.log(this.$router)
    },
    methods: {
      onClick() {
        this.show = !this.show
      }
    }
  }
</script>

<style>
  .footer {
    font-size: 36px;
    height: 1rem;
    width: 7.5rem;
    background: wheat;
  }
  .footer-content {
    margin-bottom: 50px;
  }
</style>