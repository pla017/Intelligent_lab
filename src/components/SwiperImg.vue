<template>
  <div class="swiper-img">
    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
      }"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000 }"
      loop="true"
      class="my-swiper"
    >
      <swiper-slide v-for="(img, idx) in imgs" :key="idx">
        <img :src="img" alt="轮播图" />
      </swiper-slide>
      <div class="swiper-button-prev">
        <img src="@/assets/imgs/left.png" alt="" />
      </div>
      <div class="swiper-button-next">
        <img src="@/assets/imgs/right.png" alt="" />
      </div>
    </swiper>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 定义通用图片数组 props
const props = defineProps({
  imgs: {
    type: Array,
    required: true,
  },
});
</script>
<style scoped lang="scss">
.my-swiper {
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
}

.my-swiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #472619;
  opacity: 0.5;

  &::after {
    display: none;
  }

  img {
    width: 15px;
    height: 20px;
  }
}

.swiper-button-prev {
  border-radius: 0 8px 8px 0;
}

.swiper-button-next {
  border-radius: 8px 0 0 8px;
}


:deep(.swiper-button-prev) {
  left: 0;
}

:deep(.swiper-button-next) {
  right: 0;
}
</style>
