
<template>
    <!-- <h1>App</h1> -->

    <!-- <custom-counter /> -->
     <!-- v-bind o : -->
    <!-- <CustomCounter :description="'Hola desde App'" /> -->
    <!-- <CustomCounter :description="ejecutarSaludo()" /> -->
    <!-- <CustomCounter description="Contador principal" :initialCount="100" /> -->
    
    
    <!-- <CustomButton label="Enviar" /> -->
     <!-- <CustomButton :handleClick="ejecutarSaludo">
        Enviar
     </CustomButton> -->

     <custom-card-gato />

</template>

<script>
import CustomCounter from './components/CustomCounter.vue'; // En Vue se recomienda que las importaciones se realicen por defecto 
import CustomButton from './components/CustomButton.vue';
import CustomCardGato from './components/CustomCardGato.vue';

export default {
    components: { // = CustomCounter: CustomCounter
        CustomCounter,
        CustomButton,
        CustomCardGato
    },
    methods: {
        // Crear métodos para el template 
        ejecutarSaludo(){
            console.log("Hey, hola")
            return "Hey, hola";
        }       
    }
}

</script>

