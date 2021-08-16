<template lang="pug">

page-container
	page-header
		icon-abastecimento(class="w-20 text-gray-300 mb-4")
		page-title Lista de abastecimentos
	lista-abastecimentos

</template>

<route lang="yaml">

meta:
  requerAutenticacao: true

</route>
