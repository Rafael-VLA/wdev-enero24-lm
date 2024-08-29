
<template>
    <h3>{{ description }}</h3>

    <h4>Counter: {{ count }}</h4>

    <button v-on:click="addCount">Add</button>
</template>

<script>

export default {
    // props: ["description"]
    props: {
        description: {
            type: String,
            default: "Contador sin título"
        },
        initialCount: {
            type: Number,
            default: 5
        }
        // description: {
        //     type: Function,
        //     required: true
        // }
    },
    data(){
        return { // Definir las propiedades reactivas
            count: this.initialCount
            // x número de propiedades reactivas...
        }
    },
    methods: {
        // addCount: () => { // No usar funciones flechas
        //     this.count = 10;
        // }
        addCount(){
            this.count = this.count + 1; // this.count++
        }
    }
}
</script>