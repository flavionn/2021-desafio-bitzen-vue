<template lang="pug">

nav(class="fixed bottom-0 inset-x-0 flex justify-center h-18 bg-light-200")

	router-link(to="/", exact)
		icon-home(class="w-5")
		div Home

	router-link(:to="{ name: 'motorista' }")
		icon-motorista(class="w-5")
		div Motorista

	router-link(:to="{ name: 'veiculo' }")
		icon-veiculo(class="w-5")
		div Veículo

	a(
		v-if="this.$store.state.usuario.logado"
		@click="deslogar"
		class="cursor-pointer hover:(text-red-500)"
		)
		icon-sair(class="w-5")
		div Sair

</template>

<script>

export default {
	methods: {
		async deslogar() {
			await this.$store
			.dispatch('deslogarUsuario')
			.then(() => this.$router.go(0))
		}
	}
}

</script>

<style lang="sass" scoped>

a
	@apply space-y-1
	@apply w-28
	@apply flex
	@apply flex-col
	@apply items-center
	@apply justify-center
	@apply text-center
	@apply text-sm
	@apply hover:bg-light-600

.router-link-active,
.router-link-exact-active
	@apply bg-light-600
	@apply text-blue-500

</style>
