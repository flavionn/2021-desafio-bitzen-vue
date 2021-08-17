<template lang="pug">

div
	loading-message(v-if="!Object.keys(values).length")
	div(v-else)
		formulate-form(
			:schema="schema"
			@submit="editar"
			v-model="values"
			)

</template>

<script>

import schema from "../../../assets/formVeiculo"

export default {
	data() {
		return {
			values: {},
			schema
		}
	},
	mounted() {
		this.$store.dispatch('carregarVeiculo', this.$route.params.id)
		.then((response) => {
			this.values = this.$store.state.veiculo.temp
		})
	},
	methods: {
		async editar(data) {
			await this.$store.dispatch('editarVeiculo', data)
			.then(() => this.$router.push({ name: 'veiculo' }))
		}
	}
}

</script>
