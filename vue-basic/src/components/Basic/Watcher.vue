<template>
    <h1>{{ obj }}</h1>
    <h1>{{ arr }}</h1>
    <button @click="obj.c = 40">객체 데이터 변경</button>
    <button @click="arr.push(6)">배열 데이터 변경</button>
</template>

<script>
export default {
    data() {
        return {
            obj: {
                a: 1,
                b: 2,
                c: 3,
            },
            arr: [1, 2, 3, 4, 5],
        };
    },
    watch: {
        obj: {
            handler(newValue, oldValue) {
                console.log("Object Changed: ", newValue);
            },
            deep: true,
            immediate: true
        },
        arr: {
            handler(newValue, oldValue) {
                console.log("Array Changed: ", newValue);
            },
            deep: true,
            immediate: true
        },
    },
};
</script>

<style scoped></style>