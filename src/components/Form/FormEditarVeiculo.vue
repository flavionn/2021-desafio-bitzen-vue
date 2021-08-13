<template lang="pug">

div
	div(v-if="!Object.keys(values).length")
		div Carregando
	div(v-else)
		formulate-form(
			v-model="values"
			:form-errors="formErrors"
			@submit="editarVeiculo"
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
					type: 'text',
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
		const api = 'https://6113e54acba40600170c1ce3.mockapi.io/veiculos/' + this.id

		this.$http.get(api).then((response) => {
			this.values = response.data
		})
	},
	methods: {
		editarVeiculo(data) {
			const api = 'https://6113e54acba40600170c1ce3.mockapi.io/veiculos/' + this.id

			this.$http.put(api, data).then((response) => {
				this.$router.push({ name: 'veiculo' })
			})
		}
	}
}

</script>
