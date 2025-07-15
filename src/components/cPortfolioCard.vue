<template>
  <div class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <img
          :src="require(`@/assets/img/portfolio/${img}`)"
          class="img-fluid flip-box-img"
          :alt="product"
        />
      </div>
      <div class="flip-box-back pt-5">
        <h3 v-if="product" class="small font-weight-bold">{{ product }}</h3>
        <p v-if="shortdesc" class="small">{{ shortdesc }}</p>
        <a v-if="link" :href="link" class="small" :title="domain"
          >{{ domain }} <i class="ti-arrow-right"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    product: String,
    shortdesc: String,
    link: String,
    domain: String,
  },
};
</script>

<style scoped>
/*=================== flip image start ====================*/
.flip-box {
  background-color: transparent;
  /*width: 300px;*/
  height: 200px;
  /*border: 1px solid #f1f1f1;*/
  perspective: 1000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1.2s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  /*background-color: #bbb;*/
  color: black;
}

.flip-box-back {
  /*background-color: #f7f7f7;*/
  /*color: white;*/
  transform: rotateY(180deg);
}

@media screen and (max-width: 576px) {
  .flip-box-img {
    height: 100% !important;
  }
}
/*=================== flip image end ====================*/
</style>
