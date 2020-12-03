<template>
    <div>
        <div class="card text-white my-border-radius mt-5">
            <div class="card-body pb-2 ">
                <div class="row col">
                    <b-avatar size="3rem"></b-avatar>
                    <div class="ml-3">
                        <h6 class="card-title">
                            {{duvida.autor.username}}
                        </h6>
                        <div class="d-flex mb-2">
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-ouro fas fa-medal"> </i> 
                                {{ duvida.autor.medalhas.ouro.length }}
                            </h6>
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-prata fas fa-medal"></i> 
                                {{ duvida.autor.medalhas.prata.length }}
                            </h6>
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-bronze fas fa-medal"></i> 
                                {{ duvida.autor.medalhas.bronze.length }}
                            </h6>
                        </div>
                    </div>
                </div>


                <h3 class="card-text mt-3">
                    {{ duvida.titulo }}
                </h3>
                <hr style="width: 100%; background-color: white; heigth: 0.015rem; opacity: 0.6">

                <p class="text-white">
                    {{ duvida.descricao }}
                </p>
                <reacoes/>
                <adicionarComentario/>
            </div>
        </div>


        

        <div class="card text-white my-border-radius mt-3" v-if='duvida.respostas.lista.length > 0'>
            <div class="card-body">
                <div class="d-flex mt-3">
                    <h4 class="col-auto pl-0">Resposta Destaque</h4>
                    <hr class="col" style="background-color: white; heigth: 0.015rem; opacity: 0.6">
                </div>
            </div>

            <div class="card border-0 mb-3">
                <div class="row col">
                    <div class="col-auto">
                        <b-avatar size="3rem"></b-avatar>
                    </div>
                    <div class="col pl-0">
                        <div class="row col justify-content-between">
                            <div class="">
                                <h6 class="card-title">
                                    {{duvida.respostas.destaque.autor.username}}
                                </h6>
                                <div class="d-flex mb-3">
                                    <h6 class="card-subtitle text-muted mr-1">
                                        <i class="medalha-ouro fas fa-medal"> </i> 
                                        {{ duvida.respostas.destaque.autor.medalhas.ouro.length }}
                                    </h6>
                                    <h6 class="card-subtitle text-muted mr-1">
                                        <i class="medalha-prata fas fa-medal"></i> 
                                        {{ duvida.respostas.destaque.autor.medalhas.prata.length }}
                                    </h6>
                                    <h6 class="card-subtitle text-muted mr-1">
                                        <i class="medalha-bronze fas fa-medal"></i> 
                                        {{ duvida.respostas.destaque.autor.medalhas.bronze.length }}
                                    </h6>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                               <h3 class=" sai-no-mobile">
                                   <i class="fas fa-star"></i>
                               </h3>
                            </div>

                        </div>
                        <p class="text-white">
                            {{duvida.respostas.destaque.descricao}}
                        </p>
                        <reacoes/>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex mt-3">
                    <h4 class="col-auto pl-0">Respostas</h4>
                    <hr class="col" style="background-color: white; heigth: 0.015rem; opacity: 0.6">
                </div>
            </div>
            <div class="card border-0" v-for="resposta in duvida.respostas.lista" :key="resposta.id" >
                <div class="row col" >
                    <div class="col-auto">
                        <b-avatar size="3rem"></b-avatar>
                    </div>
                    <div class="col pl-0">
                        <div class="row col justify-content-between">
                            <div class="">
                                <h6 class="card-title">
                                    {{resposta.autor.username}}
                                </h6>
                                <div class="d-flex mb-3">
                                    <h6 class="card-subtitle text-muted mr-1">
                                        <i class="medalha-ouro fas fa-medal"> </i> 
                                        {{ resposta.autor.medalhas.ouro.length }}
                                    </h6>
                                    <h6 class="card-subtitle text-muted mr-1">
                                        <i class="medalha-prata fas fa-medal"></i> 
                                        {{ duvida.autor.medalhas.prata.length }}
                                    </h6>
                                    <h6 class="card-subtitle text-muted mr-1">
                                        <i class="medalha-bronze fas fa-medal"></i> 
                                        {{ duvida.autor.medalhas.bronze.length }}
                                    </h6>
                                </div>
                            </div>
   

                        </div>
                        <p class="text-white">
                            {{resposta.descricao}}
                        </p>
                        <reacoes/>
                    </div>
                </div>


            </div>


        </div>
        
        <div class="card text-white my-border-radius mt-3 p-5" v-else>
            <h1>Não há respostas para essa dúvida até o momento!</h1>
        </div>

        <btnAdicionarDuvida/>

    </div>
</template>


<style scoped>
.card {
  background-color: #18191a;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 0;
}

.medalha-ouro{
    color: #e6bc53
}
.medalha-prata{
    color: 	#C0C0C0
}
.medalha-bronze{
    color: 	#cd7f32
}
</style>

<script>
import reacoes from '@/components/reacoes'
import adicionarComentario from '@/components/adicionarComentario'
import btnAdicionarDuvida from '@/components/btnAdicionarDuvida'
import serviceDuvidas from '@/service/serviceDuvidas'

export default {
    name: 'PaginaDuvida',
    components:{
        reacoes,
        adicionarComentario,
        btnAdicionarDuvida
    },
    data() {
        return {
            duvidaId: '',
            duvida: ''
        }
    },

    mounted() {


        serviceDuvidas.getDuvida(this.$route.params.duvidaId).then(resposta =>{
            this.duvida =resposta.data
            console.log(this.duvida)
        })
    },
}
</script>