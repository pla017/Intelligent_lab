<template>
  <div class="swiper-container">
    <swiper
      :modules="[EffectCoverflow, Navigation, Pagination, Autoplay]"
      effect="coverflow"
      :coverflow-effect="{
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: true
      }"
      :centered-slides="true"
      :slides-per-view="1.5"
      grab-cursor="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      pagination
      loop
      :speed="1000"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :space-between="30"
      :transition="true"
      :watch-slides-progress="true"
      :observer="true"
      :observe-parents="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(img, idx) in images" :key="idx">
        <img :src="img" class="slide-img" />
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import img from "@/assets/imgs/top.png";


const images = ref([img, img, img,img,img]);
</script>

<style scoped lang="scss">
.swiper-container {
  position: relative;
  width: 100%;
}

.mySwiper {
  width: 100%;
  height: 350px;
  margin: 0 auto;
  background: #fff;
  .swiper-slide {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.9);
    opacity: 0.6;
    
    &-active {
      transform: scale(1);
      opacity: 1;
      box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
    }
    
    &-prev, &-next {
      opacity: 0.6;
      transform: scale(0.9);
    }
  }
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.05);
  }
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &::after {
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }
  
  &:hover {
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
}

:deep(.swiper-button-prev) {
  left: 20px;
}

:deep(.swiper-button-next) {
  right: 20px;
}

:deep(.swiper-button-disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
