<script setup lang="ts">
import AppHeader from "./components/common/AppHeader.vue";
</script>

<template>
  <div class="app">
    <AppHeader />
    <NuxtPage />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}

.app {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.page {
  width: 100%;
  max-width: 1132px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 57px;
  padding: 24px 0;

  gap: 24px;
}
</style>
