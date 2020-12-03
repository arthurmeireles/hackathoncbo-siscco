<template>
    <div class="mb-3">
            <!-- <a href="#" v-if="this.like" @click="like" class="card-link"> -->
            <a href="#" v-if="this.like" class="card-link">

                <i class="fas fa-heart" style="font-size: 24px"></i>
                <span class="ml-2 mb-1" style="font-size: 18px">500 </span><span class="sai-no-mobile mb-1" style="font-size: 18px">curtidas</span>
            </a>
            <!-- <a href="#" v-if="!this.like" @click="removerLike" class="card-link"> -->
            <a href="#" v-if="!this.like" class="card-link">

                <i class="far fa-heart" style="font-size: 24px"></i>
                <span class="ml-2 mb-1" style="font-size: 18px">500 </span><span class="sai-no-mobile mb-1" style="font-size: 18px">curtidas</span>
            </a>
            <!-- <a href="#" v-if="this.deslike" @click="deslike" class="card-link"> -->
            <a href="#" v-if="this.deslike" class="card-link">

                <i class="fa fa-heart-broken" style="font-size: 24px"></i>
                <span class="ml-2 mb-1" style="font-size: 18px">0 </span><span class="sai-no-mobile mb-1" style="font-size: 18px">descurtidas</span>
            </a>
            <!-- <a href="#" v-if="!this.deslike" @click="removerDeslike" class="card-link"> -->
            <a href="#" v-if="!this.deslike" class="card-link">

                <i class="fa fa-heart-broken" style="font-size: 24px"></i>
                <span class="ml-2 mb-1" style="font-size: 18px">0 </span><span class="sai-no-mobile mb-1" style="font-size: 18px">descurtidas</span>
                
            </a>
    </div>
</template>

<style scoped>



</style>

<script>
import reacoes from '@/components/reacoes'

export default {

    name: 'reacoes',


    // props: [
    //     'usuario',
    //     'post' // ESSE POST ME REFIRO A QUALQUER TIPO DE COISA QUE FOR INCLUIDA POR USUARIO
    // ],
    data() {
        return {
            like: false,
            deslike: false
        }
    },

    methods: {
        // like: function(){

        //     //INALDO INCLUIR A FORMA

        //     this.like = true
        //     this.deslike = false
        // },
        // removerLike: function(){
        //     this.like = false
        // },
        // deslike: function(){
        //     this.deslike = true
        //     this.like = false
        // },
        // removerDeslike(){
        //     this.deslike = false
        // }
    },
};
</script>
