import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueFormulate from '@braid/vue-formulate'
import { dateFilter } from "vue-date-fns"

import 'virtual:windi.css'
import './assets/global.sass'

Vue.prototype.$http = axios
Vue.use(VueFormulate)
Vue.filter("date", dateFilter)

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
