<template lang="pug">

tr
	tabela-cel(:colspan="colunas")
		loading-message

</template>

<script>

export default {
	props: ['colunas']
}

</script>