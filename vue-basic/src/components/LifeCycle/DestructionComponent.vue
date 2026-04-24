<template>
    <div>
        <h1>{{ count }}</h1>
        <h2>Vue.js 라이프사이클 테스트</h2>
        <button @click="incrementCount">카운트 증가</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 10,
        };
    },
    /** 마운트 단계(Mounting) */
    beforeMount() {
        console.log(
            "라이프사이클 훅 - beforeMount: DOM 렌더링 직전 (아직 화면에 표시되지 않음)",
            document.querySelector("h1"),
        );
    },
    mounted() {
        console.log(
            "라이프사이클 훅 - mounted: DOM 렌더링 완료 (화면에 표시됨)",
            document.querySelector("h1"),
        );
    },
    beforeUnmount() {
        console.log(
            "라이프사이클 훅 - beforeUnmount: ChildComponent 제거 직전",
        );
    },
    unmounted() {
        console.log("라이프사이클 훅 - unmounted: ChildComponent 제거 완료");
    },
    methods: {
        incrementCount() {
            this.count++;
        },
    },
};
</script>
