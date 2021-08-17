import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from '../../api/veiculo'

Vue.use(VueAxios, axios)

const state = {
	todos: [],
	temp: {},
}

const actions = {
	async cadastrarVeiculo({}, data) {
		await axios
		.post(api, data)
	},

	async editarVeiculo({}, data) {
		await axios
		.put(api + data.id, data)
	},

	async carregarVeiculo({ commit }, id) {
		await axios
		.get(api + id)
		.then((response) => {
			/*
			caso o número tenha mais de 4 digitos, gera um random entre 1050 e 2021
			para refazer o número carregado da mockApi.
			remover.
			*/
			response.data.ano_de_fabricacao = (response.data.ano_de_fabricacao.toString().length > 4) ? Math.floor(Math.random() * (2021 - 1950 + 1)) + 1950 : response.data.ano_de_fabricacao
			commit('SET_VEICULO', response.data)
		})
	},

	async carregarVeiculos({ commit }) {
		await axios
		.get(api)
		.then((response) => {
			commit('SET_VEICULOS', response.data)
		})
	},

	async excluirVeiculo({ commit }, id) {
		await axios
		.delete(api + id)
		.then((response) => {
			commit('DELETAR_VEICULO', id)
		})
	}
}

const mutations = {
	SET_VEICULOS(state, payload) {
		state.todos = payload
	},

	SET_VEICULO(state, payload) {
		state.temp = payload
	},

	DELETAR_VEICULO(state, payload) {
		var index = state.todos.findIndex(item => item.id == payload)
		state.todos.splice(index, 1)
	}
}

export default {
	state,
	actions,
	mutations
}
