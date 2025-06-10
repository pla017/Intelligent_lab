<template>
  <div class="paper-item">
    <div class="paper-index">{{ String(index).padStart(2, "0") }}</div>
    <div class="paper-content">
      <div class="paper-text" v-html="paper.content">
     
      </div>
    </div>
  </div>
</template>

<script setup>
let { paper, index } = defineProps({
  paper: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.paper-item {
  width: 100%;
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #8d8d8d;
  transition: all 0.3s;
  cursor: pointer;
  gap: 20px;

  &:hover {
    background-color: #f8f9fa;
    .paper-index {
      background: #ffe4d0;
      color: #ff6b00;
    }

    .paper-content {
      .paper-text {
        color: #ff6b00;
      }
    }
  }

  .paper-index {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #e9e9e9;
    border-radius: 10px;
  }

  .paper-content {
    width: 100%;
    display: flex;
    flex-direction: column;

    .paper-text {
      font-size: 16px;
      line-height: 1.6;
      font-style: normal;
      text-align: justify;
      color: #1b1b1b;
    }
  }
}
</style>
