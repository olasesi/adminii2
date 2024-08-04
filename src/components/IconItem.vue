<template>
  <svg
    :width="size"
    :height="size"
    :class="customClass"
    :style="customStyle"
    viewBox="-4 -4 24 24"
    :fill="color"
  >
    <use :xlink:href="`/icons/icons.svg#${symbol}`"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: "IconItem",
  props: {
    symbol: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 32,
    },
    customClass: {
      type: String,
      default: "",
    },
    customStyle: {
      type: Object,
      default: () => ({}),
    },
    color: {
      type: String,
      default: "#3182CE",
    },
  },
};
</script>

<style scoped></style>
