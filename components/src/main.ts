import Vue from 'vue';
import RouterApp from './RouterApp.vue';
import store from './store.ts';
import router from './router.ts';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(RouterApp)
}).$mount('#app');
