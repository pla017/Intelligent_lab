<template>
  <div class="About">
    <div class="About-top">
      <TitleText />
    </div>

    <div class="About-content">
      <!-- 实验活动 -->
      <div class="experiment-activity" id="experiment">
        <TopTitle title="experiment activity" subTitle="实验活动" />
        <div class="experiment-activity-content"></div>
      </div>

      <!-- 合作机会 -->
      <div class="cooperation-opportunity" id="join">
        <TopTitle title="cooperation opportunity" subTitle="合作机会" />
        <div class="cooperation-opportunity-content">
          <div
            v-for="(item, index) in cooperationList"
            :key="item.title"
            class="cooperation-opportunity-item"
            @mouseenter="hoverIndex = index"
            @mouseleave="hoverIndex = -1"
          >
            <img :src="item.img" alt="" />
            <div class="desc">
              <span>{{ item.title }}</span>
              <span>{{ item.desc }}</span>
            </div>

            <div>
              <transition name="fade-dropdown">
                <div v-show="hoverIndex === index" class="dropdown">
                  <div class="dropdown-arrow"></div>
                  <div class="dropdown-line"></div>
                  <div class="dropdown-contact-title">
                    {{ item.contact.name }}
                  </div>
                  <div class="dropdown-contact-info">
                    联系电话：{{ item.contact.phone }}
                  </div>
                  <div class="dropdown-contact-info">
                    联系邮箱：{{ item.contact.email }}
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <!-- 合作名单列表 -->
      <div class="cooperation-list" id="list">
        <TopTitle title="cooperation list" subTitle="合作名单列表" />
        <PartnerSchool />
      </div>

      <!-- 人才招募 -->
      <div class="recruitment" id="recruit">
        <TopTitle title="Talent recruitment" subTitle="人才招募" />
        <RecruiIList :recruitList="recruitList" />
      </div>

      <!-- 联系我们 -->
      <div class="contact-us" id="contact">
        <TopTitle title="contact us" subTitle="联系我们" />
        <ContactUs />
      </div>

      <Map />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import TopTitle from "@/components/TopTitle.vue";
import TitleText from "./components/TitleText.vue";

import jishuzhichi from "@/assets/imgs/jishuzhichi.png";
import xueshuhezuo from "@/assets/imgs/shelijiangxuejin.png";
import reward from "@/assets/imgs/shelijiangxuejin.png";
import PartnerSchool from "./components/PartnerSchool.vue";
import RecruiIList from "./components/RecruiIList.vue";
import ContactUs from "./components/ContactUs.vue";
import Map from "./components/Map.vue";
import { recruit } from "@/api/home.js";
let hoverIndex = ref(-1);

let cooperationList = ref([
  {
    img: jishuzhichi,
    title: "技术支持",
    desc: "TECHNICAL SUPPORT",
    contact: {
      name: "邢老师",
      phone: "62792231",
      email: "jjxlx@tsinghua.edu.cn",
    },
  },
  {
    img: xueshuhezuo,
    title: "学术合作",
    desc: "ACADEMIC COOPERATION",
    contact: {
      name: "邢老师",
      phone: "62792231",
      email: "jjxlx@tsinghua.edu.cn",
    },
  },
  {
    img: reward,
    title: "设立奖学金",
    desc: "SET UP SCHOLARSHIPS",
    contact: {
      name: "邢老师",
      phone: "62792231",
      email: "jjxlx@tsinghua.edu.cn",
    },
  },
]);

let recruitList = ref([]);

onMounted(async () => {
  const { code, rows } = await recruit();
  if (code === 200) {
    recruitList.value = rows;
  }
});
</script>
<style scoped lang="scss">
.dropdown-arrow {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 8px;
  z-index: 11;
  pointer-events: none;
  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 8px;
    background: transparent;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background: #191919;
  }
}

.dropdown-line {
  position: absolute;
  top: -6px;
  left: 0;
  width: 100%;
  height: 5px;
  background: #191919;
  z-index: 10;
  border-radius: 2px 2px 0 0;
}

.dropdown {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  min-width: 120px;
  z-index: 10;
  padding: 24px 24px 16px 24px;
  margin-top: 12px;
  width: 360px;
  height: auto;
}

.dropdown-item {
  padding: 8px 24px;
  white-space: nowrap;
  cursor: pointer;
  position: relative;

  &.active {
    color: #ff0000;
    font-weight: 500;
    background: transparent;
  }

  &:hover {
    background: #f5f5f5;
  }
}

.fade-dropdown-enter-active,
.fade-dropdown-leave-active {
  transition: opacity 0.25s;
}
.fade-dropdown-enter-from,
.fade-dropdown-leave-to {
  opacity: 0;
}
.fade-dropdown-enter-to,
.fade-dropdown-leave-from {
  opacity: 1;
}
.About {
  width: 100%;

  .About-top {
    width: 100%;
    height: 35vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("@/assets/imgs/shiyanhuodng.png");

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
  }

  .About-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    gap: 100px;

    .experiment-activity {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 100px;

      .experiment-activity-content {
        width: 60%;
        height: 450px;
        background: #d9d9d9;
        border-radius: 34px;
      }
    }

    .cooperation-opportunity {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 100px;

      .cooperation-opportunity-content {
        width: 70%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        gap: 10px;

        .cooperation-opportunity-item {
          position: relative;
          width: 100%;
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          cursor: pointer;
          background: linear-gradient(
            180deg,
            #ffe4d0 0%,
            rgba(250, 244, 239, 0.6) 100%
          );
          border-radius: 13px;

          .desc {
            display: flex;
            flex-direction: column;
            align-items: center;

            & > :nth-child(1) {
              font-size: 20px;
              font-weight: 600;
              color: #000;
            }
            & > :nth-child(2) {
              font-size: 16px;

              color: #1b1b1b;
            }
          }

          img {
            height: 120px;
          }
        }
      }
    }

    .cooperation-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 100px;
    }

    .recruitment {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 100px;
    }

    .contact-us {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}

.dropdown-contact-title {
  color: #ff9900;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}
.dropdown-contact-info {
  color: #222;
  font-size: 16px;
  margin-bottom: 6px;
}
</style>
