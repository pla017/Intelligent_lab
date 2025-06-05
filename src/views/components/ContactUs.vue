<template>
  <div class="contact-form">
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="form-group">
          <label>姓名</label>
          <el-input v-model="form.name" class="underline-input" clearable />
        </div>
        <div class="form-group">
          <label>电话</label>
          <el-input v-model="form.phone" class="underline-input" clearable />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <el-input v-model="form.email" class="underline-input" clearable />
        </div>
      </div>
      <div class="form-group">
        <label>地址</label>
        <el-input v-model="form.address" class="underline-input" clearable />
      </div>
      <div class="form-group">
        <label>意见</label>
        <el-input v-model="form.comment" class="underline-input" type="textarea" :rows="3" clearable />
      </div>
      <div class="submit-btn-wrapper">
        <button type="submit">提交</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { ElInput } from 'element-plus'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  comment: ''
})

function handleSubmit() {
  // 这里可以处理表单提交逻辑
  alert('提交成功！')
}
</script>
<style scoped lang='scss'>
.contact-form {
  width: 80%;
//   max-width: 90vw;
  margin: 40px auto;
  font-size: 16px;
  margin-top: 100px;
  form {
    width: 100%;
  }
  .row {
    display: flex;
    gap: 32px;
    margin-bottom: 20px;
    .form-group {
      flex: 1;
      display: flex;
      align-items: center;
      label {
        min-width: 60px;
        margin-bottom: 0;
        margin-right: 16px;
        text-align: left;
        flex-shrink: 0;
      }
      input {
        flex: 1;
        width: auto;
        font-size: 20px;
        border: none;
        border-bottom: 2px solid #888;
        outline: none;
        padding: 5px 10px;
        background: transparent;
        transition: border-color 0.2s;
        border-radius: 0;
        box-sizing: border-box;
      }
      input:focus {
        border-bottom: 2px solid #ffa75a;
      }
    }
  }
  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    label {
      min-width: 60px;
      margin-bottom: 0;
      margin-right: 16px;
      text-align: left;
      flex-shrink: 0;
    }
    input, textarea {
      flex: 1;
      width: auto;
      font-size: 20px;
      border: none;
      border-bottom: 2px solid #888;
      outline: none;
      padding: 5px 10px;
      background: transparent;
      transition: border-color 0.2s;
      border-radius: 0;
      box-sizing: border-box;
    }
    textarea {
      min-height: 60px;
      resize: vertical;
    }
    input:focus, textarea:focus {
      border-bottom: 2px solid #ffa75a;
    }
  }
  .submit-btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    button {
      background: #ffa75a;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      padding: 10px 50px;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover {
      background: #ff9800;
    }
  }
}
.underline-input {
  :deep(.el-input__wrapper) {
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    border-bottom: 2px solid #888 !important;
    background: transparent !important;
    padding: 0 10px !important;
    transition: border-color 0.2s;
  }
  :deep(.el-input__wrapper.is-focus) {
    border-bottom: 2px solid #ffa75a !important;
  }
  :deep(.el-input__inner) {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
    padding: 5px 0 !important;
    font-size: 20px;
  }
  :deep(.el-textarea__inner) {
    background: transparent !important;
    border: none !important;
    border-bottom: 2px solid #888 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 5px 10px !important;
    font-size: 20px;
    resize: vertical;
    transition: border-color 0.2s;
  }
  :deep(.el-textarea__inner:focus) {
    border-bottom: 2px solid #ffa75a !important;
  }
}
</style>
