<template>
    <div class="dropdown padding-left-resp">
        <label class="dropdown-toggle" :id="id" data-toggle="dropdown" >
            <img :src="require(`@/assets/img/lang/${this.$i18n.locale}.svg`)" :alt="$i18n.locale" />
        </label>
        <div class="dropdown-menu dropdown-menu-right" :aria-labelledby="id">
          <div v-for="(locale, idx) in locales" :key="idx" class="dropdown-item" @click="switchLocale(locale.code)"><img :src="require(`@/assets/img/lang/${locale.code}.svg`)" :alt="locale.code" /> {{$t(locale.name)}}</div>
        </div>
    </div>
</template>

<script>
import { locales } from '../config/i18n'
export default {
  props: {
    id: String
  },
  name: 'LocaleSwitcher',
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        const to = this.$router.resolve({ params: {locale} })
        this.$router.push(to.location)
      }
    }
  },
  data() {
    return {
      locales
    }
  }
}
</script>