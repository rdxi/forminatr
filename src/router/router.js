import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexPage from '../pages/IndexPage.vue';
import RouterDemoPage from '../pages/RouterDemoPage.vue';
import RouterDemoPageInnerNumbered from '../pages/RouterDemoPageInnerNumbered.vue';
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
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'inner-static',
          component: RouterDemoPageInnerStatic
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: ':pageNumber',
          component: RouterDemoPageInnerNumbered
        }
      ]
     }
  ]
});

export default router;
