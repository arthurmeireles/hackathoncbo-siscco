<template>
    <div class="d-flex mb-3">
        <b-avatar class="mr-2" size="2.5rem"></b-avatar>

         <input v-model="resposta.descricao" class="form-control rounded-pill col" type="text" placeholder="Digite aqui sua resposta">

        
        <b-button @click="publicarResposta" class="ml-2 btn-web" pill variant="primary">Publicar</b-button>
        <b-button @click="publicarResposta" class="ml-2 btn-mobile" pill variant="primary"><i class="fas fa-paper-plane"></i></b-button>


        
    </div>
</template>

<style scoped>
    .btn-mobile{
        display: none;
    }
    .btn-web{
        display: block;
    }
    .form-control{
        background-color: #242526;
        color: white;
    }

/* autor
duvida
likes 
deslikes descricao */

    @media(max-width: 500px){
        .btn-mobile{
            display: block;
        }
        .btn-web{
            display: none;
        }
    }
</style>

<script>

import serviceResposta from "@/service/serviceResposta"
export default {
  name: "",
  props: ["duvidaId"],
  data() {
    return {
        resposta: {
            autor: localStorage.getItem('usuarioId'),
            duvida: this.duvidaId,
            likes: 0,
            deslikes: 0,
            descricao: ''
        }
    };
  },
  methods: {
      publicarResposta: function (){
          serviceResposta.responder(this.resposta).then(resposta => {
              console.log(resposta.data)
              alert("Resposta Enviada")
          })
          this.resposta.descricao = ''
      }
  },
};
</script>
