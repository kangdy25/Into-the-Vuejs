<template>
    <h1>{{ message }}</h1>
    <h1>{{ messageHTML }}</h1>
    <h1 v-html="messageHTML"></h1>

    <hr />
    <h1 v-bind:class="className">이렇게 사용해야 해요!</h1>
    <h1 v-bind:class="{ active: isActive }">이렇게 사용해야 해요!</h1>

    <hr />
    <h1 :class="className">이렇게 사용해야 해요!</h1>
    <h1 :class="{ active: isActive }">이렇게 사용해야 해요!</h1>

    <hr />
    <h3 style="color: red; font-size: 24px">인라인 스타일</h3>
    <h3 :style="{ color: fontColor, fontSize: fontSize + 'px' }">
        스타일 바인딩
    </h3>
</template>

<script>
export default {
    data() {
        return {
            message: "오리지널 메시지 데이터",
            messageHTML: "<h2 style='color: red'>HTML 코드 데이터</h2>",
            className: "title",
            isActive: true,
            fontColor: "#888888",
            fontSize: 40,
        };
    },
};
</script>

<style scoped>
h1.active {
    color: green;
}

.title {
    color: blue;
}
</style>
