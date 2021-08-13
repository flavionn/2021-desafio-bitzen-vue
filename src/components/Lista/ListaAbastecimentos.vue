<template lang="pug">

div
	filtro-abastecimento(@atualizar="listaAbastecimentos")

	loading-message(v-if="!items.length")
	tabela-container(v-else)
		tabela-head
			tabela-cel Motorista
			tabela-cel Veículo
			tabela-cel Data
		tabela-body
			tr(v-for="item in items")
				tabela-cel {{ item.motorista }}
				tabela-cel {{ item.veiculo }}
				tabela-cel {{ item.data }}

</template>

<script>

export default {
	data() {
		return {
			items: []
		}
	},
	mounted() {
		const api = 'https://6113e54acba40600170c1ce3.mockapi.io/abastecimentos'

		this.$http.get(api).then((response) => {
			this.items = response.data
		})
	},
	methods: {
		listaAbastecimentos(data) {
			this.items = data
		}
	}
}

</script>
