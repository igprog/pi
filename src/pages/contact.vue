<template>
  <div class="container pt-5" style="pading-top:300px">
    <div class="text-center">
      <h2 class="pt-5">Kontakt</h2>
      <hr class="w-50 mx-auto mb-4">
    </div>
    <div class="row">
      <div class="col-lg-6 py-2">
        <h3>
          Zvanični ekskluzivni distributer u Srbiji:
        </h3>
        <hr>
        <div>
          <img :src="require(`@/assets/img/logo_symappsys.png`)" alt="logo_symappsys" class="img-fluid"
            style="width:200px" />
        </div>
        <c-contact :showIcon="true" aColor="#000" />
      </div>
      <div class="col-lg-6 py-2">
        <h3>Proizvođać i tehnička podrška:</h3>
        <hr>
        <div class="py-2">
          <img :src="require(`@/assets/img/logo_igprog.png`)" alt="logo_igprog" class="img-fluid pt-3"
            style="width:200px" />
        </div>
        <div>
          <label>{{ info.manufacturer.company }}</label>
          <div>
            <icon name="home" scale=2 class="text-main" />
            <div class="pb-1">
              <span class="p-2">{{ info.manufacturer.address }}</span>
            </div>
            <div class="pb-1">
              <span class="p-2">{{ `${info.manufacturer.postalCode} ${info.manufacturer.city}` }}</span>
            </div>
            <div class="pb-1">
              <span class="p-2">{{ $t(info.manufacturer.country) }}</span>
            </div>
            <hr class="bg-light mr-5">
          </div>
          <div class="pb-1">
            <a :href="`tel:+${info.manufacturer.phone}`" title="Telefon" class="text-dark">
              <icon name="phone" scale=2 class="text-main" /><span class="p-2">+{{
                info.manufacturer.phoneShort }}</span>
            </a>
          </div>
          <div class="pb-1">
            <a :href="`mailto:${info.manufacturer.email}`" title="Email" class="text-dark">
              <icon name="envelope" scale=2 class="text-main" /><span class="p-2">{{
                info.manufacturer.email }}</span>
            </a>
          </div>
          <div class="pb-1">
            <a :href="`https://www.${info.manufacturer.web}`" title="Veb" class="text-dark">
              <icon name="globe" scale=2 class="text-main" /><span class="p-2">www.{{
                info.manufacturer.web }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cContact from "../components/cContact.vue";
import { info } from "../config/info";
export default {
  metaInfo() {
    return {
      title: 'Program Ishrane',
      titleTemplate: '%s | ' + 'Kontakt',
    }
  },
  components: {
    cContact
  },
  data() {
    return {
      info
    };
  },
};
</script>