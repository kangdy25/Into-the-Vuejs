<template>
  <Pagination
    v-slot="{ page }"
    :total="100"
    :sibling-count="1"
    :show-edges
    :default-page="1"
  >
    <PaginationContent v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrevious />

      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          as-child
        >
          <Button
            class="w-10 h-10 p-0"
            :variant="item.value === currentPage ? 'default' : 'outline'"
          >
            {{ item.value }}
          </Button>
        </PaginationItem>
        <PaginationEllipsis v-else :index="index" :key="item.type" />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationContent>
  </Pagination>
</template>

<script>
import Button from "@/components/ui/button/Button.vue";
import Pagination from "@/components/ui/pagination/Pagination.vue";
import PaginationEllipsis from "@/components/ui/pagination/PaginationEllipsis.vue";
import PaginationFirst from "@/components/ui/pagination/PaginationFirst.vue";
import PaginationLast from "@/components/ui/pagination/PaginationLast.vue";
import PaginationNext from "@/components/ui/pagination/PaginationNext.vue";
import { PaginationList, PaginationListItem, PaginationPrev } from "reka-ui";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommonPagination",
  components: {
    Button,
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
  },
});
</script>

<style lang="scss" scoped></style>
