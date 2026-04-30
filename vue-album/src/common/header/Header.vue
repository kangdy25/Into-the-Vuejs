<template>
  <header class="header">
    <div class="header__child">
      <Avatar class="rounded-sm">
        <AvatarImage src="/assets/images/logo.png" alt="profile" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Do it!</h3>
    </div>
    <div class="header__child">
      <Button variant="secondary">
        <BookMarked class="h-5 w-5 mr-1" />
        북마크
      </Button>
      <Separator orientation="vertical" class="h-10" />
      <div class="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="/assets/images/profile.svg" alt="profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <small class="text-sm font-medium leading-none"
          >9Diin | Do it! Vue.js</small
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Avatar from "@/components/ui/avatar/Avatar.vue";
import AvatarFallback from "@/components/ui/avatar/AvatarFallback.vue";
import AvatarImage from "@/components/ui/avatar/AvatarImage.vue";
import Button from "@/components/ui/button/Button.vue";
import Separator from "@/components/ui/separator/Separator.vue";
import { BookMarked } from "lucide-vue-next";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommonHeader",
  components: {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    BookMarked,
    Separator,
  },
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 24px;
  border-bottom: 1px solid #f5f5f5;

  &__child {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;
  }
}
</style>
