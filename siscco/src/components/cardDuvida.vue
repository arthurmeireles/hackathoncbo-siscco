<template>
        <div class="card text-white my-border-radius mt-5">
            <div class="card-body pb-2 ">
                <div class="row col">
                    <b-avatar size="3rem"></b-avatar>
                    <div class="ml-3">
                        <h6 class="card-title">
                            <!-- {{duvida.autor.dados.username}} -->
                            Nome Usuario
                        </h6>
                        <div class="d-flex mb-2">
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-ouro fas fa-medal"> </i> 
                                <!-- {{ duvida.autor.medalhas.ouro.length }} -->
                                150
                            </h6>
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-prata fas fa-medal"></i> 
                                <!-- {{ duvida.autor.medalhas.prata.length }} -->
                                150
                            </h6>
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-bronze fas fa-medal"></i> 
                                <!-- {{ duvida.autor.medalhas.bronze.length }} -->
                                150
                            </h6>
                        </div>
                    </div>
                </div>


                <h3 class="card-text mt-3">
                <!-- {{ duvida.titulo }} -->
                    Titulo duvida - Inventa que tem um texto aqui
                </h3>

                <p class="text-white">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                
                <div class="d-flex">

                    <reacoes/>
                    <div class="mb-3 d-flex">

                        <a href="#" class="card-link ml-3">
                            <i class="far fa-comment-alt" style="font-size: 24px"></i> 
                            <span class="ml-2 mb-1" style="font-size: 18px">540 </span><span class="sai-no-mobile mb-1" style="font-size: 18px">Comentarios</span>
                        </a>
                    </div>
                </div>

                <adicionarComentario/>


            </div>
        </div>
</template>

<style  scoped>

</style>


<script>
import reacoes from '@/components/reacoes'
import adicionarComentario from '@/components/adicionarComentario'
import btnAdicionarDuvida from '@/components/btnAdicionarDuvida'

export default {
    name: 'cardDuvida',
    props: [
        "duvida"
    ],
    components:{
        reacoes
    },
    data() {
        return {
            
        }
    },
    
}
</script>