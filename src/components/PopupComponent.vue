<template>
  <div class="popup-container">
    <div
      class="circle-container"
      :style="{ backgroundColor: popupBackgroundColor }"
    >
      <div class="ring"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  props: {
    popupBackgroundColor: String,
  },
};
</script>

<style scoped>
.popup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.circle-container {
  min-width: 400px;
  min-height: 400px;
  position: relative;
  width: 80vw;
  height: 80vw;
  max-width: 700px;
  max-height: 700px;
  border-radius: 50%;
}

.ring {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  position: absolute;
  top: 10px;
  left: 10px;
  border: 10px solid white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 600px) {
  .popup-container {
    height: 600px;
    padding: 0px;
    margin: 0px;
  }
}
</style>
