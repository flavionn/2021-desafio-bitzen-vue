import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFormulate from '@braid/vue-formulate'
import 'virtual:windi.css'
import './assets/global.sass'

Vue.use(VueFormulate, {
	useInputDecorators: false
})

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
