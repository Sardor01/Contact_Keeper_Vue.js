<template>
  <div
    class="modal fade"
    :id="dataTarget"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="text-danger" aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="modal-body">
            <div class="form-group">
              <label :for="text" class="col-form-label">{{ text }}:</label>
              <input
                required
                :type="type"
                class="form-control"
                :id="text"
                v-model="inputText"
                :placeholder="`Enter ${text}...`"
              />
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" class="btn btn-info" value="Save" />
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Modal",
    props: {
      dataTarget: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        inputText: "",
      };
    },
    methods: {
      handleSubmit() {
        this.$emit("add-input", this.inputText);

        this.inputText = "";
      },
    },
  };
</script>

<style></style>
