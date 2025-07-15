<template>
  <div>
    <div v-for="(x, idx) in menu_" :key="idx" class="pb-1">
      <router-link :to="x.link" :title="x.title">
        <span>
          <icon :name="x.ico"></icon>
          {{ $t(x.title) }}
        </span>
      </router-link>
    </div>
    <div class="pb-1">
      <a href="https://www.programprehrane.com/registracija?lang=sr" title="Registracija">
        Registracija
      </a>
    </div>
    <div class="pb-1">
      <a href="https://www.programprehrane.com/narudzba?lang=sr" title="Porudžbina">
        Porudžbina
      </a>
    </div>
    <div>
      <a href="/docs/korisnicka-licenca-sr.pdf" target="_blank" rel="noopener" title="Uslovi korišćenja">
        Uslovi korišćenja
      </a>
    </div>
  </div>
</template>

<script>
import cLocaleSwitcher from './cLocaleSwitcher.vue';
export default {
  data() {
    return {
      menu: [
        { link: "/", title: "Naslovna", ico: null, isVisible: true },
        { link: "paketi", title: "Cene", ico: null, isVisible: true },
        { link: "kontakt", title: "Kontakt", ico: null, isVisible: true },
        { link: "uslovi-koristenja-i-kupnje", title: "Uslovi korištenja i kupnje", ico: null, isVisible: true },
        { link: "test", title: "Test", ico: null, isVisible: false },
      ],
    };
  },
  components: {
    cLocaleSwitcher
  },
  computed: {
    menu_: function () {
      return this.menu.filter((a) => a.isVisible);
    },
  },
};
</script>

<style scoped>
a {
  color: #fff !important;
}
</style>
