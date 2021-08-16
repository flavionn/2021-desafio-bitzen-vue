<template lang="pug">

formulate-form(
	:schema="schema"
	@submit="cadastrar"
	)

</template>

<script>

export default {
	data() {
		return {
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
					label: 'Cadastrar veículo',
					type: 'submit'
				}
			]
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
