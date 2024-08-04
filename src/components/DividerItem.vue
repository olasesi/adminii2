<template>
  <div :class="['fading-divider', orientation]"></div>
</template>

<script lang="ts">
export default {
  props: {
    orientation: {
      type: String,
      default: "horizontal", // Default orientation is horizontal
      validator: (value: string) => ["horizontal", "vertical"].includes(value), // Validate orientation prop
    },
  },
};
</script>

<style scoped>
.fading-divider {
  height: 1px; /* Set the height of the divider */
  width: 100%; /* Set the width of the divider */
  background: linear-gradient(
    to right,
    transparent,
    rgb(210, 210, 210),
    transparent
  ); /* Define a horizontal linear gradient */
}

.fading-divider.vertical {
  width: 1px; /* Set the width of the divider for vertical orientation */
  height: 100%; /* Set the height of the divider for vertical orientation */
  background: linear-gradient(
    to bottom,
    transparent,
    gray,
    transparent
  ); /* Define a vertical linear gradient */
}
</style>
