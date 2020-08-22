<template>
  <div class="card card-body mb-3">
    <h4>
      {{ contact.name }}
      <i
        @click="toggleInfo"
        class="fas fa-sort-down"
        style="cursor: pointer;"
      ></i>
      <i
        class="fas fa-times text-info"
        style="cursor: pointer; float: right;"
        @click="delContact"
      ></i>
      <router-link :to="`/contacts/${contact.id}`">
        <i class="fas fa-pencil-alt edit-pencil"></i>
      </router-link>
    </h4>
    <ul v-if="showContactInfo" class="list-group">
      <li
        :key="phone.id"
        v-for="phone in contact.phones"
        class="list-group-item"
      >
        Phone: {{ phone }}
      </li>
      <li
        :key="email.id"
        v-for="email in contact.emails"
        class="list-group-item"
      >
        Email: {{ email }}
      </li>
      <li
        :key="address.id"
        v-for="address in contact.addresses"
        class="list-group-item"
      >
        City: {{ address }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "ContactItem",
    props: {
      contact: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        showContactInfo: false,
      };
    },
    methods: {
      ...mapActions(["deleteContact"]),
      toggleInfo() {
        this.showContactInfo = !this.showContactInfo;
      },
      delContact() {
        this.deleteContact(this.contact.id);
      },
    },
  };
</script>

<style scoped>
  .edit-pencil {
    cursor: pointer;
    float: right;
    color: black;
    margin-right: 1rem;
  }
</style>
