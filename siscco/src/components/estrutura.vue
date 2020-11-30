<template>
    <div id="estrutura" class="bg-fundo w-100 h-100">
        <Navbar></Navbar>

        <div class="container">
            <router-view></router-view> 
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
export default {
    Components:[
        Navbar
    ]
    
}
</script>

<style>
.bg-fundo{
    background-color: #18191a;
}
</style>