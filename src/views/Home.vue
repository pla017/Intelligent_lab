<template>
  <div class="home">
    <SwiperImg :imgs="imgs" />
    <div class="top-tile">
      <div class="top-title">
        <span>认知 ｜ 行为 ｜ 生活</span>
        <span>AI FOR WELLBEING LAB</span>
        <span>智能幸福实验室</span>
      </div>
      <div class="more-btn">
        <span>了解更多</span>
        <img src="@/assets/imgs/right.png" alt="" />
      </div>
    </div>

    <div class="content">
      <!-- 实验室介绍 -->
      <div class="lab-desc">
        <div class="desc-content">
          <span class="introduction">introduction</span>
          <div class="title">
            <span>智能幸福实验室</span>
            <span>AI for Wellbeing Lab</span>
          </div>
          <div class="desc">
            <span
              ><span class="title-text">研究目标：</span>AI for Wellbeing
              Lab将心理学、神经科学、工程学、信息科学等学科融合，探索人类认知、行为和文化机制，旨在把研究成果应用于提升社会幸福。
            </span>
            <span>
              <span class="title-text">培养目标：</span
              >实验室致力于培养能从跨学科视角创新思考人类认知、行为和生活的学者，结合人类行为学和人工智能技术教育，解决复杂心理和社会问题，推动个人和社会福祉的发展。
            </span>
          </div>
        </div>
        <img
          src="@/assets/imgs/a-man-working-in-a-call-center-8867431.png"
          alt=""
        />
      </div>

      <!-- 负责人 -->
      <div class="lab-leader">
        <TopTitle title="principal" subTitle="负责人" />
        <div class="lab-leader-content">
          <div class="content-box">
            <div class="leader-box" v-for="item in leaderList" :key="item.id">
              <img :src="item.avatar" alt="" />
              <div class="leader-info">
                <div class="leader-name">
                  <span class="name">{{ item.pName }}</span>
                  <span>{{ item.identity }}</span>
                </div>
                <div class="line"></div>
                <span>{{ item.position }}</span>
                <div class="positon">
                  <span>{{ item.domain }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 在读博士 -->
      <div class="alumni-container">
        <TopTitle title="phd candidate" subTitle="在读博士" />
        <div class="alumni-content">
            <Alumni v-for="(item, index) in postgraduateList" :info="item" :key="index" />
        </div>
      </div>

      <!-- 在读硕士 -->
      <div class="alumni-container">
        <TopTitle title="postgraduate" subTitle="在读硕士" />
        <div class="alumni-content">
          <Alumni v-for="(item, index) in masterList" :info="item"  :key="index" />
        </div>
      </div>

      <!-- 研究助理 -->
      <div class="alumni-container">
        <TopTitle title="Research assistant" subTitle="研究助理" />
        <div class="alumni-content">
          <Alumni v-for="(item, index) in researchAssistantList" :info="item"  :key="index" />
        </div>
      </div>

      <!-- 毕业校友 -->
      <div class="alumni-container">
        <TopTitle title="alumnus" subTitle="毕业校友" />
        <div class="alumni-content">
          <Alumni v-for="(item, index) in alumniList" :info="item"  :key="index" />
        </div>
      </div>

      <!-- 成长足迹 -->
      <div class="growth-container">
        <TopTitle title="Growth footprint" subTitle="成长足迹" />
        <GrwthSwiper />
      </div>
      <!-- 介绍视频 -->
      <div class="video-container">
        <TopTitle title="video" subTitle="介绍视频" />
        <IntroduceVideo />
      </div>
      <!-- 动态 -->
      <div class="dynamic-container">
        <TopTitle title="dynamic condition" subTitle="动态" />
        <div class="dynamic-content">
          <Dynamic v-for="(item, index) in dynamicList" :dynamic="item" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SwiperImg from "@/components/SwiperImg.vue";
import { ref, onMounted } from "vue";
import img from "@/assets/imgs/top.png";
import TopTitle from "@/components/TopTitle.vue";
import Alumni from "./components/Alumni.vue";
import GrwthSwiper from "./components/GrwthSwiper.vue";
import IntroduceVideo from "./components/introduceVideo.vue";
import Dynamic from "./components/Dynamic.vue";
import TitleText from "./components/TitleText.vue";
import { personInfo, dynamic } from "@/api/home.js";
let imgs = ref([img, img, img]);

// 添加响应式数据
const personList = ref([]);

let leaderList = ref([]);
//在读博士
let postgraduateList = ref([]); 
//在读硕士
let masterList = ref([]);

//研究助理
let researchAssistantList = ref([]);
//毕业校友
let alumniList = ref([]);

let dynamicList = ref([]);

onMounted(async () => {
  const { code, rows } = await personInfo();
  if (code === 200) {
    personList.value = rows;
  }
  leaderList.value = personList.value.filter((item) => item.type === 1);
  postgraduateList.value = personList.value.filter((item) => item.type === 2);
  masterList.value = personList.value.filter((item) => item.type === 3);
  researchAssistantList.value = personList.value.filter((item) => item.type === 4);
  console.log(researchAssistantList.value);
  alumniList.value = personList.value.filter((item) => item.type === 5);
  const { code: code1, rows: rows1 } = await dynamic();
  if (code === 200) {
    dynamicList.value = rows1;
  }
});
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  position: relative;
  .top-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3%;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    .top-title {
      font-weight: 600;
      color: #fff;
      text-align: center;
      font-size: 30px;
      span {
        display: block;
      }
      & > :nth-child(2) {
        font-size: 48px;
      }
    }
    .more-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border: 1px solid #ffffff;
      border-radius: 20px;
      padding: 10px 20px;
      margin-top: 20px;
      cursor: pointer;

      span {
        font-size: 14px;
        color: #fff;
      }
      img {
        width: 10px;
        height: 10px;
      }
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    padding: 0 150px;
    // border: 1px solid red;
    .lab-desc {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      margin-top: 20px;
      .desc-content {
        width: 100%;
        display: grid;
        grid-auto-rows: auto;
        place-items: center;
        gap: 20px;
        padding: 0 100px;
        .introduction {
          user-select: none;
          font-size: 14px;
          color: #999;
          justify-self: flex-start;

          /* introduction */

          font-family: "Gill Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px;
          /* or 178% */
          text-transform: uppercase;

          color: #ffa159;

          opacity: 0.87;
        }
        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          span {
            font-size: 26px;
            font-weight: 600;
            color: #000;
          }
        }
        .desc {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          color: #767676;

          .title-text {
            font-family: "HONOR Sans CN";
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 32px;
            /* or 178% */
            text-align: justify;
            color: #1b1b1b;
            opacity: 0.6;
          }
        }
      }
      img {
        height: 400px;
      }
    }

    .lab-leader {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 90px;
      margin-top: 80px;

      .lab-leader-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .content-box {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-items: center;
          gap: 20px;
          .leader-box {
            width: 100%;
            display: grid;
            grid-template-columns: 20% 1fr;
            place-items: center;
            gap: 10px;
            img {
              width: 100px;
              height: 100px;
            }
            .leader-info {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-self: start;
              gap: 8px;

              .leader-name {
                display: flex;
                align-items: center;
                gap: 10px;
                .name {
                  font-size: 20px;
                  font-weight: 600;
                  color: #000;
                }
              }

              .positon {
                display: flex;
                flex-direction: column;

                span {
                  font-family: "HONOR Sans CN";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 28px;
                  /* or 156% */
                  text-align: justify;

                  color: #1b1b1b;

                  opacity: 0.6;
                }
              }

              .line {
                width: 136px;
                height: 0px;
                border: 1px solid #ffa159;
              }
            }
          }
        }
      }
    }

    .alumni-container {
      width: 100%;
      display: flex;
      flex-direction: column;

      .alumni-content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 70px;
        gap: 20px;
      }
    }

    .growth-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 60px;
    }
    .video-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 60px;
    }

    .dynamic-container {
      width: 100%;

      .dynamic-content {
        width: 100%;
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
}
</style>
