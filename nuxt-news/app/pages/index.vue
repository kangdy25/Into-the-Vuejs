<template>
  <div class="page">
    <AppBanner />

    <MainContent v-if="store.mainArticle" :data="store.mainArticle" />
    <SkeletonMainContent v-else />

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

      <div class="w-full grid grid-cols-4 gap-6">
        <SubContent
          v-if="store.subArticles.length > 0"
          v-for="article in store.subArticles"
          :key="article.url"
          :data="article"
        />
        <SkeletonSubContent v-else v-for="n in 8" :key="n" />
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
import { useStore } from "@/stores";
import MainContent from "~/components/common/MainContent.vue";
import SubContent from "~/components/common/SubContent.vue";

const store = useStore();

await useAsyncData("news", () => store.getNews(), {
  watch: [() => store.searchValue],
});
</script>
