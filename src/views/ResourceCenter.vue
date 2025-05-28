<template>
    <div class="resource">
      <div class="resource-top">
        <TitleText />
      </div>
      <div class="resource-content">
       
      </div>
    </div>
  </template>
  <script setup>
  import { ref, reactive } from "vue";
  import TitleText from "./components/TitleText.vue";
  import TopTitle from "@/components/TopTitle.vue";
  import PagePaper from "./components/PagePaper.vue";
  </script>
  <style scoped lang="scss">
  .resource {
    width: 100%;
  
    .resource-top {
      width: 100%;
      height: 35vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("@/assets/imgs/ziyuanzonxin.png");
  
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
      }
    }
  
    
  }
  </style>
  