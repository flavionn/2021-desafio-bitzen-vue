<template lang="pug">

div(class="mb-12 space-y-4")
	div Você esta registrando o abastecimento para o veículo:
	div(class="bg-light-200 p-8 rounded-2xl")
		div(class="grid grid-cols-2 gap-4 sm:grid-cols-4")
			div(class="info")
				h4 Placa
				div(class="item") {{ item.placa }}
			div(class="info")
				h4 Marca
				div(class="item") {{ item.marca }}
			div(class="info")
				h4 Fabricação
				div(class="item") {{ item.ano_de_fabricacao }}
			div(class="info")
				h4 Cap. tanque
				div(class="item") {{ item.capacidade_tanque }}L

</template>

<script>

export default {
	data() {
		return {
			item: ''
		}
	},
	mounted() {
		this.$store.dispatch('carregarVeiculo', this.$route.params.id)
		.then((response) => {
			this.item = this.$store.state.veiculo.temp
		})
	}
}

</script>

<style lang="sass" scoped>

.info
	@apply space-y-1

h4
	@apply text-gray-400

.item
	@apply text-xl
	@apply leading-none

</style>
