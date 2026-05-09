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
          <WidgetHourlyWeather :data="dataOfHW" />
          <!-- 네이버지도 위젯 -->
          <WidgetNaverMap />
        </div>
        <!-- 하단 위젯 영역 -->
        <div class="w-full flex items-center gap-6">
          <WidgetHighlightWeather :data="dataOfHLW" />
          <WidgetOneWeekWeather :data="dataOf7DW" />
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

interface ForecastDay {
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      code: number;
      icon: string;
    };
  };
  date_epoch: string;
}

const cityName = ref<string>("seoul");
const dataOfCW = reactive({
  temp: 0,
  country: "",
  cityName: "",
  localtime: "",
  iconCode: 0,
  iconUrl: "",
});
const dataOfHW = ref([]);
const dataOfHLW = reactive({
  minTemp: 0,
  maxTemp: 0,
  sunrise: "",
  sunset: "",
  humidity: 0,
  pressure: 0,
  visibility: 0,
  feelsLike: 0,
});
const dataOf7DW = ref([]);

const fetchApi = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_WEATHER_BASE_URL}/forecast.json?q=${cityName.value}&days=7&key=${import.meta.env.VITE_WEATHER_API_KEY}`,
    );
    const { current, location, forecast } = res.data;

    // 현재 날씨 위젯 컴포넌트에서 필요한 데이터
    dataOfCW.temp = current.temp_c;
    dataOfCW.country = location.country;
    dataOfCW.cityName = location.name;
    dataOfCW.localtime = location.localtime;
    dataOfCW.iconCode = current.condition.code;
    dataOfCW.iconUrl = current.condition.icon;

    // 시간대별 날씨 위젯 컴포넌트에서 필요한 데이터
    dataOfHW.value = forecast.forecastday[0].hour;

    // 하이라이트 날씨 위젯 컴포넌트에서 필요한 데이터
    dataOfHLW.minTemp = forecast.forecastday[0].day.mintemp_c;
    dataOfHLW.maxTemp = forecast.forecastday[0].day.maxtemp_c;
    dataOfHLW.sunrise = forecast.forecastday[0].astro.sunrise;
    dataOfHLW.sunset = forecast.forecastday[0].astro.sunset;
    dataOfHLW.humidity = current.humidity;
    dataOfHLW.pressure = current.pressure_mb;
    dataOfHLW.visibility = current.vis_km;
    dataOfHLW.feelsLike = current.feelslike_c;

    // 주간 날씨 위젯 컴포넌트에서 필요한 데이터
    dataOf7DW.value = forecast.forecastday.map((item: ForecastDay) => {
      return {
        maxTemp: Math.round(item.day.maxtemp_c),
        minTemp: Math.round(item.day.mintemp_c),
        date: item.date_epoch,
        iconCode: item.day.condition.code,
        isDay: item.day.condition.icon.includes("day"),
      };
    });
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  fetchApi();
});
</script>

<style lang="scss" scoped></style>
