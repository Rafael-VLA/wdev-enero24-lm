<template>
   <div style="margin-top: 54px;" class="flex-fill d-flex flex-column gap-3">

        <item-chat v-for="item in list" :key="item.id" :user="item"/>

    </div> 
</template>

<script>
import ItemChat from './ItemChat.vue';

export default {
    components: { ItemChat },
    props: ["list"]
}
</script>