<template>
  <div class="alumni">
    <img :src="info?.avatar" alt="" />
    <div class="alumni-box">
      <div class="vertical-line"></div>
      <div class="alumni-info">
        <div class="alumni-name">
          <span class="name">{{ info?.pName }}</span>
          <span>{{ info?.identity }}</span>
        </div>
        <div class="desc">
          {{ info?.domain }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
const { info } = defineProps(["info"]);
</script>
<style scoped lang="scss">
.alumni {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  img {
    height: 100px;
    align-self: flex-start;
    margin-left: 10px;
  }

  .alumni-box {
    width: 100%;
    display: grid;
    grid-template-columns: 5% 1fr;
    place-items: center;
    gap: 20px;

    .vertical-line {
      width: 1px;
      height: 100%;
      border: 1px solid #1b1b1b;
    }

    .alumni-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
      .alumni-name {
        display: flex;
        align-items: center;
        gap: 10px;
        .name {
          font-size: 18px;
          font-weight: 600;
        }
        & > :nth-child(2) {
          font-size: 14px;
          color: #1b1b1b;
          opacity: 0.6;
        }
      }
      .desc {
        font-size: 14px;
        color: #1b1b1b;
        opacity: 0.6;
      }
    }
  }
}
</style>
