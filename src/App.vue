<template>
  <div id="app">
    <ovl-navbar class="navbar" />
    <router-view class="router-view" />
    <notifications group="ovl-notification-center" position="top center" />
    <!-- <ovl-footer class="footer" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OvlNavbar from "@/components/OvlNavbar.vue";
import OvlFooter from "@/components/OvlFooter.vue";

@Component({
  components: {
    OvlNavbar,
    OvlFooter
  }
})
export default class Home extends Vue {}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}

.navbar {
  margin: var(--spacing-md);
}

.footer {
  margin: var(--spacing-xl) var(--spacing-md) var(--spacing-md)
    var(--spacing-md);
}

@media (min-width: 768px) {
  #app {
    max-width: 1200px;
  }

  .navbar {
    margin: var(--spacing-lg);
  }

  .footer {
    max-width: 100%;
  }
}
</style>
