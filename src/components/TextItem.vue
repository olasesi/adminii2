<template>
  <div :class="textClass" :style="customStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "TextItem",
  props: {
    textColor: {
      type: String,
      default: "black",
    },
    fontSize: {
      type: String,
      default: "16px",
    },
    fontWeight: {
      type: String,
      default: "normal",
    },
    lineHeight: {
      type: String,
      default: "normal",
    },
    customStyle: {
      type: Object,
      default: () => ({}), // Default custom inline styles
    },
  },
  computed: {
    textClass() {
      return `${this.textColor} ${this.fontSize} ${this.fontWeight} ${this.lineHeight}`;
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
