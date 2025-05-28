<template>
  <div class="top-title-text">
    <div class="top-title">
      <span>认知 ｜ 行为 ｜ 生活</span>
      <span>AI FOR WELLBEING LAB</span>
      <span>智能幸福实验室</span>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped lang="scss">
.top-title-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15%;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  .top-title {
    font-weight: 600;
    color: #fff;
    text-align: center;
    font-size: 30px;
    span {
      display: block;
    }
    & > :nth-child(2) {
      font-size: 48px;
    }
  }
  .more-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #ffffff;
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;

    span {
      font-size: 14px;
      color: #fff;
    }
    img {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
