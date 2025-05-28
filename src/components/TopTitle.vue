<template>
  <div class="TopTitle">
    <div class="lab-head">
      <div>{{ title }}</div>
      <span>{{ subTitle }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
});
</script>
<style scoped lang="scss">
.TopTitle {
  position: relative;
}
.lab-head {
  user-select: none;
  & > :first-child {
    font-family: "Gill Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 36px;
    text-align: center;
    text-transform: uppercase;
    color: #ffa159;
    opacity: 0.2;
  }
  & > :last-child {
    font-size: 26px;
    font-weight: 600;
    color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
