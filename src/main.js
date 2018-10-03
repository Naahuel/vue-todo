import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';

// Material stuff
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import {
  MdEmptyState,
  MdList,
  MdButton,
  MdCheckbox,
  MdContent,
  MdIcon,
  MdDialog,
  MdDialogPrompt,
  MdField } from 'vue-material/dist/components';

Vue.use(MdEmptyState);
Vue.use(MdList);
Vue.use(MdButton);
Vue.use(MdCheckbox);
Vue.use(MdContent);
Vue.use(MdIcon);
Vue.use(MdDialog);
Vue.use(MdDialogPrompt);
Vue.use(MdField);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
