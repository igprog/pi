<template>
  <div class="container">
    <h2>{{ $t('booking') }}</h2>
    <hr>
    <div class="row">
      <div class="col-sm-4 pb-2">
        <p>{{$t('bookingDesc')}}.</p>
      </div>
      <div class="col-sm-8">
        <c-booking />
      </div>
    </div>
  </div>
</template>

<script>
import cBooking from '../components/cBooking.vue';
export default {
  metaInfo () {
    return {
      title: this.$t('appName') + ', ' + this.$t('appDesc'),
      titleTemplate: '%s | ' + this.$t('booking'),
    }
  },
  components: {
    cBooking
  },
};
</script>
