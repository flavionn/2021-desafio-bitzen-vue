<template lang="pug">

formulate-form(
	:form-errors="formErrors"
	@submit="cadastrarMotorista"
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
					label: 'Nome',
					type: 'text',
					name: 'nome',
					help: 'Informe o nome completo do motorista',
					validation: 'required'
				},
				{
					label: 'CPF',
					type: 'text',
					name: 'cpf',
					help: 'Digite apenas números',
					validation: 'required'
				},
				{
					label: 'CNH',
					type: 'text',
					name: 'cnh',
					help: 'Digite apenas números',
					validation: 'required'
				},
				{
					label: 'Categoria CNH',
					type: 'checkbox',
					name: 'categoria_cnh',
					options: {
						a: 'A',
						b: 'B',
						c: 'C',
						d: 'D',
						e: 'E'
					},
					validation: 'required'
				},
				{
					label: 'Data de nascimento',
					type: 'date',
					name: 'data_de_nascimento',
					validation: 'required'
				},
				{
					label: 'Status',
					type: 'select',
					name: 'status',
					options: {
						ativo: 'Ativo',
						inativo: 'Inativo'
					},
					validation: 'required'
				},
				{
					label: 'Cadastrar motorista',
					type: 'submit'
				}
			]
		}
	},
	methods: {
		cadastrarMotorista(data) {
			const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas'

			this.$http.post(api, data).then((response) => {
				this.$router.push({ name: 'motorista' })
			})
		}
	}
}

</script>
