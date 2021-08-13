<template lang="pug">

div
	div(v-if="!Object.keys(values).length")
		div Carregando
	div(v-else)
		formulate-form(
			v-model="values"
			:form-errors="formErrors"
			@submit="editarMotorista"
			:schema="schema"
			)
			formulate-errors

</template>

<script>

export default {
	data() {
		return {
			id: this.$route.params.id,
			values: {},
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
					label: 'Editar motorista',
					type: 'submit'
				}
			]
		}
	},
	mounted() {
		const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas/' + this.id

		this.$http.get(api).then((response) => {
			this.values = response.data
		})
	},
	methods: {
		editarMotorista(data) {
			const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas/' + this.id

			this.$http.put(api, data).then((response) => {
				this.$router.push({ name: 'motorista' })
			})
		}
	}
}

</script>
