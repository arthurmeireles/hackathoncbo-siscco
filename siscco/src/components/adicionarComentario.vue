<template>
    <div class="d-flex mb-3">
        <b-avatar class="mr-2" size="2.5rem"></b-avatar>
        <b-form-input
            class="rounded-pill col"
            v-model="mensagem"
            placeholder="Digite aqui sua resposta"
            ></b-form-input>
        
        <b-button class="ml-2 btn-web" pill variant="primary">Publicar</b-button>
        <b-button class="ml-2 btn-mobile" pill variant="primary"><i class="fas fa-paper-plane"></i></b-button>


        
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
    }


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
export default {
  name: "",
  props: [],
  data() {
    return {
        mensagem: ''
    };
  }
};
</script>
