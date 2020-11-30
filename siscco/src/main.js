import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Navbar from '@/components/Navbar'
Vue.component('Navbar', Navbar);


// -------------------------------------------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFire, faCloudUploadAlt, faPlus, faUser, faSmileWink, faStoreAlt, faSortAmountDown} from '@fortawesome/free-solid-svg-icons'
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
library.add(faFire, faCloudUploadAlt, faPlus, faUser, faSmileWink, faStoreAlt, faSortAmountDown)
// -------------------------------------------------------
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
// CONFIGURO O BOOTSTRAP
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
