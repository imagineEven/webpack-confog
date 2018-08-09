
let navDetail = [
  {
    name: '主页',
    hide: true,
    patch: '',
    children: [
      {
        name: '人事行政部',
        hide: true,
        path: '/home/people',
        children: [
          {
            name: '主管',
            hide: true,
            path: '/home/test01',
          },
          {
            name: '员工',
            hide: true,
            path: '/home/test02'
          },
          {
            name: '傻逼',
            hide: true,
            path: '/home/test03'
          }
        ]
      },
      {
        name: '技术研发部',
        hide: true,
        path: '/home/technology',
        children: [
          {
            name: '前端',
            hide: false,
            path: ''
          },
          {
            name: '后台',
            hide: true,
            path: ''
          },
          {
            name: '产品',
            hide: true,
            path: ''
          }
        ]
      }
    ]
  },
  {
    name: '详情页',
    hide: true,
    path: '',
    children: [
      {
        name: '积分',
        hide: true,
        path: ''
      },
      {
        name: '商城',
        hide: true,
        path: ''
      }
    ]
  }
];
export {
  navDetail
};