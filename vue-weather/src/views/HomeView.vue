<template>
  <div class="page">
    <div class="page__container">
      <CommonHeader />
      <div
        class="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6"
      >
        <!-- 상단 위젯 영역 -->
        <div class="w-full flex items-center justify-start gap-6">
          <WidgetCurrentWeather />
          <WidgetHourlyWeather />
        </div>
        <!-- 하단 위젯 영역 -->
        <div class="w-full flex items-center gap-6"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CommonHeader } from "@/components/common";
import {
  WidgetCurrentWeather,
  WidgetHourlyWeather,
} from "@/components/widgets";
</script>

<style lang="scss" scoped></style>
