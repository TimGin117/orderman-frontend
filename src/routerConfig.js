// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import OrderReport from './pages/OrderReport';
import Orders from './pages/Orders';

import Stocks from './pages/Stocks';
import AddGoods from './pages/AddGoods';

import Goods from './pages/Goods';
import Modify from './pages/Modify';
import AddOrder from './pages/AddOrder';

const routerConfig = [
  {
    path: '/order/report',
    component: OrderReport,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/stocks',
    component: Stocks,
  },
  {
    path: '/goods',
    component: Goods,
  },
  {
    path: '/add/order',
    component: AddOrder,
  },
  {
    path: '/add/goods',
    component: AddGoods,
  },
  {
    path: '/modify',
    component: Modify,
  },
];

export default routerConfig;
