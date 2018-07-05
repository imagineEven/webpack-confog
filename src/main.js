import '../style/example.scss';
import app from './app.vue';
import Vue  from 'vue';
import VueRouter from 'vue-router';
import home from './home.vue';
import fo from './fo.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuex from 'vuex';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component:home},
    {path: '/footer', component:fo}
  ]
});

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
});
// (function(){})()
//(function(){}())
// (立刻执行函数)后面的括号为立即掉调用，前面的括号为：函数表达式的形式声明函数
// (function (doc, win) {
//   // 返回一个文档元素 也就是dom对象；
//   let docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       let clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';//其中“20”根据你设置的html的font-size属性值做适当的变化
//     };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);



