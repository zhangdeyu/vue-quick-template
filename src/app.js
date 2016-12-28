import Vue from 'vue';
import router from 'vue-router';

import routes from './router'
import App from './App.vue';

Vue.use(router);

new Vue({
  el: '#app',
  router: new router({routes}),
  render: h => h(App)
})