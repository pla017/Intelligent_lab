<template>
  <div class="header">
    <img src="@/assets/imgs/LOGO.png" alt="" />
    <div class="tab-list">
      <div
        v-for="(item, idx) in tabList"
        :key="item.name"
        class="tab-item"
        @mouseenter="hoverIndex = idx"
        @mouseleave="hoverIndex = -1"
      >
        {{ item.name }}
        <div
          v-if="item.children"
        >
          <transition name="fade-dropdown">
            <div
              v-show="hoverIndex === idx"
              class="dropdown"
            >
              <div class="dropdown-arrow"></div>
              <div class="dropdown-line"></div>
              <div
                v-for="child in item.children"
                :key="child.name"
                class="dropdown-item"
              >
                {{ child.name }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

let tabList = ref([
  {
    name: "关于我们",
    path: "/about",
  },
  {
    name: "科学研究",
    path: "/about",
    children: [
      { name: "目前研究", path: "/current" },
      { name: "发表论文", path: "/papers" },
    ],
  },
  {
    name: "资源中心",
    path: "/about",
    children: [
      { name: "目前研究", path: "/current" },
      { name: "发表论文", path: "/papers" },
        { name: "发表论文", path: "/papers" },
    ],
  },
  {
    name: "联系我们",
    path: "/about",
  },
]);

let hoverIndex = ref(-1);
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

.tab-item {
  position: relative;
}

.dropdown-arrow {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 8px;
  z-index: 11;
  pointer-events: none;
  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 8px;
    background: transparent;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background: #191919;
  }
}

.dropdown-line {
  position: absolute;
  top: -6px;
  left: 0;
  width: 100%;
  height: 5px;
  background: #191919;
  z-index: 10;
  border-radius: 2px 2px 0 0;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  border-radius: 4px;
  min-width: 120px;
  z-index: 10;
  padding: 8px 0;
  margin-top: 12px;
}

.dropdown-item {
  padding: 8px 24px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
}

.fade-dropdown-enter-active, .fade-dropdown-leave-active {
  transition: opacity 0.25s;
}
.fade-dropdown-enter-from, .fade-dropdown-leave-to {
  opacity: 0;
}
.fade-dropdown-enter-to, .fade-dropdown-leave-from {
  opacity: 1;
}
</style>
