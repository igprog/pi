<template>
    <div v-if="info.googleMap" style="height: 300px" >
        <iframe :src="info.googleMap" style="border: 0; width: 100%; height: 95%" allowfullscreen="" loading="lazy" title="googleMap"></iframe>
    </div>
</template>

<script>
import { info } from "../config/info";

export default {
  data() {
    return {
      info
    };
  }
};
</script>