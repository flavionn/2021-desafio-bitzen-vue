<template lang="pug">

div
	div(v-if="!items.length")
		div Carregando
	div(v-else)
		div(class="overflow-x-auto")
			table(class="w-full")
				thead
					tr(class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600")
						th(class="px-4 py-3") Nome
						th(class="px-4 py-3") CPF
						th(class="px-4 py-3")
						th(class="px-4 py-3")
				tbody(class="bg-white")
					template(v-for="item in items")
						tr(class="text-gray-700 text-sm")
							td(class="px-4 py-3 border") {{ item.nome }}
							td(class="px-4 py-3 border") {{ item.cpf }}
							td(class="px-4 py-3 border")
								router-link(:to="{ name: 'motorista-id-editar', params: { id: item.id } }") Editar
							td(class="px-4 py-3 border")
								div(@click="excluir(item.id)", class="cursor-pointer") Excluir

</template>

<script>

export default {
	data() {
		return {
			items: []
		}
	},
	mounted() {
		const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas'

		this.$http.get(api).then((response) => {
			this.items = response.data
		})
	},
	methods: {
		excluir(id) {
			if(confirm('Deseja realmente excluir?')) {
				const api = 'https://6113e54acba40600170c1ce3.mockapi.io/motoristas/' + id

				this.$http.delete(api).then((response) => {
					console.log(response)
				})
			}
		}
	}
}

</script>
