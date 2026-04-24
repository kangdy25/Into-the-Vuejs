<template>
    <!-- v-on 디렉티브를 사용하여 클릭 이벤트 핸들러를 바인딩 -->
    <button @click="handleClick">클릭하세요</button>
</template>

<script>
export default {
    methods: {
        handleClick(event) {
            console.log(event); // 이벤트 객체 전체 출력
            console.log("클릭한 좌표:", event.clientX, event.clientY);
        },
    },
};
</script>

<style scoped></style>