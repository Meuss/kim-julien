import Vue from 'vue';
import App from './App.vue';
import store from './store';
import i18n from './i18n';
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1500,
  scale: 1,
  distance: '20px',
  // mobile: false,
});

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
