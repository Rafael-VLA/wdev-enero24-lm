<template>
    <div class="d-flex" :class="{ 'justify-content-end': user.esMio === true, 'justify-content-start': user.esMio === false }">
        <div class="p-3 rounded w-75" :class="{ 'bg-dark text-white': user.esMio, 'card text-dark': !user.esMio }">
            <h6>{{ user.user }}</h6>
            <p class="m-0">{{ user.message }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["user"] // { id: 1, user: "Rafael", message: "Hola como estas", esMio: false }
    }
</script>