<template>
  <div class="header">
    <img src="@/assets/imgs/LOGO.png" alt="" />
    <div class="tab-list">
      <div
        v-for="(item, idx) in tabList"
        :key="item.name"
        class="tab-item"
        :class="{
          active: currentPath === item.path,
          'active-parent': item.children?.some(
            (child) =>
              currentPath === child.path ||
              currentPath === item.path + child.path.split('#')[1]
          ),
        }"
        @mouseenter="hoverIndex = idx"
        @mouseleave="hoverIndex = -1"
        @click="handleNavigation(item.path)"
      >
        {{ item.name }}
        <div v-if="item.children">
          <transition name="fade-dropdown">
            <div v-show="hoverIndex === idx" class="dropdown">
              <div class="dropdown-arrow"></div>
              <div class="dropdown-line"></div>
              <div
                v-for="child in item.children"
                :key="child.name"
                class="dropdown-item"
                :class="{
                  active:
                    route.path === item.path &&
                    (route.hash === '#' + child.path.split('#')[1] ||
                      (!route.hash && !child.path.includes('#'))),
                }"
                @click.stop="handleNavigation(child.path)"
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
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// 添加当前锚点的响应式变量
const currentHash = ref("");

// 监听滚动更新当前锚点
onMounted(() => {
  window.addEventListener("scroll", updateCurrentHash);
  updateCurrentHash(); // 初始化时执行一次
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateCurrentHash);
});

// 更新当前锚点的函数
const updateCurrentHash = () => {
  const sections = document.querySelectorAll("[id]");
  let currentSection = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100) {
      // 可以调整这个值来改变触发点
      currentSection = section.id;
    }
  });

  currentHash.value = currentSection;
};

// 修改 currentPath 计算属性
const currentPath = computed(() => {
  const fullPath = route.fullPath;
  const hash = currentHash.value;
  // 如果有当前锚点，优先使用当前锚点
  if (hash && route.path === "/scicentics") {
    return `/scicentics#${hash}`;
  }
  return fullPath;
});

let tabList = ref([
  {
    name: "关于我们",
    path: "/",
  },
  {
    name: "科学研究",
    path: "/scicentics",
    children: [
      { name: "目前研究", path: "/scicentics#current" },
      { name: "发表论文", path: "/scicentics#papers" },
    ],
  },
  {
    name: "资源中心",
    path: "/resource",
    children: [
      { name: "在线课程", path: "/resource#online" },
      { name: "幸福书屋", path: "/resource#book" },
    ],
  },
  {
    name: "联系我们",
    path: "/about",
  },
]);

// children: [
//       { name: "实验活动", path: "/about#experiment" },
//       { name: "合作机会", path: "/about#join" },
//       { name: "合作名单列表", path: "/about#list" },
//       { name: "人才招募", path: "/about#recruit" },
//       { name: "联系我们", path: "/about#contact" },

//     ],

let hoverIndex = ref(-1);

const handleNavigation = (path) => {
  if (path.includes("#")) {
    const [targetPath, hash] = path.split("#");
    if (route.path === targetPath) {
      // 如果在同一页面，使用scrollIntoView并更新hash
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // 手动更新URL hash
        window.location.hash = "#" + hash;
      }
    } else {
      // 如果不在同一页面，使用路由导航
      router.push(path);
    }
  } else {
    router.push(path);
  }
};
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
  padding-bottom: 4px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #191919;
    transition: width 0.3s ease;
  }

  &.active::after,
  &.active-parent::after {
    width: 100%;
  }
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
    content: "";
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
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
  position: relative;

  &.active {
    color: #ff0000;
    font-weight: 500;
    background: transparent;
  }

  &:hover {
    background: #f5f5f5;
  }
}

.fade-dropdown-enter-active,
.fade-dropdown-leave-active {
  transition: opacity 0.25s;
}
.fade-dropdown-enter-from,
.fade-dropdown-leave-to {
  opacity: 0;
}
.fade-dropdown-enter-to,
.fade-dropdown-leave-from {
  opacity: 1;
}
</style>
