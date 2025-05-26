<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <div>
    <Header />
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
