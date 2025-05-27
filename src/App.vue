<script setup lang="ts">
import Header from "@/components/Header.vue";
import Bottom from "./components/Bottom.vue";
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Bottom />
  </div>
</template>

<style scoped></style>
