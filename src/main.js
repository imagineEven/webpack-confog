import '../style/publicStyle.scss';
import app from './app.vue';
import Vue  from 'vue';
import VueRouter from 'vue-router';
import home from './signIn.vue';
import fo from './fo.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuex from 'vuex';
import store from './store/store';
import App from './app.vue';
import apiServer from './comment/request.js';
import VueLoading from 'vue-loading-template';
import axios from 'axios';
import router from './router/router.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import'../src/style/swiper.min.css';
require('swiper/dist/css/swiper.css');
Vue.use(VueLoading);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);
require('./comment/test.js');
require('./components/public.js');
// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {path: '/', component:home},
//     {path: '/footer', component:fo}
//   ]
// });

// const root = document.createElement('div');
// document.body.appendChild(root);
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store,
  components: { App }
});//.$mount(root);
// apiServer({
//   url: '/userInfo/save',
//   method: 'get',
//   params: {
//     name: 'levi',
//     photoNumber: 17601302923
//   }
// }).then(data => {
//   console.log(data);
// });
// axios.get('/all/detail', {params: { key: '我的名字事陈学伟' }}).then((data) => {
//   console.log(data);
// });
