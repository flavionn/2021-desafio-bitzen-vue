import Vue from 'vue'
import Vuex from 'vuex'
import autenticacao from './modules/autenticacao'
import usuario from './modules/usuario'
import motorista from './modules/motorista'
import veiculo from './modules/veiculo'
import abastecimento from './modules/abastecimento'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		autenticacao,
		usuario,
		motorista,
		veiculo,
		abastecimento
	}
})
