<template lang="pug">

div(class="bg-gray-50 p-6 rounded-xl")
	div(class="font-medium") Informações do veículo
	div(class="") Marca: {{ marca }}
	div(class="") Fabricante: {{ fabricante }}
	div(class="") Placa: {{ placa }}

</template>

<script>

export default {
	props: {
		marca: String,
		fabricante: String,
		placa: String
	}
}

</script>
