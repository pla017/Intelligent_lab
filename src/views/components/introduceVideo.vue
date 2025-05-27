<template>
  <div class="video-introduce-wrapper">
    <div class="video-introduce-list">
      <div class="video-card" v-for="(item, idx) in currentCards" :key="idx">
        <img :src="item.img" class="video-img" />
      </div>
    </div>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="prevPage">‹</button>
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="goPage(page)"
      >
        {{ page }}
      </button>
      <button :disabled="currentPage === totalPages" @click="nextPage">
        ›
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import video1 from "@/assets/imgs/video1.png";
import video2 from "@/assets/imgs/video2.png";
import video3 from "@/assets/imgs/video3.png";
const cards = [
  {
    img: video2,
  },
  {
    img: video1,
  },
  {
    img: video3,
  },
  {
    img: video3,
  },
  {
    img: video3,
  },
];

const pageSize = 3;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(cards.length / pageSize));

const currentCards = computed(() =>
  cards.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
);

function goPage(page) {
  currentPage.value = page;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
</script>
<style scoped lang="scss">
.video-introduce-wrapper {
  width: 800px;
  margin: 0 auto;
}
.video-introduce-list {
  display: flex;
  justify-content: center;
  gap: 24px;
}
.video-card {
  width: 240px;
  height: 320px;
  background: #222;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  color: #fff;
  text-align: left;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  .video-img {
    width: 100%;
    object-fit: contain;
    background: #fff;
  }
  .video-title {
    font-size: 22px;
    font-weight: bold;
    margin: 16px 12px 8px 12px;
    line-height: 1.2;
  }
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 8px;
  button {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: #eee;
    color: #333;
    font-size: 16px;
    cursor: pointer;
    &.active {
      background: #ffa366;
      color: #fff;
    }
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>
