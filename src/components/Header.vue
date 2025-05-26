<template>
  <div class="header">
    <img src="@/assets/imgs/LOGO.png" alt="" />
    <div class="tab-list">
      <div v-for="item in tabList" :key="item.name">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";

let tabList = ref([
  {
    name: "关于我们",
    path: "/about",
  },
  {
    name: "科学研究",
    path: "/about",
  },
  {
    name: "资源中心",
    path: "/about",
  },
  {
    name: "联系我们",
    path: "/about",
  },
]);
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 76px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  img {
    height: 20px;
  }

  .tab-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 35px;
    cursor: pointer;
  }
}
</style>
