<template>
<div>

    <btnAdicionarDuvida/>
    <b-container>
        <!-- <div class="card mb-2">
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
        </div> -->
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
import login from '@/service/login'
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

                        localStorage.setItem('token', resposta.data.token)
                        localStorage.setItem('usuarioId', resposta.data.id)


                    })
                    return JSON.stringify(response, null, 4);
                };
            sabia.getResource(scope, callback);


        } else {
            window.location.href="http://www.google.com";
        }
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
