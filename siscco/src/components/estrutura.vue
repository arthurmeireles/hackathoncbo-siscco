<template>
    <div id="estrutura" class="bg-fundo w-100 h-100">
        <Navbar></Navbar>

        <div class="container">
            <router-view :usuario="usuario"></router-view> 
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
import serviceUsuario from "@/service/serviceUsuario"
export default {
    Components:[
        Navbar
    ],

    data() {
        return {
            usuario: ''
        }
    },
    mounted() {
        serviceUsuario.getUsuario(localStorage.getItem('usuarioId')).then(resposta=>{
            this.usuario = resposta.data
            console.log(resposta.data)
        })
    },
}
</script>

<style>
#estrutura{
    min-height: 100vh;
    padding-bottom: 5vh;
}
.bg-fundo{
    background-color:#18191a;
}
</style>