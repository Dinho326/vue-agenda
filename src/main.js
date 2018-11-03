import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import {routes} from './routes';

import VueMask from 'v-mask';
Vue.use(VueMask);

Vue.config.productionTip = false
Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode:'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
