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
        <div v-for="duvida in duvidas" :key="duvida.id">
            <cardDuvida :duvida="duvida"/>
        </div>

  </b-container>
</div>
</template>

<script>
import serviceDuvidas from '@/service/serviceDuvidas'
import btnAdicionarDuvida from '../btnAdicionarDuvida'
import cardDuvida from '../cardDuvida'

export default {
    name: 'PaginaInicial',
    components: {
        btnAdicionarDuvida,
        cardDuvida
    },
    data () {
        return {
            duvidas: [],
            usuario: ''
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
