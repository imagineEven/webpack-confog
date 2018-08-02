import Vue  from 'vue';
import VueRouter from 'vue-router';
import signIn from '../signIn.vue';
import home from '../view/homePage/home.vue';
import test from '../view/homePage/test.vue';
Vue.use(VueRouter);
let homeChildren = [
  {
    path: '/home/test1',
    component: test,
    groupName: '主页',
    meta: {
      path: '/home/test1',
      cname: '员工管理',
      hide: false
    }
  },
  {
    path: '/home/test2',
    component: test,
    groupName: '主页',
    meta: {
      path: '/home/test2',
      cname: '会员管理',
      hide: false
    }
  },
  {
    path: '/home/test3',
    component: test,
    groupName: '详情页',
    meta: {
      path: '/home/test3',
      cname: '账号管理',
      hide: false
    }
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
      component:() => import('../view/homePage/recursionWraper.vue'),
      name: 'Home',
      children: homeChildren,
      navDetail: navDetail
    }
  ]
});


export default router;