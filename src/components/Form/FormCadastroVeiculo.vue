<template lang="pug">

formulate-form(
	:form-errors="formErrors"
	@submit="cadastrarVeiculo"
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
					label: 'Cadastrar veículo',
					type: 'submit'
				}
			]
		}
	},
	methods: {
		cadastrarVeiculo(data) {
			const api = 'https://6113e54acba40600170c1ce3.mockapi.io/veiculos'

			this.$http.post(api, data).then((response) => {
				this.$router.push({ name: 'veiculo' })
			})
		}
	}
}

</script>
