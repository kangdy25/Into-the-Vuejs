<template>
    <div>
        <h1>배워볼 프로그래밍 프레임워크: {{ language }}</h1>
        <h1>03장 Vue.js 기초 문법 이해하기</h1>
        <h2>컨텐츠: {{ content }}</h2>
        <h3>작성자: {{ author }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            language: "Vue.js",
            content: "데이터 정의와 데이터 보간법",
            author: "홍길동",
        };
    },
};
</script>
