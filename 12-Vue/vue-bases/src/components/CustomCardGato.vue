<template>
    <div>
        <img v-bind:src="srcImage" :alt="altImage" :width="width">
        <h3 :style="customStyle">Gato</h3>
    </div>
</template>

<script>
import { fotoGato } from '../data/images';

export default {
    data(){
        return {
            srcImage: fotoGato,
            altImage: "Alt de información para la foto",
            customStyle: { color: "green" },
            width: "500px"
        }
    }
}

</script>