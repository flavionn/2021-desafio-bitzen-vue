<template lang="pug">

div
	tabela-container
		tabela-head
			tabela-cel Nome
			tabela-cel
			tabela-cel
		tabela-body
			tabela-carregando(
				v-if="!items.length"
				colunas="3"
				)
			tr(
				v-else
				v-for="item in items"
				)
				tabela-cel {{ item.nome }}
				tabela-cel-editar(:to="{ name: 'motorista-id-editar', params: { id: item.id } }")
				tabela-cel-excluir(@click.native="excluir(item.id)")

</template>

<script>

export default {
	mounted() {
		this.$store.dispatch('carregarMotoristas')
	},
	computed: {
		items() {
			return this.$store.state.motorista.todos
		}
	},
	methods: {
		async excluir(id) {
			if(confirm('Deseja realmente excluir?')) {
				await this.$store.dispatch('excluirMotorista', id)
			}
		}
	}
}

</script>
