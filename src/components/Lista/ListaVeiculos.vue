<template lang="pug">

div
	loading-message(v-if="!items.length")
	tabela-container(v-else)
		tabela-head
			tabela-cel Placa
			tabela-cel Marca
			tabela-cel
			tabela-cel
			tabela-cel
		tabela-body
			tr(v-for="item in items")
				tabela-cel {{ item.placa }}
				tabela-cel {{ item.marca }}
				tabela-cel(class="hover:(text-green-500 cursor-pointer) w-40")
					router-link(:to="{ name: 'veiculo-id-abastecimento', params: { id: item.id } }") Registrar abastecimento
				tabela-cel-editar(:to="{ name: 'veiculo-id-editar', params: { id: item.id } }")
				tabela-cel-excluir(@click.native="excluir(item.id)")

</template>

<script>

export default {
	data() {
		return {
			items: []
		}
	},
	mounted() {
		const api = 'https://6113e54acba40600170c1ce3.mockapi.io/veiculos'

		this.$http.get(api).then((response) => {
			this.items = response.data
		})
	},
	methods: {
		excluir(id) {
			if(confirm('Deseja realmente excluir?')) {
				const api = 'https://6113e54acba40600170c1ce3.mockapi.io/veiculos/' + id

				this.$http.delete(api).then((response) => {
					this.$router.go(0)
				})
			}
		}
	}
}

</script>
