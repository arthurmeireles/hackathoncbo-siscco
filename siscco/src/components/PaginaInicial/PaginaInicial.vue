<template>
<div>

    <btnAdicionarDuvida/>
    <b-container>
        <div class="card mb-2">
            <div class="card-body">
                <div class="input-group mb-3 btn-pill">
                    <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                    />

                    <div class="input-group-prepend">
                        <button
                        class="btn btn-outline-secondary "
                        type="button"
                        id="button-addon1"
                        >
                        Pesquisar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="duvida in duvidas" :key="duvida.id" class="card text-white">
            <div class="card-body">
                <div class="row col">
                    <b-avatar size="3rem"></b-avatar>
                    <div class="ml-3">
                        <h6 class="card-title">{{duvida.autor.dados.username}}</h6>
                        <div class="d-flex mb-2">
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-ouro fas fa-medal"></i> {{ duvida.autor.medalhas.ouro.length }}
                            </h6>
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-prata fas fa-medal"></i> {{ duvida.autor.medalhas.prata.length }}
                            </h6>
                            <h6 class="card-subtitle text-muted mr-1">
                                <i class="medalha-bronze fas fa-medal"></i> {{ duvida.autor.medalhas.bronze.length }}</h6>
                        </div>
                    </div>
                </div>


                <h4 class="card-text mt-3">
                {{ duvida.titulo }}
                </h4>
                <reacoes/>
                <a href="#" class="card-link">
                    <i class="far fa-comment-alt" style="font-size: 24px"></i> 540
                </a>

            </div>
        </div>
  </b-container>
</div>
</template>

<script>
import reacoes from '../reacoes'
import serviceDuvidas from '@/service/serviceDuvidas'
import btnAdicionarDuvida from '../btnAdicionarDuvida'

export default {
    name: 'PaginaInicial',
    components: {
        btnAdicionarDuvida,
        reacoes
    },
    data () {
        return {
            "duvidas": []
        }
    },
    mounted() { 
        serviceDuvidas.listarDuvidas().then(response => {
            this.duvidas=response.data
        })
    },
}
</script>

<style scoped>
.card {
  background-color: #18191a;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 0;
}


</style>
