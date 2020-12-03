<template>
    <div class="mb-3">
            <a href="#" v-if="this.like" @click="like" class="card-link">
                <i class="fas fa-heart" style="font-size: 24px"></i>
                <span class="ml-2 mb-1" style="font-size: 18px">{{duvida.likes}} </span>
                <span class="sai-no-mobile mb-1" style="font-size: 18px">curtidas</span>
            </a>
            <a href="#" v-if="!this.like" @click="like" class="card-link">

                <i class="far fa-heart" style="font-size: 24px"></i>
                <span class="ml-2 mb-1" style="font-size: 18px">{{duvida.likes}} </span>
                <span class="sai-no-mobile mb-1" style="font-size: 18px">curtidas</span>
            </a>
            <a href="#" v-if="this.deslike" @click="dislike" class="card-link">

                <i class="fa fa-heart-broken" style="font-size: 24px"></i>
                <span class="ml-2 mb-1" style="font-size: 18px">{{duvida.dislikes}} </span>
                <span class="sai-no-mobile mb-1" style="font-size: 18px">descurtidas</span>
            </a>
            <a href="#" v-if="!this.deslike" @click="dislike" class="card-link">

                <i class="fa fa-heart-broken" style="font-size: 24px"></i>
                <span class="ml-2 mb-1" style="font-size: 18px">{{duvida.dislikes}}</span>
                <span class="sai-no-mobile mb-1" style="font-size: 18px">descurtidas</span>
                
            </a>
    </div>
</template>


<script>
import serviceReacoes from '@/service/serviceReacoes'
import reacoes from '@/components/reacoes'

export default {

    name: 'reacoes',


    props: [
        'duvida' // ESSE POST ME REFIRO A QUALQUER TIPO DE COISA QUE FOR INCLUIDA POR USUARIO
    ],
    data() {
        return {
            like: false,
            deslike: false,
        }
    },

    methods: {
        like: function(){
            console.log(duvida.id)
            serviceReacoes.curtirDuvida(usuarioId, duvida.id).then(resposta =>{
                console.log(resposta.data)
            })
            this.like = true
            this.deslike = false
        },

        dislike: function(){
            console.log(duvida.id)
            serviceReacoes.discurtiDuvida(usuarioId, duvida.id).then(resposta =>{
                console.log(resposta.data)
            })
            this.deslike = true
            this.like = false
        },

    },
};
</script>
