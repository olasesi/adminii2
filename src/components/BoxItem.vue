<template>
  <div :class="defaultClass" :style="inlineStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    customClass: {
      type: String,
      default: "",
    },
    customStyle: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    defaultClass() {
      return this.customClass;
    },
    inlineStyle() {
      return this.customStyle;
    },
  },
};
</script>

<style></style>
