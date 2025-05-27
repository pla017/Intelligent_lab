<template>
  <div class="Bottom">
    <div class="footer-content">
      <div class="footer-section about">
        <div class="footer-title">关于我们</div>
        <div class="footer-link">科学研究</div>
        <div class="footer-link">资源中心</div>
        <div class="footer-link">联系我们</div>
      </div>
      <div class="footer-section contact">
        <div class="footer-title">联系我们</div>
        <div class="footer-info">电话：<span>62792343</span></div>
        <div class="footer-info">地址：北京市海淀区清华大学学堂路</div>
        <div class="footer-info">邮箱：jzhong@tsinghua.edu.cn</div>
      </div>
      <div class="footer-section links">
        <div class="footer-title">外部链接</div>
        <div class="footer-link">知识产权委员会</div>
        <div class="footer-link">企业社会责任</div>
        <div class="footer-link">人文交流基金</div>
        <div class="footer-qrcode">
          <!-- 二维码已隐藏，如需显示请取消注释 -->
          <img src="@/assets/imgs/code.png" alt="二维码" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.Bottom {
  width: 100%;
  min-height: 220px;
  background-color: #fff;
  background-image: url('@/assets/imgs/bttom.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 100px;
  display: flex;
  align-items: flex-end;
  .footer-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 40px 20px 40px;
    // background: rgba(255, 128, 0, 0.5); // 橙色半透明遮罩
    box-sizing: border-box;
    .footer-section {
      display: flex;
      flex-direction: column;
      color: #fff;
      min-width: 180px;
      .footer-title {
        font-weight: bold;
        margin-bottom: 12px;
        font-size: 18px;
        letter-spacing: 1px;
      }
      .footer-link, .footer-info {
        margin-bottom: 8px;
        font-size: 15px;
        letter-spacing: 0.5px;
        transition: color 0.2s;
      }
      .footer-link:hover {
        color: #ffd700;
        cursor: pointer;
      }
      .footer-qrcode {
        margin-top: 10px;
        // display: none; // 隐藏二维码
        height: 100px;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
