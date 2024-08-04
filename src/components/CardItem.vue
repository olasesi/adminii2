<template>
  <div :class="[defaultClass, customClass]" :style="inlineStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "bg-white", // Default background color
    },
    borderRadius: {
      type: String,
      default: "rounded-lg", // Default border radius
    },
    boxShadow: {
      type: String,
      default: "shadow-lg",
    },
    margin: {
      type: String,
      default: "m-2",
    },
    customClass: {
      type: [String, Object],
      default: "", // Default custom class
    },
    customStyle: {
      type: Object,
      default: () => ({}), // Default custom inline styles
    },
  },
  computed: {
    defaultClass() {
      return `${this.borderRadius} ${this.boxShadow} ${this.backgroundColor} ${this.margin}`; // Apply default border radius
    },

    inlineStyle() {
      return this.customStyle; // Apply custom inline styles
    },
  },
};
</script>

<style></style>
