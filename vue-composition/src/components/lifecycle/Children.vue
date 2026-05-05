<template>
  <div>저는 자식 컴포넌트입니다.</div>
</template>

<script setup>
import { onBeforeUnmount, onUnmounted } from "vue";

// 컴포넌트가 언마운트되기 직전
onBeforeUnmount(() => {
  console.log("ChildComponent: onBeforeUnmount 호출됨");
});

// 컴포넌트가 언마운트된 직후
onUnmounted(() => {
  console.log("ChildComponent: onUnmounted 호출됨");
});
</script>
