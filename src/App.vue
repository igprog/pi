<template>
  <div id="app">
    <c-navbar />
    <!-- <c-header /> -->
    <div style="min-height:400px" class="py-4">
      <router-view />
    </div>
    <c-footer />
    <!-- <cookie-law buttonText="Prihvati i zatvori" buttonClass="btn btn-secondary">
      <div slot="message">
        Naša web stranica koristi kolačiće. Za više informacija
        <router-link to="/izjava-o-kolacicima">klikni ovdje</router-link>.
      </div>
    </cookie-law> -->
  </div>
</template>

<script>
require("@/assets/styles/main.css");
import cNavbar from "./components/cNavbar.vue";
// import cHeader from "./components/cHeader.vue";
import cFooter from "./components/cFooter.vue";
import CookieLaw from "vue-cookie-law";
import { mixin } from "./mixins/mixin.js";

export default {
  mixins: [mixin],
  name: "App",
  metaInfo: {
    title: "Program Ishrane",
    htmlAttrs: {
      lang: "sr",
    },
  },
  components: {
    cNavbar,
    //cHeader,
    cFooter,
    CookieLaw,
  },
};
</script>

<style scoped src="@/assets/styles/main.css">
</style>