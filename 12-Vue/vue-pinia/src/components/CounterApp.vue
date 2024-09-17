<template>
    <div style="border: 1px solid red; padding: 8px;">
        <h3>Contador</h3>
        <p>Valor actual: {{ count }}</p>

        <button @click="incrementarEnUno">Incrementar</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../store/useCounterStore';

export default {
    computed: {
        ...mapState(useCounterStore, ["count"]) // todos los valores del store
    },
    methods: {
        incrementarEnUno(){

            if(this.count > 0){
                this.incrementar(1)
            }

        },
        ...mapActions(useCounterStore, ["incrementar"])
    }
}
</script>