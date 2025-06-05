<template>
  <div class="recruit-list">
    <div
      v-for="(item, idx) in recruitList"
      :key="idx"
      class="recruit-item"
    >
      <div class="date-block">
        <div class="date-main">{{ item.date }}</div>
        <div class="date-sub">{{ item.year }}. {{ item.week }}</div>
      </div>
      <div class="content-block">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
      <div class="arrow-block">
        <div class="arrow-circle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div
        class="divider"
        :class="{ orange: idx === 0 }"
        v-if="idx !== recruitList.length - 1"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const recruitList = ref([
  {
    date: '02/20',
    year: '2024',
    week: 'Mon.',
    title: '清华大学智能幸福实验室招募科研助理',
    desc: '实验室的研究方向集中在理解不同心理和社会因素如何共同作用促进个体和群体的心理健康与 幸福。',
  },
  {
    date: '02/20',
    year: '2024',
    week: 'Mon.',
    title: '清华大学智能幸福实验室招募科研助理',
    desc: '实验室的研究方向集中在理解不同心理和社会因素如何共同作用促进个体和群体的心理健康与 幸福。',
  },
  {
    date: '02/20',
    year: '2024',
    week: 'Mon.',
    title: '清华大学智能幸福实验室招募科研助理',
    desc: '实验室的研究方向集中在理解不同心理和社会因素如何共同作用促进个体和群体的心理健康与 幸福。',
  },
])
</script>

<style scoped lang="scss">
.recruit-list {
  width: 80%;
  .recruit-item {
    display: flex;
    align-items: center;
    padding: 32px 0 32px 0;
    position: relative;
    .date-block {
      min-width: 70px;
      background: #ffe5cf;
      border-radius: 16px;
      padding: 24px 24px 16px 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 32px;
      .date-main {
        font-size: 20px;
        font-weight: bold;
        color: #ff9900;
        line-height: 1;
      }
      .date-sub {
        font-size: 14px;
        color: #ff9900;
        margin-top: 8px;
      }
    }
    .content-block {
      flex: 1;
      .title {
        font-size: 23px;
        font-weight: 700;
        color: #222;
        margin-bottom: 16px;
      }
      .desc {
        font-size: 15px;
        color: #666;
      }
    }
    .arrow-block {
      margin-left: 32px;
      display: flex;
      align-items: center;
      .arrow-circle {
        width: 30px;
        height: 30px;
        background: #ff9900;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
        cursor: pointer;
        svg {
          display: block;
        }
      }
    }
    .divider {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 4px;
      background: #e5e5e5;
      border-radius: 2px;
      &.orange {
        background: #ff9900;
      }
    }
  }
}
</style>
