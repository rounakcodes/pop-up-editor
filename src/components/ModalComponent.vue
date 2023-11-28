<template>
  <div v-if="isOpen" class="modal-overlay slide-in" @click="closeModal">
    <div class="modal-container" @click.stop>
      <button class="close-button" @click="closeModal">&times;</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-overlay {
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  transition: opacity 2s ease-in-out, transform 2s ease-in-out, visibility 0s 0.5s;
}

.modal-overlay.slide-in {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: opacity 2s ease-in-out, transform 2s ease-in-out, visibility 0s;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
  border: none;
  background: none;
  color: #333;
}

</style>
