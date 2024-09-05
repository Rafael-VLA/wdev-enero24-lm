<template>
<form @submit.prevent="handleSubmit" class="max-w-sm mx-auto text-start" novalidate autocomplete="off">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Your name</label>
    <input v-model="formData.name" type="text" id="name" name="name" :class="{ '!border-red-500': formError.name === '' ? false : true }" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500" v-if="formError.name === '' ? false : true">{{ formError.name }}</p>
</div>
  <div class="mb-5">
    <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Your phone</label>
    <input v-model="formData.phone" type="text" id="tel" name="tel" :class="{ '!border-red-500': formError.phone === '' ? false : true }"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500" v-if="formError.phone === '' ? false : true">{{ formError.phone }}</p>
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input v-model="formData.remember" id="remember" type="checkbox" name="remember" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>

  <button
    :disabled="isLoading" 
    type="submit" 
    class="!w-full text-white disabled:opacity-60 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {{ textButton }}
  </button>

  <pre>
    {{ JSON.stringify(formData) }}
  </pre>
</form>
</template>

<script>
export default {
    data(){
        return {
            isLoading: false,
            textButton: 'Enviar',
            formData: {
                name: "",
                phone: "",
                remember: false
            },
            formError: {
                name: "",
                phone: ""
            }
        }
    }, 
    methods: {
        async handleSubmit(e){

            // const formData = new FormData(e.target);
            
            // let data = Object.fromEntries(formData);
        
            // data = {
            //     ...data,
            //     remember: data.remember === undefined ?  false : true
            // }

            // const data = {
            //     name: this.$refs.inputName.value,
            //     phome: this.$refs.inputPhone.value,
            //     remember: this.$refs.inputCheck.checked,
            // }

            const data = { ...this.formData };


            if(data.name === ''){
                this.formError.name = "El nombre está vacio"
            }
            
            if(data.phone === ''){
                this.formError.phone = "El teléfono está vacio"
            }

            if(this.formData.name === '' || this.formData.phone === ""){
                return;
            }

            // if(data.name === '' || data.phone === ''){
            //     alert("Los datos son necesarios");
            //     return;
            // }

            this.isLoading = true;

            const result = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(res => res.json());

            this.isLoading = false;

            this.formError.name = "";
            this.formError.phone = "";

            console.log(result)
        }
    },
    computed: {
        btnText(){
            return this.isLoading == true ? "Cargando..." : "Enviar";
        }
    },
    watch: {
        isLoading(newValue){
            if(newValue === true){
                this.textButton = 'Cargando...';
            } else {
                this.textButton = 'Enviar';
            }
        }
    }
}
</script>