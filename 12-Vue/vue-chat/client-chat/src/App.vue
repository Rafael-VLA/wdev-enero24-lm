<template>
  <router-view />
</template>

<!-- <template>
  <h1>App</h1>

  <form @submit.prevent="handleSubmit">
    <input v-model="inputText" type="text">
    <button>Enviar</button>
  </form>

  <ul>
    <li v-for="item in messages" :key="item.id">{{ item.user }} | {{ item.message }}</li>
  </ul>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  data(){
    return {
      inputText: "",
      socket: null,
      messages: []
    }
  },
  methods: {
    handleSubmit(){
      if(this.socket === null || this.inputText === "") return;

      this.socket.emit('chat message', this.inputText)
    }
  },
  mounted(){
    this.socket = io("http://localhost:3000/", {
      query: {
        user: "Rafael" + Math.random().toFixed(2)
      }
    });

    this.socket.on("chat message", (data) => { // data = { id: crypto.randomUUID(), user: user, message: value }
      this.messages.push(data)
    })
  }
}
</script> -->