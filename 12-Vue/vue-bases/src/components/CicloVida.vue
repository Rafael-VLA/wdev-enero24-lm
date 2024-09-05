<template>
    <h1 ref="h1Ref">Estado y ciclo de vida</h1>
</template>

<script>
export default {
    created(){
        console.log("Created ejecutado")
        console.log(this.$refs.h1Ref)
    },
    beforeMount(){
        console.log("beforeMount ejecutado")
        console.log(this.$refs.h1Ref)
    }
}
</script>