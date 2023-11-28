<template>
  <div class="toolbox">
    <h3>Insert:</h3>
    <button @click="addElement('button')" class="tool-button">
      <font-awesome-icon icon="square" size="lg" class="rectangle" /> Button
    </button>
    <button @click="addElement('input')" class="tool-button">
      <font-awesome-icon icon="font" size="lg" /> Input
    </button>
    <button @click="addElement('img')" class="tool-button">
      <font-awesome-icon icon="image" size="lg" /> Image
    </button>
    <button @click="addElement('span')" class="tool-button">
      <font-awesome-icon icon="keyboard" size="lg" /> Text
    </button>
    <div>
      <button @click="changeBackgroundColor" class="tool-button">
        <font-awesome-icon icon="palette" size="lg"></font-awesome-icon>
      </button>
      <input
        v-if="changingBackgroundColor"
        class="tooltip"
        v-model="color"
        @blur="hide"
      />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquare,
  faFont,
  faImage,
  faKeyboard,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPalette, faSquare, faFont, faImage, faKeyboard);

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      color: "#e17a5f",
      changingBackgroundColor: false,
    };
  },
  methods: {
    addElement(elementType) {
      this.$emit("add-element", { elementType });
    },
    changeBackgroundColor() {
      if (this.changingBackgroundColor) {
        this.changingBackgroundColor = false;
        return undefined;
      }
      this.changingBackgroundColor = true;
      this.$emit("popup-color-selected", this.color);
    },
    hide(event) {
      this.changingBackgroundColor = false;
      this.color = event.target.value;
      this.$emit("popup-color-selected", this.color);
    },
  },
};
</script>

<style scoped>
.toolbox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid gray;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.tool-button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tool-button:hover {
  background-color: #45a049;
}

.tooltip {
  position: absolute;
  top: 140px;
  right: 10%;
  background-color: gray;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1;
}
.rectangle {
  margin: 0 5px;
  transform: scaleX(
    1.5
  );
}
</style>
