import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas/'

const state = {
	todos: [],
	temp: {},
}

const actions = {
	async cadastrarMotorista({}, data) {
		await axios
		.post(api, data)
	},

	async editarMotorista({}, data) {
		await axios
		.put(api + data.id, data)
	},

	async carregarMotorista({ commit }, id) {
		await axios
		.get(api + id)
		.then((response) => {
			response.data.data_de_nascimento = new Date(response.data.data_de_nascimento).toISOString().split('T')[0]
			commit('SET_MOTORISTA', response.data)
		})
	},

	async carregarMotoristas({ commit }) {
		await axios
		.get(api)
		.then((response) => {
			commit('SET_MOTORISTAS', response.data)
		})
	},

	async excluirMotorista({ commit }, id) {
		await axios
		.delete(api + id)
		.then((response) => {
			commit('DELETAR_MOTORISTA', id)
		})
	}
}

const mutations = {
	SET_MOTORISTAS(state, payload) {
		state.todos = payload
	},

	SET_MOTORISTA(state, payload) {
		state.temp = payload
	},

	DELETAR_MOTORISTA(state, payload) {
		var index = state.todos.findIndex(item => item.id == payload)
		state.todos.splice(index, 1)
	}
}

export default {
	state,
	actions,
	mutations
}
