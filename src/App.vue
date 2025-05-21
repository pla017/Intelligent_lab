<script setup lang="ts">
</script>

<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  padding: 2rem;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b883;
}
</style>
