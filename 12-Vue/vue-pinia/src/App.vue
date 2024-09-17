
<template>
  <h1>App</h1>
  <p>Valor desde app: {{ count }}</p>
  <p>Mi nombre: {{ nameToUpper }}</p>
  <p>¿Es par?: {{ countEsPar }}</p>

  <button @click="decrementar">Decrementar</button>

  <counter-app />
</template>

<script>
import CounterApp from './components/CounterApp.vue';
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from './store/useCounterStore';

export default {
  components: { CounterApp },
  computed: {
    nameToUpper(){
      return this.name.toUpperCase()
    },

    countEsPar(){
      return this.esPar === true ? "Sí" : "No";
    },

    ...mapState(useCounterStore, ["count", "name", "esPar"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["decrementar"])
  }
}

</script>