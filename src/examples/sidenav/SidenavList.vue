<template>
  <div>
    <ul>
      <li>
        <text-icon-item
          v-bind:collapse="false"
          collapseRef="dashboard"
          symbol="home"
          text="Dashboard"
          url="#"
          color="text-red"
        />
      </li>

      <li>
        <text-icon-item
          v-bind:collapse="false"
          collapseRef="billing"
          symbol="chart"
          text="Tables"
          url="#"
        />
      </li>
      <li>
        <text-icon-item
          v-bind:collapse="false"
          collapseRef="rtl"
          symbol="setting"
          text="RTL"
          url="#"
        />
      </li>
      <li class="mt-3 nav-item">
        <h6 :class="$store.state.isRTL ? 'me-4' : 'ms-2'">ACCOUNT PAGES</h6>
      </li>
      <li>
        <text-icon-item
          v-bind:collapse="false"
          collapseRef="profile"
          symbol="user"
          text="Profile"
          url="#"
        />
      </li>
      <li>
        <text-icon-item
          v-bind:collapse="false"
          collapseRef="sign-in"
          symbol="document"
          text="Sign In"
          url="#"
        />
      </li>
      <li>
        <text-icon-item
          v-bind:collapse="false"
          collapseRef="sign-up"
          symbol="rocket"
          text="Sign Up"
          url="#"
        />
      </li>
    </ul>
    <div class="">
      <div>
        <a :class="`bg-gradient-${this.$store.state.color}`" href="">Upgrade to pro</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TextIconItem from "@/components/TextIconItem.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    TextIconItem,
  },
};
</script>
