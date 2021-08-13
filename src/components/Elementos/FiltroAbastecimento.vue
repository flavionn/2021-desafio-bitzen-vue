<template lang="pug">

div
	div(class="flex space-x-2 mb-4")

		formulate-input(
			class="flex-1"
			placeholder="Motorista"
			type="text"
			@input="filtrarResultado"
			)

		formulate-input(
			class="flex-1"
			placeholder="Veículo"
			type="text"
			@input="filtrarResultado"
			)

</template>

<script>

export default {
	methods: {
		filtrarResultado(data) {
			const api = 'https://6113e54acba40600170c1ce3.mockapi.io/abastecimentos?filter=' + data

			setTimeout(() => {
				this.$http.get(api).then((response) => {
					this.$emit('atualizar', response.data)
				})
			}, 1000)
		}
	}
}

</script>
