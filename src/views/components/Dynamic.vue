<template>
  <div class="dynamic-container">
    <img src="@/assets/imgs/meihaorensheng.png" alt="" />
    <div class="dynamic-content">
      <span class="title">重要公告：此处填写标题</span>
      <div class="content">
        <span>
          实验室的研究⽅向集中在理解不同⼼理和社会因素如何共同作⽤促进个体和群体的⼼理健康与
          幸福，尤其是如何在全球化和⽂化多样化背景下，促进社会融合增强幸福感 实验室的研究⽅向集中在理解不同⼼理和社会因素如何共同作⽤促进个体和群体的⼼理健康与
          幸福。</span
        >
        <span>2025.01.30</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped lang="scss">
.dynamic-container {
  width: 100%;
  display: grid;
  grid-template-columns: 20% auto;
  place-items: center;
  gap: 20px;
  img {
    height: 120px;
  }
  .dynamic-content {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    gap: 10px;
    .title {
      font-size: 25px;
      color: #000;
      font-weight: 600;
      justify-self: start;
    }
    .content {
      font-size: 14px;
      color: #999999;
      @include center(column);
      align-items: flex-start;
      gap: 5px;
    }
  }
}
</style>
