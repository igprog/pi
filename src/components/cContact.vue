<template>
  <div>
    <label v-if="info.company">{{ info.company }}</label>
    <div>
      <icon v-if="showIcon" name="home" scale=2 class="text-main" />
      <div class="pb-1">
        <span class="p-2">{{ info.address }}</span>
      </div>
      <div class="pb-1">
        <span class="p-2">{{ `${info.postalCode} ${info.city}` }}</span>
      </div>
      <div class="pb-1">
        <span class="p-2">{{ $t(info.country) }}</span>
      </div>
      <hr class="bg-light mr-5">
    </div>
    <div class="pb-1">
      <a :href="`tel:+${info.phone}`" :title="$t('phone')" :style="`color:${aColor}`">
        <icon v-if="showIcon" name="phone" scale=2 class="text-main" /><span class="p-2">+{{ info.phoneShort }}</span>
      </a>
    </div>
    <div class="pb-1">
      <a :href="`mailto:${info.email}`" :title="$t('email')" :style="`color:${aColor}`">
        <icon v-if="showIcon" name="envelope" scale=2 class="text-main" /><span class="p-2">{{ info.email }}</span>
      </a>
    </div>
    <div class="pb-1">
      <a :href="`https://www.${info.web}`" title="web" :style="`color:${aColor}`">
        <icon v-if="showIcon" name="globe" scale=2 class="text-main" /><span class="p-2">www.{{ info.web }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { info } from "../config/info";
export default {
  props: {
    showIcon: Boolean,
    aColor: String
  },
  data() {
    return {
      info
    };
  },
};
</script>