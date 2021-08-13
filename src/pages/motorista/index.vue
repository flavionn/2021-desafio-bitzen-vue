<template lang="pug">

page-container
	page-header
		page-title Gerenciamento de Motoristas
		page-description Utilize esta área para gerenciar ou cadastrar novos motoristas.
	botao-cadastro(:to="{ name: 'motorista-cadastrar'}") Cadastrar motorista
	lista-motoristas

</template>
