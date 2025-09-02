<template>
  <div>
    <!-- HEADER -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="../">
          <img src="../assets/img/logo.png" :alt="$t('appName')" style="height:70px" />
        </a>
        <button class="navbar-toggler" type="button" aria-label="Toggle navigation" @click="openNav">
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars" style="font-size: 28px"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/paketi" class="nav-link text-dark">Paketi</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/o-nama" class="nav-link text-dark">O nama</router-link>
            </li>
            <li class="nav-item">
              <a href="https://www.programprehrane.com/narudzba?lang=sr" class="nav-link text-dark">Porudžbina</a>
            </li>
            <li class="nav-item">
              <a href="https://www.programprehrane.com/registracija?lang=sr" class="nav-link text-dark">Registracija</a>
            </li>
            <li class="nav-item">
              <a href="https://www.programprehrane.com/app/#/?lang=sr" class="nav-link text-dark">Prijava</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- MOBILE SIDENAV -->
    <div id="mySidenav" class="sidenav text-uppercase">
      <div class="pt-5">
        <span class="font-weight-bold text-light ml-3 nav-link" role="button" @click="closeNav">{{ $t('menu') }}</span>
        <span class="closebtn text-white" role="button" @click="closeNav"><strong>&times;</strong></span>
        <hr class="m-0 mx-4 mb-2 bg-light" />
      </div>

      <!-- Meni linkovi -->
      <div v-for="(x, idx) in menu_" :key="idx" @click="closeNav">
        <router-link :to="x.link" class="nav-link text-white">{{ $t(x.title) }}</router-link>
      </div>

      <!-- Staticki linkovi -->
      <div>
        <span class="nav-link"><a href="https://www.programprehrane.com/narudzba?lang=sr" class="text-light">Porudžbina</a></span>
        <span class="nav-link"><a href="https://www.programprehrane.com/registracija?lang=sr" class="text-light">Registracija</a></span>
        <span class="nav-link"><a href="https://www.programprehrane.com/app/#/?lang=sr" class="text-light">Prijava</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { link: "/", title: "Naslovna", ico: null, isVisible: false },
        { link: "paketi", title: "Paketi", ico: null, isVisible: true },
        { link: "o-nama", title: "O nama", ico: null, isVisible: true },
      ],
    };
  },
  computed: {
    menu_() {
      return this.menu.filter((a) => a.isVisible);
    },
  },
  methods: {
    openNav() {
      const sidenav = document.getElementById("mySidenav");
      sidenav.style.width = sidenav.style.width === "250px" ? "0" : "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
