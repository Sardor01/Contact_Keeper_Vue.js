<template>
	<div>
		<h1 class="display-4 mb-2"><span class="text-info">Contact</span> List</h1>
		<ContactItem
			:key="contact.id"
			v-for="contact in allContacts"
			:contact="contact"
		/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import ContactItem from './ContactItem';

export default {
	name: 'Contacts',
	components: {
		ContactItem,
	},
	computed: mapGetters(['allContacts']),
	methods: {
		...mapActions(['fetchContacts']),
	},
};
</script>

<style></style>
