<template lang="pug">

div
	div(v-if="!items.length")
		div Carregando
	div(v-else)
		div(class="overflow-x-auto")
			table(class="w-full")
				thead
					tr(class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600")
						th(class="px-4 py-3") Motorista
						th(class="px-4 py-3") Veículo
						th(class="px-4 py-3") Data
						th(class="px-4 py-3") Quantidade abastecida
				tbody(class="bg-white")
					template(v-for="item in items")
						tr(class="text-gray-700 text-sm")
							td(class="px-4 py-3 border") {{ item.motorista }}
							td(class="px-4 py-3 border") {{ item.veiculo }}
							td(class="px-4 py-3 border") {{ item.data }}
							td(class="px-4 py-3 border") {{ item.quantidade_abastecida }}

</template>

<script>

export default {
	data() {
		return {
			items: []
		}
	},
	mounted() {
		const api = 'https://6113e54acba40600170c1ce3.mockapi.io/abastecimentos'

		this.$http.get(api).then((response) => {
			this.items = response.data
		})
	}
}

</script>
