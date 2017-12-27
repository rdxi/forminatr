import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexPage from '../pages/IndexPage.vue';
import RouterDemoPage from '../pages/RouterDemoPage.vue';
import RouterDemoPageInnerDynamic from '../pages/RouterDemoPageInnerDynamic.vue';
import RouterDemoPageInnerStatic from '../pages/RouterDemoPageInnerStatic.vue';
// const RouterDemoPage = { template: '<div>bar</div>' };

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', component: IndexPage },
    {
      path: '/router-demo/',
      component: RouterDemoPage,
      children: [
        {
          path: 'inner-static',
          component: RouterDemoPageInnerStatic
        },
        {
          // router-demo/:something is matched
          path: ':pageNumber',
          component: RouterDemoPageInnerDynamic
        }
      ]
     }
  ]
});

export default router;
