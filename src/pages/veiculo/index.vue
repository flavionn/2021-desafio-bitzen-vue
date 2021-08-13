<template lang="pug">

div(class="space-y-4")
	h2 Veículos cadastrados
	p(class="text-gray-500") Lista com todos os veículos cadastrados até o momento
	router-link(
		:to="{ name: 'veiculo-cadastrar'}"
		class="bg-green-500 p-4 rounded-2xl inline-block text-white text-sm hover:(opacity-60)"
		) Cadastrar veículo

	lista-veiculos

</template>
