<template>
  <Card class="w-1/4 min-w-[25%] h-[260px] p-0 overflow-hidden">
    <NaverMap
      style="width: 100%; height: 100%"
      :map-options="mapOptions"
      @on-load="onLoadMap"
    />
  </Card>
</template>

<script setup lang="ts">
import { NaverMap } from "vue3-naver-maps";
import { Card } from "@/components/ui/card";

const mapOptions = {
  latitude: 37.51347,
  longitude: 127.041722,
  zoom: 14,
};

const onLoadMap = (map: any) => {
  console.log("Map loaded:", map);
};
</script>
