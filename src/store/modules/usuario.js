const state = {
	logado: false
}

const mutations = {
	SET_USUARIO(state, payload) {
		state.logado = payload
	}
}

export default {
	state,
	mutations
}
