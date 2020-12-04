<template>
    <div>
        <div class="row col">
            <h2 class="text-white mt-5 mb-0">
                Minhas Dúvidas
            </h2>
        </div>
        <cardDuvida v-for="duvida in this.duvidas" :key="duvida.id" :duvida="duvida"/>
        
        
        <btnAdicionarDuvida/>

    </div>
</template>


<script>
import cardDuvida from '@/components/cardDuvida'
import btnAdicionarDuvida from '@/components/btnAdicionarDuvida'
import serviceDuvidas from '@/service/serviceDuvidas'

export default {
    name:  'minhasDuvidas',
    components: {
        cardDuvida
    },
    props: [
        'usuario'
    ],
    data() {
        return {
            duvidas: []
        }
    },
    mounted() {
        serviceDuvidas.getMinhasDuvidas().then(resposta =>{
            this.duvidas = resposta.data
        })
    },

}
</script>