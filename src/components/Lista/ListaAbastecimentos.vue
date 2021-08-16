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

	tabela-container
		tabela-head
			tabela-cel Motorista
			tabela-cel Veículo
			tabela-cel Data
		tabela-body
			tabela-carregando(
				v-if="!items.length"
				colunas="3"
				)
			template(v-else)
				tr(v-if="!itemsFiltrados.length")
					tabela-cel(colspan="3") Nenhum item encontrado
				tr(
					v-else
					v-for="item in itemsFiltrados"
					)
					tabela-cel {{ item.motorista }}
					tabela-cel {{ item.veiculo }}
					tabela-cel {{ formatarData(item.data) }}

</template>

<script>

export default {
	data() {
		return {
			filtraMotorista: '',
			filtraVeiculo: ''
		}
	},
	mounted() {
		this.$store.dispatch('carregarAbastecimentos')
	},
	computed: {
		items() {
			return this.$store.state.abastecimento.todos
		},
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
