import Vue from 'vue';
import store from './store/store.js';
import router from './router/router.js';


new Vue({
  el: '#vue-app',
  store: store,
  router: router
});