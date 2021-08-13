<template lang="pug">

nav(class="fixed bottom-0 inset-x-0 flex justify-center h-16 bg-gray-50")
	template(v-for="item in items")
		router-link(:to="item.url")
			icon-home(class="w-4")
			div {{ item.label }}

</template>

<script>

export default {
	data() {
		return {
			items: [
				{
					label: 'Home',
					url: '/'
				},
				{
					label: 'Motorista',
					url: '/motorista'
				},
				{
					label: 'Veículo',
					url: '/veiculo'
				}
			]
		}
	}
}

</script>

<style lang="sass" scoped>

a
	@apply space-y-1
	@apply font-medium
	@apply w-24
	@apply flex
	@apply flex-col
	@apply items-center
	@apply justify-center
	@apply text-center
	@apply text-xs

</style>
