import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainPage from '../view/main/MainPage';
import TabHome from '../view/main/tabs/TabHome';
import TabProducts from '../view/main/tabs/TabProducts';
import TabDiscover from '../view/main/tabs/TabDiscover';
import TabMine from '../view/main/tabs/TabMine';

const SettingsPage = r => require.ensure([], () => r(require('../view/mine/SettingsPage')), 'SettingsPage');
const IFrameWebPage = r => require.ensure([], () => r(require('../view/common/IFrameWebPage')), 'IFrameWebPage');
const TestCasePage = r => require.ensure([], () => r(require('../view/mine/TestCasePage')), 'TestCasePage');

const routes = [
  {path: '*', redirect: '/main'},
  {
    name: 'main', redirect: '/main/home', component: MainPage,
    children: [
      {name: 'home', path: 'home', component: TabHome, meta: {keepAlive: true}},
      {name: 'products', path: 'products', component: TabProducts, meta: {keepAlive: true}},
      {name: 'discover', path: 'discover', component: TabDiscover, meta: {keepAlive: true}},
      {name: 'mine', path: 'mine', component: TabMine, meta: {keepAlive: true}},
    ], meta: {keepAlive: true}
  },
  {name: 'SettingsPage', component: SettingsPage},
  {name: 'IFrameWebPage', component: IFrameWebPage},
  {name: 'TestCasePage', component: TestCasePage},
];

// 懒得写path，给他们自动生成一个，和name同名
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new VueRouter({routes});

// 生命周期之前
router.beforeEach((to, from, next) => {
  // 保存个路由来路，以备不时之需
  localStorage.setItem('fromPage', from.name);
  next();
});

//生命周期之后
router.afterEach((to, from) => {
  // 滑动到顶吧
  window.scrollTo(0, 0);
});

export default router;
