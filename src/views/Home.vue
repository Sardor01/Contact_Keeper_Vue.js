<template>
	<div class="my-2 container">
		<Contacts />
		<router-link to="/contact/add">
			<i class="fas fa-plus-circle fa-3x add text-info"></i>
		</router-link>
	</div>
</template>

<script>
// @ is an alias to /src
import Contacts from '../components/contacts/Contacts';

export default {
	name: 'Home',
	components: {
		Contacts,
	},
};
</script>

<style scoped>
.add {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	cursor: pointer;
}

.add:hover {
	opacity: 0.75;
}
</style>
