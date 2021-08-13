<template lang="pug">

formulate-form(
	:form-errors="formErrors"
	@submit=""
	:schema="schema"
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
					validation: 'required|email'
				},
				{
					label: 'Senha',
					type: 'password',
					name: 'password',
					validation: 'required:trim|min:6,length'
				},
				{
					label: 'Entrar',
					type: 'submit'
				}
			]
		}
	}
}

</script>
