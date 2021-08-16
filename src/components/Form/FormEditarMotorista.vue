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

export default {
	data() {
		return {
			values: {},
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
