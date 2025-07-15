<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="../"><img src="../assets/img/logo.png" :alt="$t('appName')"
            style="height:70px" /></a>
        <button class="navbar-toggler" type="button" aria-label="Toggle navigation" @click="openNav()">
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars" style="font-size: 28px"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li v-for="(x, idx) in menu_" :key="idx" class="nav-item">
              <router-link :to="x.link" :title="x.title">
                <span class="nav-link text-dark">
                  <icon :name="x.ico"></icon>
                  {{ $t(x.title) }}
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <span class="nav-link text-dark">
                <a href="https://www.programprehrane.com/registracija?lang=sr" class="text-dark" title="Registracija">
                  Registracija
                </a>
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link text-dark">
                <a href="https://www.programprehrane.com/narudzba?lang=sr" class="text-dark" title="Porudžbina">
                  Porudžbina
                </a>
              </span>
            </li>
            <!-- <li class="pt-2 pl-5">
              <c-locale-switcher id="dropdownMenuButton1" />
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <div id="mySidenav" class="sidenav text-uppercase">
      <div class="pt-5">
        <span :title="$t('menu')" class="font-weight-bold text-light ml-3 nav-link" role="button" @click="closeNav()">{{
          $t('menu') }}</span>
        <span class="closebtn text-white" role="button" @click="closeNav()"
          :title="$t('close')"><strong>&times;</strong></span>
        <hr class="m-0 mx-4 mb-2 bg-light" />
      </div>
      <div v-for="(x, idx) in menu_" :key="idx" @click="closeNav()">
        <router-link :to="x.link" :title="x.title">
          <span class="nav-link text-white">
            <icon :name="x.ico"></icon>
            {{ $t(x.title) }}
          </span>
        </router-link>
        <span class="nav-link">
          <a href="https://www.programprehrane.com/registracija?lang=sr" class="text-light" title="Registracija">
            Registracija
          </a>
        </span>
        <span class="nav-link">
          <a href="https://www.programprehrane.com/narudzba?lang=sr" class="text-light" title="Porudžbina">
            Porudžbina
          </a>
        </span>
      </div>
      <div class="p-3">
        <!-- <c-locale-switcher id="dropdownMenuButton2" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import cLocaleSwitcher from './cLocaleSwitcher.vue';
export default {
  data() {
    return {
      menu: [
        { link: "/", title: "Naslovna", ico: null, isVisible: false },
        { link: "paketi", title: "Paketi", ico: null, isVisible: true },
        { link: "kontakt", title: "contact", ico: null, isVisible: false },
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
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width === "250px"
        ? document.getElementById("mySidenav").style.width = "0"
        : document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>
