import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from '../../api/abastecimento'

Vue.use(VueAxios, axios)

const state = {
	todos: [],
}

const actions = {
	async registrarAbastecimento({}, data) {
		await axios
		.post(api, data)
	},

	async carregarAbastecimentos({ commit }) {
		await axios
		.get(api + '?sortBy=data&order=desc')
		.then((response) => {
			commit('SET_ABASTECIMENTOS', response.data)
		})
	}
}

const mutations = {
	SET_ABASTECIMENTOS(state, payload) {
		state.todos = payload
	}
}

export default {
	state,
	actions,
	mutations
}
