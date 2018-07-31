import Vue  from 'vue';

Vue.component('Navigation', {
  props: [
    'navObj'
  ],
  data(){
    return {
      show: ''
    };
  },
  methods: {
    onClick() {
      this.show = !this.show;
    }
  },
  mounted() {
  },
  template:'<div><div @click="onClick">{{ navDetail.name }}</div><br><div v-for="item in navDetail.detail" v-show="show"><div v-show="!item.hide">{{ item.name }}</div></div></div>'
});