<template>
  <div id="app">
    <div class="main-container">
      <div class="element-list">
        <ElementList
          :elements="elements"
          :highlightedId="highlightedId"
          @highlight-element="highlightElement"
          @remove-element="removeElement"
          @update-content-text="updateContentText"
        />
      </div>
      <div class="editable-container">
        <div class="toolbar">
          <ToolbarComponent
            @add-element="addElement"
            @popup-color-selected="popupColorSelected"
          />
        </div>
        <div ref="popupContainerRef">
          <PopupComponent :popupBackgroundColor="popupBackgroundColor">
            <div
              id="dragContainer"
              ref="container"
              style="position: relative; width: 100%; height: 100%"
            >
              <draggable-editor
                v-for="element in elements"
                :key="element.id"
                :elementType="element.type"
                :elementContent="element.content"
                :elementSrc="element.src"
                :elementId="element.id"
                :elementStyle="element.style"
                :elementPlaceholder="element.placeholder"
                :highlighted="element.id === highlightedId"
                @highlight="highlightElement(element.id)"
                @remove="removeElement(element.id)"
                @drag-end="handleDragEnd"
                @highlightListItem="highlightListItem"
              />
            </div>
          </PopupComponent>
        </div>
        <div>
          <button class="preview save" @click="preview">Preview</button>
          <ModalComponent :isOpen="isModalOpen" @close="closeModal">
            <img v-if="modalContent" :src="modalContent" alt="Preview" />
          </ModalComponent>
          <button class="save" @click="saveElements">Save</button>
        </div>
      </div>
    </div>
  </div>
  <ToastComponent ref="toast" />
</template>

<script>
// vendor imports
import html2canvas from "html2canvas";

// component imports
import DraggableEditor from "@/components/DraggableEditor.vue";
import ToolbarComponent from "@/components/ToolbarComponent.vue";
import PopupComponent from "@/components/PopupComponent.vue";
import ElementList from "@/components/ElementList.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import ToastComponent from "@/components/ToastComponent.vue";

// util imports
import { getDisplayName } from "./utils/elements";

// config imports
import initialElements from "./config/elements";

export default {
  name: "App",
  components: {
    DraggableEditor,
    ElementList,
    ToolbarComponent,
    PopupComponent,
    ModalComponent,
    ToastComponent,
  },
  data() {
    return {
      elements: [],
      highlightedId: null,
      isModalOpen: false,
      modalContent: null,
      popupBackgroundColor: "#e17a5f",
    };
  },
  mounted() {
    // Use saved elements from localStorage if available
    this.retrieveElements();
  },
  methods: {
    handleDragEnd({ id, top, left }) {
      const index = this.elements.findIndex((element) => element.id === id);
      if (index !== -1) {
        this.elements[index].style.top = `${top}px`;
        this.elements[index].style.left = `${left}px`;
      }
    },
    saveElements() {
      const elementsString = JSON.stringify(this.elements);

      localStorage.setItem("savedElements", elementsString);

      this.showToast("Saved to local storage");
    },
    retrieveElements() {
      const savedElementsString = localStorage.getItem("savedElements");

      if (savedElementsString) {
        this.elements = JSON.parse(savedElementsString);
      } else {
        this.elements = initialElements;
      }
    },
    addElement({ elementType }) {
      const elementContent = getDisplayName(elementType);
      const elementId = this.elements[this.elements.length - 1]?.id + 1 || 1;
      let elementData = {
        id: elementId,
        type: elementType,
        content: elementContent,
        style: {},
      };

      if (elementType === "img") {
        elementData.src = require("@/assets/tabler_star-filled.png");
      }
      this.elements.push(elementData);
    },
    highlightElement(id) {
      this.highlightedId = id;
    },
    removeElement(elementId) {
      const index = this.elements.findIndex(
        (element) => element.id === elementId
      );

      if (index !== -1) {
        this.elements.splice(index, 1);
        this.highlightedId = null;
      }
    },
    preview() {
      const popupComponent = this.$refs.popupContainerRef;

      if (popupComponent) {
        // TODO: Fix text positioning bug https://github.com/niklasvh/html2canvas/issues/2775#issuecomment-1204988157
        html2canvas(popupComponent).then((canvas) => {
          this.modalContent = canvas.toDataURL("image/png");
          this.isModalOpen = true;
        });
      }
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalContent = null;
    },
    showToast(message) {
      this.$refs.toast.show(message);
    },
    highlightListItem({ elementId }) {
      this.highlightedId = elementId;
    },
    updateContentText({ value }) {
      this.elements = this.elements.map((element) => {
        if (element.id === this.highlightedId) {
          return { ...element, content: value };
        } else {
          return element;
        }
      });
    },
    popupColorSelected(color) {
      this.popupBackgroundColor = color;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.toolbar {
  margin-bottom: 50px;
  width: 500px;
  margin: 0 auto;
}
.main-container {
  display: flex;
}
.element-list {
  margin-right: 50px;
  width: 400px;
}
PopupComponent {
  margin: 0 auto;
}
#dragContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.save {
  font-size: max(2vw, 14px);
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  color: white;
  background: green;
  cursor: pointer;
  padding: 10px;
  margin: 0px 10px;
}
.preview {
  background: #0096c7;
}

@media (max-width: 600px) {
  .main-container {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .element-list {
    margin-right: 0;
    width: 100%;
  }
}
</style>
