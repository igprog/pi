<template>
  <div class="mt-5">
    <div class="bg-dark text-white">
      <div class="pt-3">
        <div class="container-fluid px-5">
          <div class="row">
            <div class="col-md-4 text-center pb-4">
              <div class="pt-3">
                <img
                  src="../assets/img/logo.png"
                  alt="logo"
                  class="img-fluid"
                  style="width:350px"
                />
              </div>
            </div>
            <div class="col-md-4 pt-2">
              <h2 class="text-white">Brzi linkovi</h2>
              <c-quick-links />
            </div>
            <div class="col-md-4 pt-2">
              <h2 class="text-white">Kontakt</h2>
              <div>Distributer za Srbiju:</div>
              <hr class="m-0 bg-light">
              <c-contact aColor="#fff"  />
            </div>
          </div>
        </div>
      </div>
      <footer class="container-fluid pt-3 pb-2">
        <div class="text-center">
          <span class="small"
            >© {{ year }} Program Ishrane – lokalizovana verzija softvera <a
              href="https://www.programprehrane.com"
              target="_blank"
              title="Program Prehrane"
              class="font-weight-bold"
              >Program Prehrane</a>.
Sva prava zadržana.
            </span
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import cContact from "./cContact.vue";
// import cMap from "./cMap.vue";
import cQuickLinks from "./cQuickLinks.vue";

export default {
  components: {
    cContact,
    // cMap,
    cQuickLinks,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
a {
  color: #fff !important;
}
</style>