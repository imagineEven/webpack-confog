<template>
  <div class="loading_wrapper">
      <vue-loading :type="Type" :color="colorType" :size="sizeType"></vue-loading> 
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
export default {
  data() {
    return {
      colorType: '#d9544e',
      randomType: ['balls', 'bars', 'beat', 'bubbles', 'cylon', 'spin', 'spiningDubbles'],
      sizeType: {width: '150px', height: '150px'},
      Type: ""
    }
  },
  mounted() {
    if (!this.Type) {
      this.Type = this.randomType[Math.floor(Math.random()*this.randomType.length)]
    }
  },
  watch:{
  },
  components: {
    VueLoading
  }
}
</script>

<style lang="scss">
.loading_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(225,225,225,.8);
}
</style>

