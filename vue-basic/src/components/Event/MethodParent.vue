<template>
    <ChildComponent @send-event="getData" />
</template>

<script>
import ChildComponent from "./MethodChild.vue";

export default {
    components: { ChildComponent },
    methods: {
        getData(event) {
            console.log(event);
        },
    },
};
</script>

<style scoped></style>
