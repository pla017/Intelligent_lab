<template>
  <div class="resource">
    <div class="resource-top">
      <TitleText />
    </div>
    <div class="resource-content">
      <!-- 在线课程 -->
      <div class="resource-course">
        <TopTitle title="online course" subTitle="在线课程" />
        <div class="resource-course-content">
          <Course
            v-for="(item, index) in courses"
            :key="index"
            :title="item.title"
            :desc="item.desc"
            :teacher="item.teacher"
            :icon="item.icon"
          />
        </div>
      </div>

      <!-- 幸福书屋 -->
      <div class="resource-book">
        <TopTitle title="Happy Library" subTitle="幸福书屋" />
        <div class="resource-book-content">
          <Book v-for="(item, index) in books" :key="index" :book="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import TitleText from "./components/TitleText.vue";
import TopTitle from "@/components/TopTitle.vue";
import PagePaper from "./components/PagePaper.vue";
import Course from "./components/Course.vue";

import Book from "./components/Book.vue";
import { useResource } from "@/hook/useResource";



let { books, courses } = useResource();
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

  .resource-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    gap: 100px;
    .resource-course {
      width: 80%;
      .resource-course-content {
        width: 100%;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        gap: 20px;
        margin-top: 100px;
      }
    }
    .resource-book {
      width: 80%;
      .resource-book-content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        gap: 20px;
        margin-top: 100px;
      }
    }
  }
}
</style>
