<template>
  <div class="page">
    <div class="page__container">
      <CommonHeader />
      <div
        class="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6"
      >
        <!-- 상단 위젯 영역 -->
        <div class="w-full flex items-center justify-start gap-6">
          <WidgetCurrentWeather :data="store.dataOfCW" />
          <WidgetHourlyWeather :data="store.dataOfHW" />
          <!-- 네이버지도 위젯 -->
          <WidgetNaverMap />
        </div>
        <!-- 하단 위젯 영역 -->
        <div class="w-full flex items-center gap-6">
          <WidgetHighlightWeather :data="store.dataOfHLW" />
          <WidgetOneWeekWeather :data="store.dataOf7DW" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CommonHeader } from "@/components/common";
import {
  WidgetCurrentWeather,
  WidgetHighlightWeather,
  WidgetHourlyWeather,
  WidgetNaverMap,
  WidgetOneWeekWeather,
} from "@/components/widgets";
import { useStore } from "@/store";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

const store = useStore();

onMounted(() => {
  store.fetchApi();
});
</script>

<style lang="scss" scoped></style>
