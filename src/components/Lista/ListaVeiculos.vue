<template lang="pug">

div
	tabela-container
		tabela-head
			tabela-cel Placa
			tabela-cel Marca
			tabela-cel
			tabela-cel
			tabela-cel
		tabela-body
			tabela-carregando(
				v-if="!items.length"
				colunas="5"
				)
			tr(
				v-else
				v-for="item in items"
				)
				tabela-cel {{ item.placa }}
				tabela-cel {{ item.marca }}
				tabela-cel(class="hover:(text-green-500 cursor-pointer) w-40")
					router-link(:to="{ name: 'veiculo-id-abastecimento', params: { id: item.id } }") Registrar abastecimento
				tabela-cel-editar(:to="{ name: 'veiculo-id-editar', params: { id: item.id } }")
				tabela-cel-excluir(@click.native="excluir(item.id)")

</template>

<script>

export default {
	mounted() {
		this.$store.dispatch('carregarVeiculos')
	},
	computed: {
		items() {
			return this.$store.state.veiculo.todos
		}
	},
	methods: {
		async excluir(id) {
			if(confirm('Deseja realmente excluir?')) {
				await this.$store.dispatch('excluirVeiculo', id)
			}
		}
	}
}

</script>
