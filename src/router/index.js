import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'virtual:generated-pages'

Vue.use(VueRouter)

const router = new VueRouter({
	base: '/',
	mode: 'history',
	routes
})

export default router
