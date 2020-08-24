<template>
  <div class="mt-3 mb-5">
    <input
      type="text"
      class="form-control form-control-lg"
      placeholder="Search Contacts..."
      v-model="searchTerm"
      @input="filtrContacts"
    />
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "SearchContact",
    data() {
      return {
        searchTerm: "",
      };
    },
    methods: {
      ...mapActions(["filterContacts"]),

      filtrContacts() {
        this.filterContacts(this.searchTerm);
      },
    },
  };
</script>

<style>
</style>