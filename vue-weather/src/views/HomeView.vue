<template>
  <div class="page">
    <div class="page__container">
      <CommonHeader />
      <div
        class="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6"
      >
        <!-- 상단 위젯 영역 -->
        <div class="w-full flex items-center justify-start gap-6">
          <WidgetCurrentWeather :data="dataOfCW" />
          <WidgetHourlyWeather />
          <!-- 네이버지도 위젯 -->
          <WidgetNaverMap />
        </div>
        <!-- 하단 위젯 영역 -->
        <div class="w-full flex items-center gap-6">
          <WidgetHighlightWeather />
          <WidgetOneWeekWeather />
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
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

const cityName = ref<string>("seoul");
const dataOfCW = reactive({
  temp: 0,
  country: "",
  cityName: "",
  localtime: "",
  iconCode: 0,
  iconUrl: "",
});

const fetchApi = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_WEATHER_BASE_URL}/forecast.json?q=${cityName.value}&days=7&key=${import.meta.env.VITE_WEATHER_API_KEY}`,
    );
    console.log(res);

    const { current, location } = res.data;
    dataOfCW.temp = current.temp_c;
    dataOfCW.country = location.country;
    dataOfCW.cityName = location.name;
    dataOfCW.localtime = location.localtime;
    dataOfCW.iconCode = current.condition.code;
    dataOfCW.iconUrl = current.condition.icon;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  fetchApi();
});
</script>

<style lang="scss" scoped></style>
