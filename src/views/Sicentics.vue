<template>
  <div class="scicentics">
    <div class="scicentics-top">
      <TitleText />
    </div>
    <div class="scicentics-content">
      <!-- 目前研究 -->
      <div class="scicentics-now" ref="currentResearch" id="current">
        <TopTitle title="Recent research" subTitle="目前研究" />
        <div class="scicentics-now-content">
          <span class="title"
            >实验室的研究⽅向集中在理解不同⼼理和社会因素如何共同作⽤促进个体和群体的⼼理健康与
            幸福，尤其是如何在全球化和⽂化多样化背景下，促进社会融合增强幸福感。 </span
          >
          <!-- 栏目 -->
          <div class="scicentics-now-content-list">
            <!-- 第一行 -->
            <div class="lineOne">
              <div class="icon-desc">
                <img src="@/assets/imgs/jijikexue.png" alt="" />
                <div class="ji-icon">
                  <span>积极心理学</span>
                  <span>教育、养⽼、组织</span>
                </div>
                <div class="ji-desc">
                  研究个体如何通过提升⼼理韧性、情
                  绪调节、意义感和⽣活满意度来实现
                  幸福感的提升。包括幸福感的影响因
                  素，如⾃我接纳、社会⽀持、感恩实 践、情绪智⼒等。 
                </div>
              </div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
            <!-- 第二行 -->
            <div class="lineTwo">
              <div class="box"></div>
              <div class="box"></div>
              <div class="icon-desc">
                <img src="@/assets/imgs/shehuixinlixue.png" alt="" />
                <div class="ji-icon">
                  <span>社会⼼理学</span>
                  <span>(教育、养⽼、组织) </span>
                </div>
                <div class="ji-desc">
                  探讨社会因素对个体⼼理健康和幸 福感的影响。例如，群体归属感、
                  社会⽐较、社会规范以及社会⽀持 ⽹络如何塑造个体的⼼理状态和幸
                  福感 。 
                </div>
              </div>
            </div>
            <!-- 第三行F -->
            <div class="lineThree">
              <div class="icon-desc">
                <img src="@/assets/imgs/wenhuaxinlixue.png" alt="" />
                <div class="ji-icon">
                  <span>⽂化⼼理学</span>
                  <span>跨⽂化、情绪、审美</span>
                </div>
                <div class="ji-desc">
                  分析不同⽂化背景下⼈们对幸 福的理解和体验的差异，⽂化
                  在塑造个体情感和⼼理反应中 的作⽤。包括如何跨⽂化差异
                  影响社会互动、情感表达、幸 福感和⼈际关系 。 
                </div>
              </div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 论文发表 -->
      <div class="scicentics-paper" ref="papers" id="papers">
        <TopTitle title="Paper publication" subTitle="论文发表" />
        <PagePaper :englishArticleList="englishArticleList" :chineseArticleList="chineseArticleList" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import TitleText from "./components/TitleText.vue";
import TopTitle from "@/components/TopTitle.vue";
import PagePaper from "./components/PagePaper.vue";
import { useRoute } from 'vue-router';
import { englishArticle, chineseArticle } from "@/api/home.js";
const route = useRoute();
const currentResearch = ref(null);
const papers = ref(null);
const englishArticleList = ref([]);
const chineseArticleList = ref([]);
// 处理页面滚动
const scrollToSection = (section) => {
  const element = section === 'current' ? currentResearch.value : papers.value;
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// 监听路由变化
onMounted(() => {
  const hash = route.hash;
  if (hash === '#current') {
    scrollToSection('current');
  } else if (hash === '#papers') {
    scrollToSection('papers');
  }
});

onMounted(async () => {
  const { code: code1, rows: rows1 } = await englishArticle();
  if (code1 === 200) {
    englishArticleList.value = rows1;
  }
  const { code, rows } = await chineseArticle();
  if (code === 200) {
    chineseArticleList.value = rows;
  }
});
</script>
<style scoped lang="scss">
.scicentics {
  width: 100%;

  .scicentics-top {
    width: 100%;
    height: 35vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("@/assets/imgs/keyanjiuj.png");

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
  }

  .scicentics-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    padding: 0 150px;
    margin-top: 100px;

    .scicentics-now {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      // padding: 0 100px;

      .scicentics-now-content {
        font-size: 16px;
        color: #000;
        text-align: center;
        line-height: 24px;
        font-weight: 400;
        margin-top: 20px;

        .title {
          width: 100%;
          font-family: "HONOR Sans CN";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          text-align: center;
          color: #1b1b1b;
          opacity: 0.6;
        }

        .scicentics-now-content-list {
          width: 100%;
          // height: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-top: 30px;

          .lineThree,
          .lineTwo,
          .lineOne {
            width: 100%;
            display: grid;
            grid-template-columns: 25% 1fr 1fr;
            place-items: center;
            gap: 20px;

            .icon-desc {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 10px;

              .ji-icon {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                font-size: 16px;
                color: #000;

                & > span:first-child {
                  font-size: 20px;
                  font-weight: 600;
                  color: #000;
                }
              }

              .ji-desc {
                width: 100%;
                font-size: 16px;
                color: #000;
                text-align: left;
                line-height: 24px;
                font-weight: 400;
                opacity: 0.6;
              }

              img {
                height: 120px;
              }
            }

            .box {
              width: 100%;
              height: 100%;
              background: #e9e9e9;
              border-radius: 20px;
            }
          }
          .lineTwo {
            grid-template-columns: 1fr 1fr 25%;
          }
        }
      }
    }

    .scicentics-paper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
    }
  }
}
</style>
