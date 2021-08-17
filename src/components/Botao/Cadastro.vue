<template lang="pug">

router-link(
	:to="to"
	class="border border-blue-500 p-4 rounded-full inline-block text-blue-600 text-sm hover:(bg-blue-500 text-white)"
	)
	slot

</template>

<script>

export default {
	props: ['to']
}

</script>
