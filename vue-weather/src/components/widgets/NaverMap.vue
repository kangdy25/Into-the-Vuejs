<template>
  <Card class="w-1/4 min-w-[25%] h-[260px] p-0 overflow-hidden">
    <NaverMap style="width: 100%; height: 100%" :map-options="mapOptions">
      <NaverMarker
        v-for="position in positions"
        :latitude="position.lat"
        :longitude="position.lng"
        @onLoad="onLoadMarker($event)"
        @click="handleSearch(position.cityName)"
      />
    </NaverMap>
  </Card>
</template>

<script setup lang="ts">
import { NaverMap, NaverMarker } from "vue3-naver-maps";
import { Card } from "@/components/ui/card";
import { useStore } from "@/store";
import { ref } from "vue";
import positions from "@/constant/map-position.json";

const store = useStore();

const marker = ref();

const mapOptions = {
  latitude: 36.78347,
  longitude: 127.041722,
  zoom: 7,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};

const onLoadMarker = (markerObject: any) => {
  marker.value = markerObject;
};

const handleSearch = (selected: string) => {
  store.cityName = selected;
  store.fetchApi();
};
</script>
