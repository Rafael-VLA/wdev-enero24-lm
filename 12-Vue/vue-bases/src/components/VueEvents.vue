<template>
    <h3>Eventos</h3>
    <p>{{ inputText }}</p>
    <div class="container">
        <!-- <input ref="input-text" type="text"> -->
        <!-- <input 
            :value="inputText" 
            type="text"
            @input="handleChange"
        > -->

        <input
            v-model="inputText" 
            type="text"
            @keydown.enter ="handleKeyDown"
            @keyup.esc = "e => e.target.blur()"
        />

        <!-- handleClick | e => handleClick(e) -->
        <!-- <button v-on:click="(e) => handleClick('Rafael', e)">Enviar</button> -->
        <button @click="handleClick">Enviar</button>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                inputText: "Hola"
            }
        },
        methods: {
            // handleClick(nombre, e){        
            //     console.log("Hola", nombre);
            //     console.log("Texto de botón:", e.target.innerText );
            // }
            handleClick(){
                console.log(this.inputText)
            },
            handleChange(e){
                this.inputText = e.target.value;
            },
            handleKeyDown(e){
                console.log(this.inputText)
            }
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    gap: 8px
}
</style>