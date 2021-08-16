import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

Vue.use(VueRouter)

const routes = setupLayouts(generatedRoutes)

const router = new VueRouter({
	base: '/',
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.requerAutenticacao)) {
		if(!store.state.usuario.logado) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
		else {
			next()
		}
	}
	else {
		next()
	}
})

export default router
