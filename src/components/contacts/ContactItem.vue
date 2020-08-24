<template>
  <div v-if="contact.showCardList" class="card card-body mb-3">
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
      <li class="list-group-item">
        <strong>Phone(s):</strong>
        <span :key="index" v-for="(phone, index) in contact.phones">
          {{ phone
          }}<span
            v-if="
              contact.phones.length > 1 &&
              phone !== contact.phones[contact.phones.length - 1]
            "
            >,</span
          >
        </span>
      </li>
      <li class="list-group-item">
        <strong>Email(s):</strong>
        <span :key="index" v-for="(email, index) in contact.emails">
          {{ email
          }}<span
            v-if="
              contact.emails.length > 1 &&
              email !== contact.emails[contact.emails.length - 1]
            "
            >,</span
          >
        </span>
      </li>
      <li class="list-group-item">
        <strong>City(ies):</strong>
        <span :key="index" v-for="(address, index) in contact.addresses">
          {{ address
          }}<span
            v-if="
              contact.addresses.length > 1 &&
              address !== contact.addresses[contact.addresses.length - 1]
            "
            >,</span
          >
        </span>
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
