<template>
    <button v-on:click="handleClick">
        <slot></slot>
    </button>
    <!-- <button v-on:click="handleClick">
        {{ label }}
    </button> -->
</template>

<script>

    export default {
        props: ["handleClick", "label"] // es una función
    }
</script>