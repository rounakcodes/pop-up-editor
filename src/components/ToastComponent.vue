<template>
  <div v-if="showToast" class="toast">
    <font-awesome-icon icon="check-circle" class="icon" />
    {{ message }}
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle);

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      showToast: false,
      message: "",
    };
  },

  methods: {
    show(message) {
      this.message = message;
      this.showToast = true;
      setTimeout(() => {
        this.hide();
      }, 3000); // Adjust the timeout as needed
    },
    hide() {
      this.showToast = false;
      this.message = "";
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000; /* Green background color */
  color: white; /* White text color */
  padding: 16px; /* Padding */
  border-radius: 8px; /* Rounded corners */
  font-size: 1.2em; /* Larger font size */
  opacity: 0.9;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
}
</style>
