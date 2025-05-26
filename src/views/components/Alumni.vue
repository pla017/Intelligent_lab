<template>
  <div class="alumni">
    <img src="@/assets/imgs/boshi/keluoma.png" alt="" />
    <div class="alumni-box">
      <div class="vertical-line"></div>
      <div class="alumni-info">
        <div class="alumni-name">
          <span class="name">柯罗⻢</span>
          <span>普博</span>
        </div>
        <div class="desc">
          校一等奖学金获得者，学术之路金牌讲师，“未来社计师”研究资助者，专注人工智能心理学与积极心理学研究。
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped lang="scss">
.alumni {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
