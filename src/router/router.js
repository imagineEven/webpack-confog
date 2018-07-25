import Vue  from 'vue';
import VueRouter from 'vue-router';
import signIn from '../signIn.vue';
import home from '../view/homePage/home.vue';
import test from '../view/homePage/test.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: signIn},
    {path: '/home', component: home, children:[
      {path: '/home/test', component:test}
    ]}
  ]
});

export default router;