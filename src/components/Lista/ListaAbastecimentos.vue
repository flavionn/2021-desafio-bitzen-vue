<template lang="pug">

div
	div(class="flex space-x-2 mb-4")
		formulate-input(
			class="flex-1"
			placeholder="Motorista"
			type="text"
			v-model="filtraMotorista"
			)

		formulate-input(
			class="flex-1"
			placeholder="Veículo"
			type="text"
			v-model="filtraVeiculo"
			)

	loading-message(v-if="!items.length")
	tabela-container(v-else)
		tabela-head
			tabela-cel Motorista
			tabela-cel Veículo
			tabela-cel Data
		tabela-body
			tr(v-for="item in itemsFiltrados")
				tabela-cel {{ item.motorista }}
				tabela-cel {{ item.veiculo }}
				tabela-cel {{ formatarData(item.data) }}

</template>

<script>

export default {
	data() {
		return {
			items: [],
			filtraMotorista: '',
			filtraVeiculo: ''
		}
	},
	mounted() {
		this.carregarAbastecimentos()
	},
	computed: {
		itemsFiltrados() {
			let tempItems = this.items

			if(this.filtraMotorista != '' && this.filtraMotorista) {
				tempItems = tempItems.filter((item) => {
					return item.motorista.toLowerCase().includes(this.filtraMotorista.toLowerCase())
				})
			}

			if(this.filtraVeiculo != '' && this.filtraVeiculo) {
				tempItems = tempItems.filter((item) => {
					return item.veiculo.toLowerCase().includes(this.filtraVeiculo.toLowerCase())
				})
			}

			return tempItems
		}
	},
	methods: {
		async carregarAbastecimentos() {
			const api = 'https://6113e54acba40600170c1ce3.mockapi.io/abastecimentos?sortBy=data&order=desc'

			this.items = await this.$http.get(api).then((response) => {
				return response.data
			})
		},
		formatarData(valor) {
			return new Date(valor).toLocaleDateString('pt-BR', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit'
			})
		}
	}
}

</script>
