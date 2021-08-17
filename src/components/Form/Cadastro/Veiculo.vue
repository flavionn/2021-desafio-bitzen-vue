<template lang="pug">

formulate-form(
	:schema="schema"
	@submit="cadastrar"
	)

</template>

<script>

import schema from "../../../json/formVeiculo"

export default {
	data() {
		return {
			schema
		}
	},
	methods: {
		async cadastrar(data) {
			await this.$store.dispatch('cadastrarVeiculo', data)
			.then(() => this.$router.push({ name: 'veiculo' }))
		}
	}
}

</script>
