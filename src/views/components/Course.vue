<template>
  <div class="course">
    <img :src="icon" alt="" />
    <div class="course-item">
      <span>{{ title }}</span>
      <span>{{ desc }}</span>
      <span>授课教师：{{ teacher }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";

let { title, desc, teacher, icon } = defineProps([
  "title",
  "desc",
  "teacher",
  "icon",
]);
</script>
<style scoped lang="scss">
.course {
  width: 100%;
  display: grid;
  grid-template-columns: 20% auto;
  place-items: center;

  img {
    height: 120px;
  }

  .course-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    & > :first-child {
      font-size: 20px;
      font-weight: 600;
    }

    & > :nth-child(2),
    & > :nth-child(3) {
      font-size: 16px;

      font-family: "HONOR Sans CN";
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      /* or 156% */
      text-align: justify;
      color: #1b1b1b;
      opacity: 0.6;
    }
  }
}
</style>
