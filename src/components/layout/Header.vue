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
            <li
              @click="homeClicked"
              class="nav-item"
              :class="{ active: homeActive }"
            >
              <router-link class="nav-link" to="/">
                <i class="fas fa-home" /> Home
              </router-link>
            </li>
            <li
              @click="aboutClicked"
              class="nav-item"
              :class="{ active: aboutActive }"
            >
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
    name: "Header",
    data() {
      return {
        aboutActive: false,
        homeActive: true,
      };
    },
    methods: {
      aboutClicked() {
        this.aboutActive = true;
        this.homeActive = false;
      },
      homeClicked() {
        this.homeActive = true;
        this.aboutActive = false;
      },
    },
  };
</script>

<style></style>
