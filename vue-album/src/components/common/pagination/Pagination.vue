<template>
  <Pagination
    :total="total >= 100 ? 1000 : total"
    :items-per-page="30"
    :default-page="currentPage"
  >
    <PaginationContent v-slot="{ items }">
      <PaginationFirst @click="changePage(1)" />
      <PaginationPrevious @click="changePage(currentPage - 1)" />

      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          as-child
        >
          <Button
            @click="changePage(item.value)"
            :variant="item.value === currentPage ? 'default' : 'outline'"
          >
            {{ item.value }}
          </Button>
        </PaginationItem>
        <PaginationEllipsis v-else :index="index" />
      </template>

      <PaginationNext @click="changePage(currentPage + 1)" />
      <PaginationLast @click="changePage(Math.min(totalPages, 34))" />
    </PaginationContent>
  </Pagination>
</template>

<script lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Pagination from "@/components/ui/pagination/Pagination.vue";
import PaginationEllipsis from "@/components/ui/pagination/PaginationEllipsis.vue";
import PaginationFirst from "@/components/ui/pagination/PaginationFirst.vue";
import PaginationLast from "@/components/ui/pagination/PaginationLast.vue";
import PaginationNext from "@/components/ui/pagination/PaginationNext.vue";
import PaginationContent from "@/components/ui/pagination/PaginationContent.vue";
import PaginationPrevious from "@/components/ui/pagination/PaginationPrevious.vue";
import PaginationItem from "@/components/ui/pagination/PaginationItem.vue";
import { defineComponent } from "vue";
import { useStore } from "@/stores";

export default defineComponent({
  name: "CommonPagination",
  components: {
    Button,
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationFirst,
    PaginationItem,
    PaginationLast,
    PaginationNext,
    PaginationPrevious,
  },
  data() {
    return {
      store: useStore(),
    };
  },
  computed: {
    currentPage() {
      return this.store.page;
    },
  },
  methods: {
    changePage(page: number) {
      this.store.setPage(page);
    },
  },
  props: {
    total: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
