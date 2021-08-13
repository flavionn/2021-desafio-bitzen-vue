<template lang="pug">

formulate-form(
	:form-errors="formErrors"
	@submit="registrarAbastecimento"
	)

	formulate-input(
		label="Motorista"
		type="text"
		name="motorista"
		v-model="motorista"
		@input="procurarMotorista"
		validation="required"
		)

	formulate-input(
		type="hidden"
		name="motoristaId"
		v-model="motoristaId"
		)

	div(
		v-show="isOpen"
		class="fixed bg-white py-0 border"
		)
		ul
			li(
				v-for="item in motoristas"
				@click="popularInput(item.id, item.nome)"
				class="p-4 cursor-pointer hover:(bg-gray-50)"
				) {{ item.nome }}

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

	formulate-errors


</template>

<script>

export default {
	data() {
		return {
			formErrors: [],
			motorista: '',
			motoristaId: '',
			motoristas: [],
			isOpen: false
		}
	},
	mounted(data) {
		document.addEventListener('click', this.handleClickOutside)
	},
	destroyed() {
		document.removeEventListener('click', this.handleClickOutside)
	},
	methods: {
		handleClickOutside(event) {
			if(!this.$el.contains(event.target)) {
				this.isOpen = false
			}
		},
		procurarMotorista(data, event) {
			const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas?search=' + data

			this.$http.get(api).then((response) => {
				this.motoristas = response.data
			})

			this.isOpen = true
		},
		popularInput(id, nome) {
			this.motorista = nome
			this.motoristaId = id
			this.isOpen = false
		},
		registrarAbastecimento(data) {
			const api = 'https://6113e54acba40600170c1ce3.mockapi.io/abastecimentos'

			this.$http.post(api, data).then((response) => {
				this.$router.push({ name: 'veiculo' })
			})
		}
	}
}

</script>
