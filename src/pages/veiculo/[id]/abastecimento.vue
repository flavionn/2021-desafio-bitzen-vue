<template lang="pug">

div(class="space-y-16")
	navback
	h2 Registrar abastecimento
	//- card-veiculo(
		:marca="item.marca"
		:fabricante="item.fabricante"
		:placa="item.placa"
		)
	form-registro-abastecimento

</template>

<script>

export default {
	data() {
		return {
			id: this.$route.params.id,
			item: [],
			marca: '',
			fabricante: '',
			placa: ''
		}
	},
	mounted() {
		const api = 'https://6113e54acba40600170c1ce3.mockapi.io/veiculos/' + this.id

		this.$http.get(api).then((response) => {
			this.item = response.data
		})
	}
}

</script>
