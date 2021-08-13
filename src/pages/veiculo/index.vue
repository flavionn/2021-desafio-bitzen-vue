<template lang="pug">

page-container
	page-header
		icon-veiculo(class="w-20 text-gray-300 rounded-2xl mb-4")
		page-title Gerenciamento de Veículos
		page-description Utilize esta área para gerenciar ou cadastrar novos veículos a frota.
	botao-cadastro(:to="{ name: 'veiculo-cadastrar'}") Cadastrar veículo
	lista-veiculos

</template>
