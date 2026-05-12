<template>
  <div class="page">
    <AppBanner />

    <SkeletonMainContent />
    <Separator label="0r" class="my-6" />
    <div class="w-full flex flex-col gap-6">
      <div class="w-full flex items-center justify-between">
        <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight">
          Latest News
        </h4>
        <Button class="bg-red-500 hover:bg-red-600">
          See all
          <ArrowRight />
        </Button>
      </div>

      <!-- 로딩 중일 때 SkeletonSubContent 표시 -->
      <div class="w-full grid grid-cols-4 gap-6">
        <SkeletonSubContent />
        <SkeletonSubContent />
        <SkeletonSubContent />
        <SkeletonSubContent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBanner from "~/components/common/AppBanner.vue";
import SkeletonMainContent from "~/components/skeleton/SkeletonMainContent.vue";
import SkeletonSubContent from "~/components/skeleton/SkeletonSubContent.vue";

import Separator from "~/components/ui/separator/Separator.vue";
import { ArrowRight } from "lucide-vue-next";
</script>
