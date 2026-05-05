<script setup lang="ts">
import Ref from "./components/Ref.vue";
import Reactive from "./components/Reactive.vue";
import Computed from "./components/Computed.vue";
import Watch from "./components/Watch.vue";
import WatchEffect from "./components/WatchEffect.vue";
import Parent from "./components/lifecycle/Parent.vue";
import Pinia from "./components/Pinia.vue";
import RefInHTML from "./DOM/RefInHTML.vue";
import DefineExposeParent from "./DOM/DefineExposeParent.vue";
</script>

<template>
  <main>
    <!-- <Ref /> -->
    <!-- <Reactive /> -->
    <!-- <Computed /> -->
    <!-- <Watch /> -->
    <!-- <WatchEffect /> -->
    <!-- <Parent /> -->
    <!-- <Pinia /> -->
    <!-- <RefInHTML /> -->
    <DefineExposeParent />
  </main>
</template>

<style scoped></style>
