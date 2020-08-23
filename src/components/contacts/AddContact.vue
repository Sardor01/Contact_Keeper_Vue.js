<template>
	<div class="container">
		<router-link to="/" class="btn btn-link text-info my-1">
			<h5><i class="fas fa-arrow-alt-circle-left"></i> Back to Dashboard</h5>
		</router-link>

		<div class="card my-2">
			<div class="card-header">Add Contact</div>
			<div class="card-body">
				<form @submit.prevent="handleSubmit">
					<div class="form-group">
						<label for="name">Name</label>
						<input
							required
							type="text"
							name="name"
							class="form-control form-control-lg"
							placeholder="Enter Name..."
							v-model="name"
						/>
					</div>
					<div class="form-group">
						<label for="email">Email(s):</label>
						<input
							required
							type="email"
							name="email"
							class="form-control form-control-lg"
							placeholder="Enter Email..."
							v-model="email"
						/>
					</div>
					<div class="form-group">
						<label for="phone">Phone(s):</label>
						<input
							required
							type="text"
							name="phone"
							class="form-control form-control-lg"
							placeholder="Enter Phone..."
							v-model="phone"
						/>
					</div>

					<div class="form-group">
						<label for="phone">City(ies):</label>
						<input
							required
							type="text"
							name="city"
							class="form-control form-control-lg"
							placeholder="Enter City..."
							v-model="city"
						/>
					</div>
					<input
						type="submit"
						value="Create Contact"
						class="btn btn-light btn-block"
					/>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
	name: 'AddContact',
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			city: '',
		};
	},
	methods: {
		...mapActions(['addContact']),
		handleSubmit() {
			const newContact = {
				id: uuidv4(),
				name: this.name,
				emails: [this.email],
				phones: [this.phone],
				addresses: [this.city],
			};

			this.addContact(newContact);
			this.$router.push({ path: '/' });
		},
	},
};
</script>

<style scoped>
.addInput {
	cursor: pointer;
}
</style>
