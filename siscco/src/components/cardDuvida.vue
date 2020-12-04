<template>
        <div class="card text-white my-border-radius mt-5">
            <div class="card-body pb-2 ">
                <div class="row col">
                    <b-avatar size="3rem"></b-avatar>
                    <div class="ml-3">
                            <h6 class="card-title" >
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
                
                <a type="button" @click="$router.push({name: 'PaginaDuvida', params: {duvidaId: duvida.id}})">
                    <h3 class="card-text mt-3">
                    {{ duvida.titulo }}
                    </h3>
                </a>


                <p class="text-white">
                    {{ duvida.descricao }}
                </p>
                
                <div class="d-flex">

                    <reacoes :duvida="duvida"/>
                    <div class="mb-3 d-flex">

                        <a href="#" class="card-link ml-3">
                            <i class="far fa-comment-alt" style="font-size: 24px"></i> 
                            <span class="ml-2 mb-1" style="font-size: 18px">{{duvida.respostas.lista.length}}</span>
                            <span class="sai-no-mobile mb-1" style="font-size: 18px">Comentarios</span>
                        </a>
                    </div>
                </div>

                <adicionarComentario :duvidaId="duvida.id"/>


            </div>
        </div>
</template>

<style  scoped>

</style>


<script>
import reacoes from '@/components/reacoes'
import adicionarComentario from '@/components/adicionarComentario'

export default {
    name: 'cardDuvida',
    props: [
        "duvida"
    ],
    components:{
        reacoes,
        adicionarComentario
    },
    data() {
        return {
            
        }
    },
    
}
</script>