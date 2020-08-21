import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'hawkvuemd';
import 'hawkvuemd/dist/hawk_default_stylus.styl';
import 'hawkvuemd/dist/hawkvuemd.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
