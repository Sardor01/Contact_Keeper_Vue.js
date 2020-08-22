<template>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark bg-info">
			<div class="container">
				<router-link class="navbar-brand" to="/">
					<i class="fa fa-address-book"></i> Contact Keeper
				</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<router-link class="nav-link" to="/">
								<i class="fas fa-home" /> Home
							</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/about">
								<i class="fas fa-question" /> About
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style></style>
