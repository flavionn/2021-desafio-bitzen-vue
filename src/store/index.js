import Vue from 'vue'
import Vuex from 'vuex'
import motorista from './modules/motorista'
import veiculo from './modules/veiculo'
import abastecimento from './modules/abastecimento'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		motorista,
		veiculo,
		abastecimento
	}
})
