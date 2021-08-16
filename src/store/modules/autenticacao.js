import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from '../../api/autenticacao'

Vue.use(VueAxios, axios)

const actions = {
	async logarUsuario({ commit }, data) {
		// transação api
		commit('SET_USUARIO', true, { root: true })
	},

	async deslogarUsuario({ commit }) {
		commit('SET_USUARIO', false, { root: true })
	}

	// async cadastrarMotorista({}, data) {
	// 	await axios
	// 	.post(api, data)
	// },

	// async editarMotorista({}, data) {
	// 	await axios
	// 	.put(api + data.id, data)
	// },

	// async carregarMotorista({ commit }, id) {
	// 	await axios
	// 	.get(api + id)
	// 	.then((response) => {
	// 		response.data.data_de_nascimento = new Date(response.data.data_de_nascimento).toISOString().split('T')[0]
	// 		commit('SET_MOTORISTA', response.data)
	// 	})
	// },

	// async carregarMotoristas({ commit }) {
	// 	await axios
	// 	.get(api)
	// 	.then((response) => {
	// 		commit('SET_MOTORISTAS', response.data)
	// 	})
	// },

	// async excluirMotorista({ commit }, id) {
	// 	await axios
	// 	.delete(api + id)
	// 	.then((response) => {
	// 		commit('DELETAR_MOTORISTA', id)
	// 	})
	// }
}

export default {
	actions
}
