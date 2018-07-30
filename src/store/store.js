import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home.js';
import sign from './modules/sign.js';
import getters from './getters';
Vue.use(Vuex);
 
export default new Vuex.Store({
  modules: {
    home,
    sign
  },
  getters
});

// vuex 就是vuex根组件多了一个对象，store将对象内部结构复制给 this.$store
// 通过mapState([]) 的方式遍历
// 