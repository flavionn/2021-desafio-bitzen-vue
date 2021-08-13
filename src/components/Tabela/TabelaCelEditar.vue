<template lang="pug">

tabela-cel(class="hover:(text-blue-500 cursor-pointer) w-20")
	router-link(:to="to") Editar

</template>

<script>

export default {
	props: ['to']
}

</script>
