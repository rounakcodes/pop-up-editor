<template>
  <div>
    <component
      :is="elementType"
      v-on:mousedown="handleMouseDown"
      v-bind:style="{
        left: elementPosition.x + 'px',
        top: elementPosition.y + 'px',
        ...elementStyle,
      }"
      :class="{ highlighted: highlighted }"
      :src="elementSrc"
      :placeholder="elementPlaceholder"
      ref="editableElement"
      @click="highlightListItem"
    >
      {{ elementContent }}
    </component>
  </div>
</template>

<script>
export default {
  props: {
    elementId: {
      type: Number,
      required: true,
    },
    elementType: {
      type: String,
      default: "button",
    },
    elementPlaceholder: {
      type: String,
      default: "E-mail",
    },
    elementContent: {
      type: String,
      default: "Drag me!",
    },
    elementSrc: {
      type: String,
    },
    elementStyle: {
      type: Object,
    },
    highlighted: Boolean,
  },
  data() {
    return {
      isDragging: false,
      isEditing: false,
      elementPosition: { x: 0, y: 0 },
      initialMouseOffset: { x: 0, y: 0 },
      clickThreshold: 200,
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.drag);
    document.addEventListener("mouseup", this.stopDrag);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.drag);
    document.removeEventListener("mouseup", this.stopDrag);
  },
  methods: {
    highlightListItem() {
      this.$emit("highlightListItem", { elementId: this.elementId });
    },
    handleMouseDown(event) {
      if (event.target.tagName.toLowerCase() === "img") {
        event.preventDefault();
      }
      // Prevent drag if the mouse moves too much
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
      this.isDragging = false;
      this.startCoordinates = { x: event.clientX, y: event.clientY };

      // Set a timeout to check for dragging after a certain time
      this.dragTimeout = setTimeout(() => {
        this.isDragging = true;
        this.startDrag(event);
      }, this.clickThreshold);
    },
    handleMouseMove(event) {
      if (this.isDragging) {
        this.drag(event);
      }
    },
    handleMouseUp() {
      clearTimeout(this.dragTimeout);

      this.isDragging = false;
    },
    startDrag(event) {
      this.isDragging = true;

      // Use getComputedStyle to get the computed style, which includes positioning information
      const computedStyle = window.getComputedStyle(this.$refs.editableElement);

      this.initialMouseOffset = {
        x: parseFloat(computedStyle.getPropertyValue("left")) || 0,
        y: parseFloat(computedStyle.getPropertyValue("top")) || 0,
      };

      // Adjust the initial offset based on the mouse position
      this.initialMouseOffset.x = event.clientX - this.initialMouseOffset.x;
      this.initialMouseOffset.y = event.clientY - this.initialMouseOffset.y;
    },
    dragEnd() {
      this.$emit("drag-end", {
        id: this.elementId,
        top: this.elementPosition.y,
        left: this.elementPosition.x,
      });
    },
    drag(event) {
      if (this.isDragging) {
        const newX = event.clientX - this.initialMouseOffset.x;
        const newY = event.clientY - this.initialMouseOffset.y;
        this.elementPosition = {
          x: newX,
          y: newY,
        };
      }
    },
    stopDrag() {
      if (this.isDragging) {
        this.isDragging = false;
        this.dragEnd();
      }
    },
  },
};
</script>

<style scoped>
button,
input,
img,
span {
  position: absolute;
  padding: 10px;
}
.highlighted {
  outline: 2px dashed pink;
}

@media screen and (max-width: 600px) {
  span {
    font-size: 16px !important;
  }
}
</style>
