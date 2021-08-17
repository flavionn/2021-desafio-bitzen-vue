<template lang="pug">

formulate-form(
	:form-errors="formErrors"
	:schema="schema"
	@submit="logar"
	)
	formulate-errors

</template>

<script>

import schema from "../../assets/json/formLogin"

export default {
	data() {
		return {
			formErrors: [],
			schema
		}
	},
	methods: {
		async logar(data) {
			this.formErrors = []

			await this.$store.dispatch('logarUsuario', data)
			.then(() => this.$router.replace(this.$route.query.redirect || '/'))
			.catch(error => this.formErrors = [error])
		}
	}
}

</script>
