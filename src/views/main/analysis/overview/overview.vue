<template>
  <div class="overview">
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">
          <strong>关于</strong>
        </div>
      </template>
      <h4 class="about-content">
        vue3Admin是基于Vue3﹑Vuex﹑VueRouter﹑Webpack﹑ElementPlus﹑TypeScript﹑Echart5等后台系统解决方案
      </h4>
    </el-card>
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">技术栈</div>
      </template>
      <template v-for="item in techniques" :key="item.name">
        <span class="techniques-info">
          <span class="techniques-info-item">• {{ item.name }} :</span>
          <el-link type="primary">{{ item.value }}</el-link></span
        >
      </template>
    </el-card>
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">生产环境依赖</div>
      </template>
      <div class="dependencies"></div>
      <template v-for="item in dependencies" :key="item.name">
        <span class="techniques-info">
          <span class="techniques-info-item">• {{ item.name }} :</span>
          <el-link type="primary">{{ item.value }}</el-link></span
        >
      </template>
    </el-card>
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">项目结构</div>
      </template>
    </el-card>
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">项目规范</div>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "overview",
  setup() {
    const techniques = [
      { name: "开发工具", value: "Visual Studio Code" },
      { name: "编程语言", value: "TypeScript 4.x + javaScript" },
      { name: "构建工具", value: "Webpack5.x" },
      { name: "前端框架", value: "Vue 3.x" },
      { name: "路由工具", value: "Vue Router 4.x" },
      { name: "状态管理", value: "Vuex 4.x" },
      { name: "UI框架", value: "Element Plus" },
      { name: "可视化", value: "Echarts5.x" },
      { name: "富文本", value: "WangEditor" },
      { name: "工具库", value: "@vueuse/core + dayjs + countup.js" },
      { name: "CSS 预编译", value: "Less" },
      { name: "HTTP 工具", value: "Axios" },
      { name: "Git Hook 工具", value: "husky" },
      { name: "代码规范", value: "EditorConfig + Prettier + ESLint" },
      { name: "提交规范", value: "Commitizen + CommitLint" },
      { name: "自动部署", value: "Centos + Jenkins + Nginx" }
    ]
    const dependencies = [
      { name: "axios", value: "0.21.1" },
      { name: "core-js", value: "3.17.3" },
      { name: "dayjs", value: "1.10.7" },
      { name: "echarts", value: "5.2.1" },
      { name: "element-plus", value: "1.0.2-beta.62" },
      { name: "normalize.css", value: "8.0.1" },
      { name: "serve", value: "12.0.1" },
      { name: "vue", value: "3.2.4" },
      { name: "vue-router", value: "4.0.11" },
      { name: "vuex", value: "4.0.2" }
    ]

    return { techniques, dependencies }
  }
})
</script>

<style scoped lang="less">
.box-card {
  margin-bottom: 20px;
  width: 100%;
  .about-content {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.techniques-info {
  display: flex;
  justify-content: left;
  align-items: center;
  .techniques-info-item {
    margin-right: 20px;
    padding: 5px 0;
  }
}

.constructionText {
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>
