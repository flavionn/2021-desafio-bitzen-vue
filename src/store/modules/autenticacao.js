import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from '../../api/autenticacao'

Vue.use(VueAxios, axios)

const actions = {
	async logarUsuario({ commit }, data) {
		const resultado = await api.transacaoLogar(data)
		.then((res) => {
			console.log(res)
			commit('SET_USUARIO', true, { root: true })
		})
	},

	async deslogarUsuario({ commit }) {
		commit('SET_USUARIO', false, { root: true })
	}
}

export default {
	actions
}
