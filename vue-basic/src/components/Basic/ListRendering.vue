<template>
    <ul>
        <li v-for="(fruit, index) in fruits" :key="fruit.id">{{ fruit.name }} - {{ fruit.price }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            fruits: [
                { id: 1, name: "사과", price: "1,000원" },
                { id: 2, name: "딸기", price: "2,000원" },
                { id: 3, name: "바나나", price: "3,000원" },
                { id: 4, name: "수박", price: "4,000원" },
            ],
        };
    },
};
</script>

<style scoped></style>