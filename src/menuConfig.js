// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '订单报表',
    path: '/order/report',
    icon: 'chart',
  },
  {
    name: '订单管理',
    path: '/orders',
    icon: 'shopcar',
  },
  {
    name: '商品管理',
    path: '/goods',
    icon: 'shopcar',
  },
  {
    name: '库存管理',
    path: '/stocks',
    icon: 'shopcar',
  },
  {
    name: '修改信息',
    path: '/modify',
    icon: 'edit2',
  },
  {
    name: '添加订单',
    path: '/add/order',
    icon: 'publish',
  },
  {
    name: '添加商品',
    path: '/add/goods',
    icon: 'publish',
  },
];

export { headerMenuConfig, asideMenuConfig };
