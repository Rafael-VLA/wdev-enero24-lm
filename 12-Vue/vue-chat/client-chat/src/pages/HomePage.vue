<template>
    <div style="height: 100vh;" class="d-flex justify-content-center align-items-center">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Crear usuario</h5>

                <form @submit.prevent="handleSubmit" autocomplete="off">
                    <div class="mb-3">
                        <label for="user" class="form-label">Ingresar un usuario</label>
                        <input 
                            v-model="inputText"
                            type="text" 
                            class="form-control" 
                            id="user" 
                            aria-describedby="Ingresar usuario"
                        >
                        <div class="form-text text-danger" v-if="isEmpty">El campo no puede ser vacio</div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Ingresar</button>
                    <hr>
                    <div>
                        <router-link
                            :to="{ name: 'chat', params: { user: 'anonimo' } }" 
                            class="btn btn-outline-primary w-100"
                        >
                            Soy anónimo
                        </router-link>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    setup(){
        const router = useRouter()

        return {
            router
        }
    },
    data(){
        return {
            inputText: "",
            isEmpty: false
        }
    },
    methods: {
        handleSubmit(){
            if(this.inputText === ""){
                this.isEmpty = true;
                return;
            }

            this.router.push({ name: 'chat', params: { user: this.inputText } })
        }
    },
    watch: {
        inputText(value){
            if(value != ""){
                this.isEmpty = false;
            } else {
                this.isEmpty = true;
            }
        }
    }
}
</script>