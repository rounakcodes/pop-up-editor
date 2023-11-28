<template>
  <div class="wrapper">
    <ul>
      <h3 class="heading">Element List</h3>
      <li
        v-for="element in elements"
        :key="element.id"
        @click="highlightElement(element.id)"
        :ref="`elementListItem_${element.id}`"
        :class="{ highlighted: highlightedId === element.id }"
      >
        <div class="card">
          <font-awesome-icon
            :icon="getIcon(element.type)"
            :style="{ color: 'green' }"
            :class="{ 'rectangle-icon': isRectangle(element.type) }"
            size="xl"
          />
          <h3>{{ element.id + ". " + getElementDisplayName(element.type) }}</h3>
          <button @click.stop="removeElement(element.id)" class="remove-button">
            <font-awesome-icon icon="trash-alt" size="sm" />
          </button>
        </div>
        <div v-if="highlightedId === element.id" class="form-section">
          <div class="form-row">
            <input
              placeholder="Text"
              type="text"
              id="contentText"
              v-model="contentTextLocalValue"
            />

            <button class="save" @click="updateContentText">Save</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faSquare,
  faImage,
  faFont,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt, faSquare, faImage, faFont, faKeyboard);

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      // Use a local variable to store the modified value
      contentTextLocalValue:
        this.elements.find((element) => element.id === this.highlightedId)
          ?.content || "",
    };
  },
  props: {
    elements: Array,
    highlightedId: Number,
  },
  methods: {
    updateContentText() {
      this.$emit("update-content-text", { value: this.contentTextLocalValue });
    },
    getElementDisplayName(type) {
      switch (type) {
        case "button":
          return "Button";
        case "img":
          return "Image";
        case "span":
          return "Text";
        case "input":
          return "Input";
        default:
          return type;
      }
    },
    getIcon(type) {
      switch (type) {
        case "button":
          return "square";
        case "img":
          return "image";
        case "span":
          return "keyboard";
        case "input":
          return "font";
        default:
          return "question";
      }
    },

    highlightElement(id) {
      this.$emit("highlight-element", id);
    },
    isRectangle(type) {
      return type === "button";
    },
    removeElement(id) {
      this.$emit("remove-element", id);
    },
  },
  watch: {
    highlightedId: {
      immediate: true,
      handler(newVal) {
        this.contentTextLocalValue =
          this.elements.find((element) => element.id === newVal)?.content || "";
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-height: 600px;
  overflow-y: auto;
  padding: 10px;
  border: 2px solid gray;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.wrapper::-webkit-scrollbar {
  width: 5px; /* Adjust the width of the scrollbar */
}

.wrapper::-webkit-scrollbar-thumb {
  background-color: #888; /* Color of the scrollbar thumb */
  border-radius: 5px; /* Rounded corners of the thumb */
}
.heading {
  position: sticky;
  background-color: #ffffff;
  top: 0;
  margin-bottom: 20px;
}
ul {
  padding: 0px;
}
li {
  cursor: pointer;
  margin-bottom: 10px;
  list-style-type: none;
}

li:hover {
  background-color: #f2f2f2;
}
.form-section {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.form-row {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-around;
}
.card {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
img {
  width: 100%;
  height: auto;
}
h3 {
  margin: 0;
  font-size: 1.2em;
}
button {
  cursor: pointer;
}
.remove-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ff4444; /* Red color */
  font-size: 1.5em;
}
.rectangle-icon {
  margin-left: 5px;
  transform: scaleX(1.5);
}
.remove-button:hover {
  transform: scale(1.2);
}
.highlighted {
  background: pink;
}
input {
  font-size: 12px;
}
.save {
  cursor: pointer;
  border: none;
  color: #fff;
  margin-top: 5px;
  font-size: 16px;
  background: green;
}
</style>
