<template>
    <h1>{{ fullName }}</h1>

    <button @click="remainName">버튼 01</button>
    <button @click="changeName">버튼 02</button>

    <hr />

    <div>
        <input v-model="contactInfo" type="text" />
        <h3>이메일: {{ email }}</h3>
        <h3>휴대전화: {{ phone }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: "홍",
            lastName: "길동",
            email: "example@example.com",
            phone: "010-1234-5678",
        };
    },
    computed: {
        fullName() {
            console.log("Computed 호출!");
            return `${this.firstName} ${this.lastName}`;
        },
        contactInfo: {
            get() {
                return `이메일: ${this.email}, 휴대전화: ${this.phone}`;
            },
            set(newValue) {
                const parts = newValue.split(",").map((part) => part.trim());

                if (parts.length === 2) {
                    const emailPart = parts.find((p) => p.startsWith("이메일:"));
                    const phonePart = parts.find((p) => p.startsWith("휴대전화:"));

                    if (emailPart) this.email = emailPart.replace("이메일:", "").trim();
                    if (phonePart) this.phone = phonePart.replace("휴대전화:", "").trim();
                }
            },
        },
    },
    methods: {
        remainName() {
            this.firstName = "홍";
        },
        changeName() {
            this.firstName = "김";
        },
    },
};
</script>

<style scoped></style>