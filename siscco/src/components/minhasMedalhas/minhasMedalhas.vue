<template>
    <div>
       <div class="card text-white my-border-radius mt-5">
            <div class="card-body pb-2 ">
                <h3 class="card-text mt-3">
                    Medalhas
                </h3>
                <hr style="width: 100%; background-color: white; heigth: 0.015rem; opacity: 0.6">
                <h3 class="card-text mt-3  mb-3">
                    Medalhas de Ouro
                </h3>
                <div class="row col">
                    <div class="row w-100 ">
                        <div class="col-md-4 col-sm-12">
                            <h6><i class="medalha-ouro fas fa-medal"></i> coloca o nome da medalha</h6>
                        </div>
                    </div>
                </div>
                <h3 class="card-text mt-3 mb-3">
                    Medalhas de Prata
                </h3>
                <div class="row col ">
                    <div class="row w-100">
                        <div class="col-md-4 col-sm-12">
                            <h6>                               
                                <i class="medalha-prata fas fa-medal"></i> 
                                coloca o nome da medalha
                            </h6>
                        </div>
                    </div>
                </div>
                <h3 class="card-text mt-3 mb-3">
                    Medalhas de Bronze
                </h3>
                <div class="row col">
                    <div class="row w-100">
                        <div class="col-md-4 col-sm-12">
                            <h6><i class="medalha-bronze fas fa-medal"></i> coloca o nome da medalha</h6>
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
    mounted() {
        serviceMedalhas.getMedalhas(usuarioId).then(resposta =>{
            console.log(resposta.data)
        })
    },
}
</script>