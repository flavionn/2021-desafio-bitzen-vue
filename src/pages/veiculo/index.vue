<template lang="pug">

page-container
	page-header
		page-title Gerenciamento de Veículos
		page-description Utilize esta área para gerenciar ou cadastrar novos veículos a frota.
	botao-cadastro(:to="{ name: 'veiculo-cadastrar'}") Cadastrar veículo
	lista-veiculos

</template>
