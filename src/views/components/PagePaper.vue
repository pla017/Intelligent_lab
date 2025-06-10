<template>
  <div class="paper-container">
    <!-- 切换语言标签栏 -->
    <div class="tab-container">
      <div class="tabs">
        <div
          class="tab-item"
          :class="{ active: language === 'en' }"
          @click="language = 'en'"
        >
          英文论文
        </div>
        <div
          class="tab-item"
          :class="{ active: language === 'zh' }"
          @click="language = 'zh'"
        >
          中文论文
        </div>
      </div>
    </div>

    <!-- 论文列表 -->
    <div class="paper-list">
      <PaperItem
        v-for="(paper, index) in currentPageData"
        :key="index"
        :paper="paper"
        :index="(currentPage - 1) * 10 + index + 1"
      />
    </div>

    <!-- 分页器 -->
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        :total="totalItems"
        :page-size="10"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import PaperItem from "./PaperItem.vue";
const { englishArticleList, chineseArticleList } = defineProps(["englishArticleList", "chineseArticleList"]);
// 当前语言
const language = ref("en");

// 分页相关数据
const currentPage = ref(1);
const totalItems = ref(100);

// 模拟论文数据
// const papers = reactive([
//   {
//     text: "F Guan, C Zhan, S Li, S Tong, K Peng （2024）Effects of self-compassion on aggression and its psychological mechanism through perceived stress. BMC Psychology 12 (1), 1-12 1",
//   },

//   {
//     text: "F Guan, C Zhan, S Li, S Tong, K Peng （2024）Effects of self-compassion on aggression and its psychological mechanism through perceived stress. BMC Psychology 12 (1), 1-12 1",
//   },
//   {
//     text: "F Guan, C Zhan, S Li, S Tong, K Peng （2024）Effects of self-compassion on aggression and its psychological mechanism through perceived stress. BMC Psychology 12 (1), 1-12 1",
//   },
//   {
//     text: "F Guan, C Zhan, S Li, S Tong, K Peng （2024）Effects of self-compassion on aggression and its psychological mechanism through perceived stress. BMC Psychology 12 (1), 1-12 1",
//   },
//   {
//     text: "F Guan, C Zhan, S Li, S Tong, K Peng （2024）Effects of self-compassion on aggression and its psychological mechanism through perceived stress. BMC Psychology 12 (1), 1-12 1",
//   },
//   {
//     text: "F Guan, C Zhan, S Li, S Tong, K Peng （2024）Effects of self-compassion on aggression and its psychological mechanism through perceived stress. BMC Psychology 12 (1), 1-12 1",
//   },
//   {
//     text: "F Guan, C Zhan, S Li, S Tong, K Peng （2024）Effects of self-compassion on aggression and its psychological mechanism through perceived stress. BMC Psychology 12 (1), 1-12 1",
//   },
// ]);

// 计算当前页显示的数据
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * 10;
  const end = start + 10;
  return language.value === "en" ? englishArticleList.slice(start, end) : chineseArticleList.slice(start, end);
});

// 处理页码变化
const handleCurrentChange = (val) => {
  currentPage.value = val;
};
</script>

<style scoped lang="scss">
.paper-container {
  margin: 40px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  .tab-container {
    width: 100%;
    background: #e9e9e9;
    border-radius: 8px;
    padding: 12px 0;
    user-select: none;

    .tabs {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 100%;
      padding: 0 20%;

      .tab-item {
        padding: 4px 0;
        cursor: pointer;
        font-size: 14px;
        color: #606266;
        position: relative;
        z-index: 1;
        text-align: center;
        white-space: nowrap;
        width: 120px;

        &:hover {
          color: #ff6b00;
        }

        &.active {
          color: #ff6b00;
          font-weight: bold;
        }
      }

      &::before {
        content: "";
        position: absolute;
        width: 120px;
        height: 2px;
        background: #ff6b00;
        transition: transform 0.3s ease;
        bottom: -4px;
        left: 20%;
      }

      &:has(.active:last-child)::before {
        left: auto;
        right: 20%;
      }
    }
  }

  .paper-list {
    width: 100%;
    margin-top: 20px;
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    :deep(.el-pagination) {
      .el-pager li {
        margin: 0 4px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        border: none;
        background: #f5f5f5;
        font-weight: normal;
        color: #606266;

        &:not(.is-disabled) {
          &:hover {
            color: #fff;
            background-color: #ff6b00;
          }
        }

        &.is-active {
          background-color: #ff6b00;
          color: white;
        }
      }

      .btn-prev,
      .btn-next {
        margin: 0 4px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        border: none;
        background: #f5f5f5;
        color: #606266;

        &:hover {
          color: #fff;
          background-color: #ff6b00;
        }

        &:disabled {
          color: #c0c4cc;
          background: #f5f5f5;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
