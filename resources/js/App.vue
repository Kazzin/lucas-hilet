<style lang="scss" scoped>
</style>

<template>
	<div>
		<router-view></router-view>
		<Navbar/>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
	components: {
		Navbar
	}
};
</script>
