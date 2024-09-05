<template>
<!-- <h3 :style="styleText">Lista de usuarios</h3> -->
<!-- <h3 :class="styles['title-underline']">Lista de usuarios</h3> -->
<h3 class="title-color2">Lista de usuarios</h3>

<p>Info usuario: {{ userSelected && userSelected.username }}</p>

<ul>
    <!-- <li v-for="item in users" :key="item.id">{{ item.name }}</li> -->
     <ItemUser v-for="user in users" :key="user.id" :user="user" @getUser="handleGetEmail" />
</ul>

<!-- <button v-on:click="cambiarColor('red')" style="margin-right: 16px;">Red</button>
<button v-on:click="cambiarColor('green')">Green</button> -->

</template>

<script>
import { users } from '../data/users';
import ItemUser from './ItemUser.vue';
// import './list-user.css'
import styles from './list-user-m.module.css'

export default {
    data(){
        return {
            styleText: {
                color: 'red'
            },
            styles: styles,
            userSelected: null
        }
    },
    components: { ItemUser },
    computed: { // Los valores computados son de solo lectura
        users(){
            return users;
        }
    },
    methods: {
        limpiar(){
            this.users = [];
        },
        cambiarColor(color){
            this.styleText.color = color;
        },
        handleGetEmail(user){
            this.userSelected = user;
        }
    }
}
</script>

<style scoped>
    .title-color2 {
        color: aqua
    }
</style>