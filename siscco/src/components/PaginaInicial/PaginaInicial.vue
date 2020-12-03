<template>
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
                            <h6 class="card-subtitle text-muted mr-1"><i class="fas fa-medal"> </i> {{ duvida.autor.medalhas.ouro.length }}</h6>
                            <h6 class="card-subtitle text-muted mr-1"><i class="fas fa-medal"> </i> {{ duvida.autor.medalhas.prata.length }}</h6>
                            <h6 class="card-subtitle text-muted mr-1"><i class="fas fa-medal"></i> {{ duvida.autor.medalhas.bronze.length }}</h6>
                        </div>
                    </div>
                </div>


                <h4 class="card-text mt-3">
                {{ duvida.titulo }}
                </h4>
                <a href="#" class="card-link">
                    <i class="fas fa-heart" style="font-size: 24px"></i>
                </a>
                <a href="#" class="card-link">
                    <i class="far fa-heart" style="font-size: 24px"></i>
                </a>
                <a href="#" class="card-link">
                    <i class="fa fa-heart-broken" style="font-size: 24px">
                    </i>
                </a>
                <a href="#" class="card-link">
                    <i class="far fa-comment-alt" style="font-size: 24px"></i>
                </a>

            </div>
        </div>
  </b-container>
</template>

<script>
import serviceDuvidas from '@/service/serviceDuvidas'
import login from '@/service/login'
export default {
    name: 'duvidas',
    data () {
        return {
            "duvidas": []
        }
    },
    mounted() { 
        serviceDuvidas.listarDuvidas().then(response => this.duvidas=response.data)
        var SABIA_URL = 'https://login.sabia.ufrn.br/';
        var SABIA_CLIENT_ID = '6Y9LsPN5ssIPsVTVcNQaX4psuGzFZ1klETXRXlnS';
        var SABIA_CLIENT_REDIRECT_URI = 'http://localhost:8080/auth/PaginaInicial';
        var sabia = new SabiaClient(SABIA_URL, SABIA_CLIENT_ID, SABIA_CLIENT_REDIRECT_URI);
        sabia.init();
        if (sabia.isAuthenticated()) {
            console.log(sabia.getToken().getValue());
            console.log(sabia.getToken().getExpirationTime());
            var scope = sabia.getToken().getScope();
            var callback = function (response) {
                    login.enviaTokenSabia(JSON.stringify(response, null, 4)).then(resposta=>{
                        console.log(resposta.data);
                    })
                    return JSON.stringify(response, null, 4);
                };
            sabia.getResource(scope, callback);


        } else {
            window.location.href="http://www.google.com";
        }
    },
    methods: { }
};
</script>

<style scoped>
.card {
  background-color: #18191a;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 0;
}
</style>
