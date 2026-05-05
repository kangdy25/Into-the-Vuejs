<template>
  <h1>{{ props.userName }} / {{ props.userAge }}</h1>
</template>

<script lang="ts" setup>
import { toRef } from "vue";

interface Props {
  userName: string;
  userAge: string;
}

const props = defineProps<Props>();
const userName = toRef(props, "userName");
</script>

<style scoped></style>
