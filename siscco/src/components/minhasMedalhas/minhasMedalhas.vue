<template>
    <div>
        <div class="row col">
            <h2 class="text-white mt-5">
                Minhas Medalhas
            </h2>
        </div>
       <div class="card text-white my-border-radius mt-5">
            <div class="card-body pb-2 ">
                <h3 class="card-text mt-3">
                    Medalhas
                </h3>
                <hr style="width: 100%; background-color: white; heigth: 0.015rem; opacity: 0.6">
                <h3 class="card-text mt-3 mb-3">
                    Medalhas de Bronze
                </h3>
                <div class="row col">
                    <div class="row w-100">
                        <div class="col-md-4 col-sm-12" v-for="medalha in usuario.medalhas.bronze" :key="medalha.id" >
                            <h6><i class="medalha-bronze fas fa-medal"></i> {{ medalha[0] }}</h6>
                            {{ medalha[1] }}
                        </div>
                    </div>
                </div>
                <h3 class="card-text mt-3 mb-3">
                    Medalhas de Prata
                </h3>
                <div class="row col ">
                    <div class="row w-100">
                        <div class="col-md-4 col-sm-12" v-for="medalha in usuario.medalhas.prata" :key="medalha.id" >
                            <h6><i class="medalha-prata fas fa-medal"></i> {{medalha[0]}}</h6>
                            {{medalha[1]}}
                        </div>
                    </div>
                </div>
                <h3 class="card-text mt-3  mb-3">
                    Medalhas de Ouro
                </h3>
                <div class="row col">
                    <div class="row w-100 ">
                        <div class="col-md-4 col-sm-12" v-for="medalha in usuario.medalhas.ouro" :key="medalha.id" >
                            <h6><i class="medalha-ouro fas fa-medal"></i> {{medalha[0]}}</h6>
                            {{medalha[1]}}
                        </div>
                    </div>
                </div>


        
            </div>

        </div>
         <div class="card text-white my-border-radius mt-5 pb-3">
            <div class="card-body pb-2 ">
                <h3 class="card-text mt-3">
                    Nova medalhas em breve
                </h3>
                <hr style="width: 100%; background-color: white; heigth: 0.015rem; opacity: 0.6">
                <h3 class="card-text mt-3 mb-3">
                    Medalhas de Bronze
                </h3>
                <div class="row col">
                    <div class="row w-100">
                        <div class="col-md-4 col-sm-12">
                            <h6><i class="medalha-bronze fas fa-medal"></i> Representante</h6>
                            Reportou uma publicação inapropriada
                        </div>
                    </div>
                </div>
                <h3 class="card-text mt-3 mb-3">
                    Medalhas de Prata
                </h3>
                <div class="row col ">
                    <div class="row w-100">
                        <div class="col-md-4 col-sm-12">
                            <h6><i class="medalha-prata fas fa-medal"></i> Entusiasta</h6>
                            Entrou no sistema por mais de 30 dias seguidos
                        </div>
                    </div>
                </div>
                <h3 class="card-text mt-3  mb-3">
                    Medalhas de Ouro
                </h3>
                <div class="row col">
                    <div class="row w-100 ">
                        <div class="col-md-4 col-sm-12" >
                            <h6><i class="medalha-ouro fas fa-medal"></i> Guru</h6>
                            Finalizou o curso de codificação do AVASUS
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <h6><i class="medalha-ouro fas fa-medal"></i> Famoso</h6>
                            Primeira publicação a ir para a página "Em Alta"
                        </div>
                    </div>
                </div>


            </div>

        </div>
        <btnAdicionarDuvida/>
    </div>
</template>

<script>
import serviceMedalhas from '@/service/serviceMedalhas'
import btnAdicionarDuvida from '@/components/btnAdicionarDuvida'
export default {
    name: 'minhasMedalhas',
    components:{
        btnAdicionarDuvida
    },
    props: [
        'usuario'
    ],
    data() {
        return {
            
        }
    },

}
</script>