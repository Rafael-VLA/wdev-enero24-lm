<template>
    <li>
        <p>{{ user.name }}</p>
        <!-- <button @click="$emit('getUser', user)">Obtener correo</button> -->
        <button @click="handleClick">Obtener correo</button>
    </li>
</template>

<script>

export default {
    props: ["user"],
    methods: {
        handleClick(){
            this.$emit('getUser', this.user)
            // console.log(this.user.email)
        }
    }
}
</script>

<style scoped>
li {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 16px;
}
</style>