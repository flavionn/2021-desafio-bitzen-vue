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

import schema from "../../../json/formMotorista"

export default {
	data() {
		return {
			values: {},
			schema
		}
	},
	mounted() {
		this.$store.dispatch('carregarMotorista', this.$route.params.id)
		.then((response) => {
			this.values = this.$store.state.motorista.temp
		})
	},
	methods: {
		async editar(data) {
			data['data_de_nascimento'] = Date.parse(data.data_de_nascimento)

			await this.$store.dispatch('editarMotorista', data)
			.then(() => this.$router.push({ name: 'motorista' }))
		}
	}
}

</script>
