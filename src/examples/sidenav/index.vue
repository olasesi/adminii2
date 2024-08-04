<template>
  <aside>
    <div class="pb-6">
      <a href="/">
        <img :src="isDarkMode ? logoDark : logo" alt="main_logo" class="mx-auto" />
      </a>
    </div>

    <divider-item />

    <box-item customClass="mt-6 w-full"><sidenav-list /></box-item>
  </aside>
</template>
<script lang="ts">
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/Logo.png";
import logoDark from "@/assets/img/Logodark.png";
import DividerItem from "@/components/DividerItem.vue";
import BoxItem from "@/components/BoxItem.vue";

import { mapState } from "vuex";

export default {
  name: "IndexPage",
  components: {
    SidenavList,
    DividerItem,
    BoxItem,
  },
  data() {
    return {
      logo,
      logoDark,
    };
  },
  computed: {
    ...mapState(["sidebarType", "isDarkMode"]),
  },
};
</script>
