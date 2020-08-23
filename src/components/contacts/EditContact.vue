<template>
  <div class="container">
    <router-link to="/" class="btn btn-link text-info my-1">
      <h5><i class="fas fa-arrow-alt-circle-left"></i> Back to Dashboard</h5>
    </router-link>

    <div class="card my-2">
      <div class="card-header">Edit Contact</div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              class="form-control form-control-lg"
              :placeholder="contact.name"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email(s):</label>
            <i
              class="fa fa-plus float-right text-info addInput"
              title="Add Email"
              data-toggle="modal"
              data-target="#emailModal"
            ></i>
            <Modal
              dataTarget="emailModal"
              text="Email"
              type="email"
              @add-input="addNewEmail"
            />
            <div
              :key="index"
              v-for="(email, index) in contact.emails"
              class="position-relative changingInput"
            >
              <input
                type="email"
                name="email"
                class="form-control form-control-lg mb-3"
                :placeholder="email"
                v-model="user.emails[index]"
              />
              <span class="inputDelete" @click="delEmail(index)">
                <i class="fas fa-minus-square"></i>
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Phone(s):</label>
            <i
              class="fa fa-plus float-right text-info addInput"
              title="Add Phone"
              data-toggle="modal"
              data-target="#phoneModal"
            ></i>
            <Modal
              dataTarget="phoneModal"
              text="Phone"
              type="text"
              @add-input="addNewPhone"
            />
            <div
              :key="index"
              v-for="(phone, index) in contact.phones"
              class="position-relative changingInput"
            >
              <input
                type="text"
                name="phone"
                class="form-control form-control-lg mb-3"
                :placeholder="phone"
                v-model="user.phones[index]"
              />
              <span class="inputDelete" @click="delPhone(index)">
                <i class="fas fa-minus-square"></i>
              </span>
            </div>
          </div>

          <div class="form-group">
            <label for="phone">City(ies):</label>
            <i
              class="fa fa-plus float-right text-info addInput"
              title="Add Location"
              data-toggle="modal"
              data-target="#locationModal"
            ></i>
            <Modal
              dataTarget="locationModal"
              text="City"
              type="text"
              @add-input="addNewLocation"
            />
            <div
              :key="index"
              v-for="(address, index) in contact.addresses"
              class="position-relative changingInput"
            >
              <input
                type="text"
                name="address"
                class="form-control form-control-lg mb-3"
                :placeholder="address"
                v-model="user.location[index]"
              />
              <span class="inputDelete" @click="delLocation(index)">
                <i class="fas fa-minus-square"></i>
              </span>
            </div>
          </div>
          <input
            type="submit"
            value="Update Contact"
            class="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  import Modal from "../layout/Modal";

  export default {
    name: "EditContact",
    components: {
      Modal,
    },
    data() {
      return {
        id: this.$route.params.id,
        name: "",
        user: {
          emails: [],
          phones: [],
          location: [],
        },
      };
    },
    computed: mapGetters(["contact"]),
    methods: {
      ...mapActions([
        "fetchContact",
        "updateContact",
        "clearContact",
        "addEmail",
        "addPhone",
        "addLocation",
        "setId",
        "deleteEmail",
        "deletePhone",
        "deleteLocation",
      ]),

      handleSubmit() {
        if (this.name === "") {
          this.name = this.contact.name;
        }
        if (this.user.emails.length === 0) {
          this.user.emails = this.contact.emails;
        }
        if (this.user.phones.length === 0) {
          this.user.phones = this.contact.phones;
        }
        if (this.user.location.length === 0) {
          this.user.location = this.contact.addresses;
        }
        const updContact = {
          id: this.contact.id,
          name: this.name,
          emails: [...this.user.emails],
          phones: [...this.user.phones],
          addresses: [...this.user.location],
        };

        this.updateContact(updContact);
        this.$router.push({ path: "/" });
      },

      addNewEmail(email) {
        this.addEmail(email);
      },
      addNewPhone(phone) {
        this.addPhone(phone);
      },
      addNewLocation(city) {
        this.addLocation(city);
      },

      delEmail(index) {
        this.deleteEmail(index);
      },
      delPhone(index) {
        this.deletePhone(index);
      },
      delLocation(index) {
        this.deleteLocation(index);
      },
    },
    created() {
      this.fetchContact(this.id);
      this.setId(this.id);
    },
    destroyed() {
      this.clearContact();
      this.setId("");
    },
  };
</script>

<style scoped>
  .addInput {
    cursor: pointer;
  }

  .inputDelete {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(0, -50%);
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    cursor: pointer;
    color: #5bc0de;
    font-weight: 900;
    text-align: center;
    border-radius: 50%;
    display: none;
  }

  .changingInput:hover .inputDelete {
    display: inline;
  }
</style>
