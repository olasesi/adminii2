<template>
  <div :class="textClass" :style="customStyle">
    <div><icon-item :symbol="symbol" :color="iconColor" /></div>
    <div>
      <text-item :customStyle="spacingClass">
        {{ text }}
      </text-item>
    </div>
  </div>
</template>
<script lang="ts">
import IconItem from "@/components/IconItem.vue";
import TextItem from "@/components/TextItem.vue";

export default {
  name: "TextIconItem",
  components: { IconItem, TextItem },
  props: {
    symbol: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    iconSize: {
      type: [Number, String],
      default: 32,
    },
    iconColor: {
      type: String,
      default: "#3182CE",
    },
    TextColor: {
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
    customClass: {
      type: String,
      default: "", // Default custom inline styles
    },
    spacingClass: {
      type: String,
      default: "ml-6", // Default custom inline styles
    },
    collapseRef: {
      type: String,
      required: true,
    },
  },

  computed: {
    textClass() {
      return `flex items-center ${this.textColor} ${this.fontSize} ${this.fontWeight} ${this.lineHeight} ${this.customClass}`;
    },
  },
};
</script>

<style></style>
