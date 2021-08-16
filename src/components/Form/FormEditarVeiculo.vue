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
					label: 'Placa',
					type: 'text',
					name: 'placa',
					validation: 'required'
				},
				{
					label: 'Marca do veículo',
					type: 'text',
					name: 'marca',
					validation: 'required'
				},
				{
					label: 'Fabricante',
					type: 'text',
					name: 'fabricante',
					validation: 'required'
				},
				{
					label: 'Ano de fabricação',
					type: 'number',
					name: 'ano_de_fabricacao',
					validation: 'required'
				},
				{
					label: 'Tipo de combustível',
					type: 'select',
					name: 'tipo_de_combustivel',
					options: {
						gasolina: 'Gasolina',
						alcool: 'Alcool',
						diesel: 'Diesel',
						gas_natural: 'Gás natural'
					},
					validation: 'required'
				},
				{
					label: 'Capacidade máxima do tanque',
					type: 'number',
					name: 'capacidade_tanque',
					help: 'Informe a quantidade em litros',
					validation: 'required'
				},
				{
					label: 'Observações',
					type: 'textarea',
					name: 'observacoes'
				},
				{
					label: 'Editar veículo',
					type: 'submit'
				}
			]
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
