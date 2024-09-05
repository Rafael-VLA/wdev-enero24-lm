
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

     <!-- <custom-card-gato /> -->

     <!-- <show-card></show-card> -->
     <!-- <h1 :class="styles['title-underline']">APP</h1> -->
     <!-- <h1 class="title-color2">APP</h1> -->
     <!-- <custom-form /> -->
     <!-- <ListUser /> -->
      <!-- <VueEvents /> -->
       <ciclo-vida />

</template>

<script>
import CustomCounter from './components/CustomCounter.vue'; // En Vue se recomienda que las importaciones se realicen por defecto 
import CustomButton from './components/CustomButton.vue';
import CustomCardGato from './components/CustomCardGato.vue';
import ShowCard from './components/ShowCard.vue';
import ListUser from './components/ListUser.vue';
import VueEvents from './components/VueEvents.vue';
import CustomForm from './components/CustomForm.vue';
import CicloVida from './components/CicloVida.vue';

import styles from './app.module.css';

export default {
    components: { // = CustomCounter: CustomCounter
        CustomCounter,
        CustomButton,
        CustomCardGato,
        ShowCard,
        ListUser,
        VueEvents,
        CustomForm,
        CicloVida
    },
    data(){
        return {
            styles
        }
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

