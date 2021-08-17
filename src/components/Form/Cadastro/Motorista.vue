<template lang="pug">

formulate-form(
	:schema="schema"
	@submit="cadastrar"
	)

</template>

<script>

import schema from "../../../assets/formMotorista"

export default {
	data() {
		return {
			schema
		}
	},
	methods: {
		async cadastrar(data) {
			data['data_de_nascimento'] = Date.parse(data.data_de_nascimento)

			await this.$store.dispatch('cadastrarMotorista', data)
			.then(() => this.$router.push({ name: 'motorista' }))
		}
	}
}

</script>
