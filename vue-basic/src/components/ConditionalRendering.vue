<template>
    <h1>isVisible 값: {{ isVisible }}</h1>
    <h1 v-if="isVisible">이 문장은 isVisible 값이 {{ isVisible }}일 경우에만 보입니다.</h1>

    <button @click="toggleVisibility">버튼</button>

    <hr/>

    <h1 v-if="score > 90">Excellent!!</h1>
    <h1 v-else-if="score > 75">Good!</h1>
    <h1 v-else>Needs Improvement.</h1>

    <hr/>
    <h1 v-if="isVisible">v-if: {{ isVisible }}</h1>
    <h1 v-show="isVisible">v-show: {{ isVisible }}</h1>
    <h1 v-show="!isVisible">v-show: {{ isVisible }}</h1>
    <button @click="toggleVisibility">버튼</button>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true,
            score: 70,
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
    },
};
</script>

<style scoped></style>