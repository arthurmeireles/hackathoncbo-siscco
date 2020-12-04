<template>
    <div>
        <div class="row col">
            <h2 class="text-white mt-5">
                Em Alta
            </h2>
        </div>
        <div v-for="duvida in listaEmAlta" :key="duvida.id">
            <cardDuvida :duvida="duvida"/>
        </div>
        
        
        <btnAdicionarDuvida/>
    </div>
</template>

<script>
import cardDuvida from '@/components/cardDuvida'
import btnAdicionarDuvida from '@/components/btnAdicionarDuvida'
import serviceDuvidas from '@/service/serviceDuvidas'

export default {    
    name:  'emAlta',
    components: {
        cardDuvida,
        btnAdicionarDuvida
    },
    data() {
        return {
            listaEmAlta: []
        }
    },
    mounted() {
        serviceDuvidas.getListaEmAlta().then( resposta=>{
            this.listaEmAlta = resposta.data
        })
    },
}
</script>