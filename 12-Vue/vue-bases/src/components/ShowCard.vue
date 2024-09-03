
<template>
    <custom-card-gato v-if="show === true" />
    <p v-else>El card gato está escondido</p>

    <button v-on:click="handleClick">{{ btnText }}</button>
</template>

<script>
import CustomCardGato from './CustomCardGato.vue';

    export default {
        components: {
            CustomCardGato
        },
        data(){
            return {
                show: true
            }
        },
        methods: {
            handleClick(){
                this.show = !this.show;          
            }
        },
        computed: {
            btnText(){
                return this.show === true ? "Esconder" : "Mostrar";
            }
        }
    }
</script>