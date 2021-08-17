<template lang="pug">

formulate-form(
	@submit="registrar"
	)

	formulate-input(
		label="Motorista"
		type="text"
		name="motorista"
		v-model="motorista"
		validation="required"
		)

	div(
		v-show="isOpen"
		class="fixed bg-white py-0 border w-100"
		)
		ul
			li(
				v-if="!itemsFiltrados.length"
				class="p-4"
				) Nenhum encontrado
			li(
				v-else
				v-for="item in itemsFiltrados"
				@click="popularInput(item.id, item.nome)"
				class="p-4 cursor-pointer hover:(bg-gray-50)"
				) {{ item.nome }}

	formulate-input(
		type="hidden"
		name="motoristaId"
		v-model="motoristaId"
		)


	formulate-input(
		type="hidden"
		name="veiculoId"
		:value="this.$route.params.id"
		)

	formulate-input(
		label="Data"
		type="date"
		name="data"
		validation="required"
		)

	formulate-input(
		label="Tipo de combustível"
		type="select"
		name="tipo_de_combustivel"
		:options="{ gasolina: 'Gasolina', alcool: 'Alcool', diesel: 'Diesel', gas_natural: 'Gás natural' }"
		validation="required"
		)

	formulate-input(
		label="Quantidade abastecida"
		type="number"
		name="quantidade_abastecida"
		help="Informe a quantidade em litros"
		validation="required"
		)

	formulate-input(
		label="Registrar abastecimento"
		type="submit"
		)

</template>

<script>

export default {
	data() {
		return {
			motorista: '',
			motoristaId: '',
			motoristas: [],
			isOpen: false
		}
	},
	mounted(data) {
		document.addEventListener('click', this.handleClickOutside)

		this.$store.dispatch('carregarMotoristas')
	},
	destroyed() {
		document.removeEventListener('click', this.handleClickOutside)
	},
	computed: {
		listaMotoristas() {
			return this.$store.state.motorista.todos
		},
		itemsFiltrados() {
			let tempItems = this.listaMotoristas

			if(this.motorista != '' && this.motorista) {
				this.isOpen = true
				tempItems = tempItems.filter((item) => {
					return item.nome.toLowerCase().includes(this.motorista.toLowerCase())
				})
			}

			return tempItems
		}
	},
	methods: {
		handleClickOutside(event) {
			if(!this.$el.contains(event.target)) {
				this.isOpen = false
			}
		},
		popularInput(id, nome) {
			this.motorista = nome
			this.motoristaId = id
			this.isOpen = false
		},
		async registrar(data) {
			data['data'] = Date.parse(data.data)

			await this.$store.dispatch('registrarAbastecimento', data)
			.then(() => this.$router.push({ name: 'veiculo' }))
		}
	}
}

</script>
