<template>
  <div>
    <c-loading :val="loading" :title="$t('pleaseWait')" />
    <div v-if="d  && !loading">
      <div>
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center contact-us">{{ $t('sendInquiry') }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group form-primary">
              <label>{{$t('name')}}:</label>
              <input
                v-model="d.name"
                type="text"
                class="form-control text-left"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group form-primary">
              <label>{{$t('email')}}:</label>
              <input
                v-model="d.email"
                type="email"
                class="form-control text-left"
              />
            </div>
          </div>
        </div>
        <div class="form-group form-primary">
          <label>{{$t('message')}}:</label>
          <textarea
            v-model="d.msg"
            class="form-control text-left"
          >
          </textarea>
        </div>
        <div class="row justify-content-end">
          <div class="col-md-3">
            <button
              class="btn btn-secondary btn-md btn-block text-center m-b-20"
              @click="send(d)"
            >
              <icon name="paper-plane" /> {{ $t('send') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cJson from "./cJson.vue";
import cLoading from "./cLoading.vue";
import { mixin } from "../mixins/mixin.js";
import { info } from "../config/info";
export default {
  mixins: [mixin],
  components: {
    cJson,
    cLoading,
  },
  data() {
    return {
      d: null,
      isSuccess: false
    };
  },
  created() {
    this.get("mail/init").then((resp) => {
      this.d = resp;
      this.d.sendTo = info.sendTo;
      this.d.owner = info.owner;
    });
  },
  methods: {
    send(d) {
      if (this.isNullOrWhiteSpace(d.name) || this.isNullOrWhiteSpace(d.email) || this.isNullOrWhiteSpace(d.msg))  {
        //this.$toasted.show(this.$t('allFieldsAreMandatory'), {  type : 'error', position: "bottom-right", icon : 'fa fa-user' });
        this.$toasted.global.error( { message: this.$t('allFieldsAreMandatory') } );
        return;
      }
      debugger;
      this.post("mail/send", d).then((resp) => {
        this.isSuccess = resp.isSuccess;
        this.$toasted.show(resp.isSuccess ? this.$t('successfullySentMsg') : resp.msg, {  type : resp.isSuccess ? 'success' : 'error' });
      });
    },
  },
};
</script>
