<template>
  <div :class="`p-4 ${backgroundStyle.backgroundColor} ${backgroundStyle.backgroundImage}`">
    <div class="flex h-screen bg-transparent">
      <card-item v-if="showSidenav" :customClass="`pt-8 w-1/6 ${sidebarType}`">
        <sidenav />
      </card-item>

      <card-item customClass="flex-1 bg-transparent">
        <main>
          <!-- nav -->
          <navbar
            :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
            :color="isAbsolute ? 'text-white opacity-8' : ''"
            :minNav="navbarMinimize"
            v-if="showNavbar"
          />
          <router-view />
          <app-footer v-show="showFooter" />
          <configurator
            :toggle="toggleConfigurator"
            :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
          />
        </main>
      </card-item>
    </div>
  </div>
</template>
<script>
import BackgroundLight from "@/assets/img/BackgroundLight.png";
import BackgroundDark from "@/assets/img/BackgroundDark.png";
import Sidenav from "@/examples/sidenav/index.vue";
import Configurator from "@/examples/ConfiguratorComponent.vue";
import Navbar from "@/examples/NavbarComponent.vue";
import AppFooter from "@/examples/FooterComponent.vue";
import CardItem from "@/components/CardItem.vue";

import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return { BackgroundLight: BackgroundLight, BackgroundDark: BackgroundDark };
  },
  name: "App",
  components: {
    Sidenav,
    Configurator,
    Navbar,
    AppFooter,
    CardItem,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    ...mapState([
      "isRTL",
      "color",
      "isAbsolute",
      "isNavFixed",
      "navbarFixed",
      "absolute",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton",
      "isDarkMode",
      "sidebarType",
    ]),

    backgroundStyle() {
      return {
        backgroundColor: this.isDarkMode ? "bg-blue-950" : "bg-blue-500",
        backgroundImage: `url(${this.isDarkMode ? this.BackgroundDark : this.BackgroundLight})`,
        backgroundRepeat: "none",
        backgroundSize: "auto",
      };
    },
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";

    const sidenav = document.getElementsByClassName("sidenav-show")[0];

    if (window.innerWidth > 1200) {
      sidenav.classList.add("sidenav-pinned");
    }
  },
};
</script>

<style></style>
