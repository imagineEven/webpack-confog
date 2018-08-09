import Vue  from 'vue';
import VueRouter from 'vue-router';
import signIn from '../signIn.vue';
import home from '../view/homePage/home.vue';
import technology from './../view/homeInfo/test03.vue';
import people from './../view/homeInfo/people.vue';
Vue.use(VueRouter);
let homeChildren = [
  { 
    path: '/home/home',
    cname: '主页',
    component:() => import('./../view/homeInfo/home.vue')
  },
  { 
    path: '/home/people',
    cname: '人事行政部',
    //component:() => import('./../view/homeInfo/people.vue')
    component: people
  },
  { 
    path: '/home/test01',
    cname: '',
    component:() => import('./../view/homeInfo/test01.vue')
  },
  {
    path: '/home/test02',
    cname: '',
    component:() => import('./../view/homeInfo/test02.vue')
  },
  {
    path: '/home/test03',
    cname: '', 
    component:() => import('./../view/homeInfo/test03.vue')
  },
  {
    path: '/home/technology',
    cname: '', 
    //component:() => import('./../view/homeInfo/test03.vue')
    component: technology
  }
];

export {
  homeChildren
};

let navDetail = [];
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: signIn,
      name: '/'
    },
    {
      path: '/home',
      component:() => import('../view/homePage/home.vue'),
      name: 'Home',
      children: homeChildren,
      navDetail: navDetail
    }
  ]
});


export default router;