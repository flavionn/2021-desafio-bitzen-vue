<template lang="pug">

formulate-form(
	:form-errors="formErrors"
	:schema="schema"
	@submit="logar"
	)
	formulate-errors

</template>

<script>

export default {
	data() {
		return {
			formErrors: [],
			schema: [
				{
					label: 'E-mail',
					type: 'email',
					name: 'email',
					help: 'E-mail: teste@teste.com',
					validation: 'required|email'
				},
				{
					label: 'Senha',
					type: 'password',
					name: 'password',
					help: 'Senha: 123456',
					validation: 'required:trim|min:6,length'
				},
				{
					label: 'Entrar',
					type: 'submit'
				}
			]
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
