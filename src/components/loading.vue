<template>
  <div class="loading_wrapper">
      <vue-loading :type="Type" :color="colorType" :size="sizeType"></vue-loading> 
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
export default {
  props:{
      Type: {
        type: String
      },
      colorType: {
        type: String,
        require: false,
        default: '#d9544e'
      },
      sizeType: {
        type: Object,
        default: {
          width: '150px',
          height: '150px'
        }
      }
  },
  data() {
    return {
      randomType: ['balls', 'bars', 'beat', 'bubbles', 'cylon', 'spin', 'spiningDubbles']
    }
  },
  mounted() {
    console.log(this.Type);
    if (!this.Type) {
      this.Type = this.randomType[Math.floor(Math.random()*this.randomType.length)]
    }
  },
  watch:{
    Type(val) {
      console.log('刚开始这里执行了吗')
      return val
    }
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

