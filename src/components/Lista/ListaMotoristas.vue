<template lang="pug">

div
	loading-message(v-if="!items.length")
	tabela-container(v-else)
		tabela-head
			tabela-cel Nome
			tabela-cel
			tabela-cel
		tabela-body
			tr(v-for="item in items")
				tabela-cel {{ item.nome }}
				tabela-cel-editar(:to="{ name: 'motorista-id-editar', params: { id: item.id } }")
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
		const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas'

		this.$http.get(api).then((response) => {
			this.items = response.data
		})
	},
	methods: {
		excluir(id) {
			if(confirm('Deseja realmente excluir?')) {
				const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas/' + id

				this.$http.delete(api).then((response) => {
					this.$router.go(0)
				})
			}
		}
	}
}

</script>
