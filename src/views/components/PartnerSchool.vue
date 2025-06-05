<template>
  <div class="partner-school">
    <!-- 五大学校联盟 -->
    <div class="partner-school-item">
      <span class="title"
        >高校: 五个大学联盟 <span class="en">TECHNICAL SUPPORT</span></span
      >
      <div class="partner-list">
        <div v-for="school in schools" :key="school.name" class="partner-item">
          <img :src="school.img" :alt="school.name" />
          <span>{{ school.name }}</span>
        </div>
      </div>
    </div>
    <!-- 公司 -->
    <div class="partner-company-item">
      <span class="title">公司 <span class="en">TECHNICAL SUPPORT</span></span>
      <div class="partner-list">
        <div
          v-for="company in companies"
          :key="company.name"
          class="partner-item"
        >
          <img :src="company.img" :alt="company.name" />
          <span>{{ company.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import melbourne from "@/assets/imgs/shcool/moerben.png";
import kyoto from "@/assets/imgs/shcool/dongjindaxue.png";
import tokyo from "@/assets/imgs/shcool/jingdudaxue.png";
// import placeholder from '@/assets/imgs/school/placeholder.png';

import alibaba from "@/assets/imgs/company/alibabba.png";
import chinaeastern from "@/assets/imgs/company/dongfanghangkong.png";
import huawei from "@/assets/imgs/company/huawei.png";
import chnenergy from "@/assets/imgs/company/nengyuanjituan.png";
import tencent from "@/assets/imgs/company/tecent.png";
import boc from "@/assets/imgs/company/zhongguoyinhang.png";
import { ref } from "vue";

const schools = ref([
  { name: "墨尔本大学", img: melbourne },
  { name: "京都大学", img: kyoto },
  { name: "东京大学", img: tokyo },
  { name: "111", img: kyoto },
  { name: "111", img: kyoto },
]);

const companies = ref([
  { name: "国能集团", img: chnenergy },
  { name: "中国银行", img: boc },
  { name: "东方航空", img: chinaeastern },
  { name: "华为", img: huawei },
  { name: "阿里", img: alibaba },
  { name: "腾讯", img: tencent },
]);
</script>
<style scoped lang="scss">
.partner-school {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 60px;
  padding: 40px 0;


  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 24px;
    display: block;
    .en {
      font-size: 16px;
      font-weight: normal;
      margin-left: 12px;
      color: #888;
    }
  }
  .partner-list {
    display: flex;
    flex-direction: row;
    gap: 60px;
    flex-wrap: wrap;
    align-items: center;
  }
  .partner-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 160px;
    img {
    //   width: 120px;
      height: 100px;
      object-fit: contain;
      border-radius: 50%;
      background: #eee;
      margin-bottom: 12px;
    }
    span {
      font-size: 20px;
      color: #666;
      text-align: center;
    }
  }
}
</style>
