<template>
  <div class="dynamic-container">
    <img :src="dynamic.img" alt="" />
    <div class="dynamic-content">
      <span class="title">{{ dynamic.title }}</span>
      <div class="content">
        <span>
          {{ dynamic.description }}
        </span>
        <span>{{ formatDate(dynamic.pDate) }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";

const { dynamic } = defineProps({
  dynamic: {
    type: Object,
    default: () => {},
  },
});

const formatDate = (date) => {
  const datePart = date.slice(0, 10);
  const [year, month, day] = datePart.split('-');
  return `${year}.${month}.${day}`;
};

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
