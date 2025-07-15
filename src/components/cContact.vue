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
    <!-- <div class="pb-1">
      <a :href="`viber://chat?number=%2B${info.phone}`" title="Viber" class="shadow badge badge-primary badge-pill m-1 p-2">
      <icon name="brands/viber" scale=2 /><span class="p-2">Viber</span>
      </a>
      <a :href="`https://api.whatsapp.com/send?phone=${info.phone}`" title="WhatsApp" class="shadow badge badge-success badge-pill m-1 p-2">
      <icon name="brands/whatsapp" scale=2 /><span class="p-2">WhatsApp</span>
      </a>
    </div> -->
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