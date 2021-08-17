<template lang="pug">

page-container
	page-header
		page-title Página não encontrada
		page-description Que tal voltar para o&nbsp;
			span
				router-link(
					to="/"
					class="text-blue-600 hover:(text-blue-400)"
					) início
				span ?

</template>

<route lang="yaml">

meta:
  layout: 404

</route>
