<template>
    <div class="position-absolute">

        <b-button id="btnAdicionarDuvida" variant="primary" class="rounded-circle " @click="openModal">
             <h3 class="mb-0">
                <i class="fas fa-plus"></i>
            </h3>
        </b-button>

        <b-modal 
            v-model="show"
            centered 
            id="modalAdicionarDuvida" 
            title="Publicar Dúvida">
            <b-form-input class="mb-3" v-model="nova_duvida.titulo" placeholder="Titutlo da sua dúvida"></b-form-input>


            <b-form-textarea
                id="textarea-default"
                placeholder="Descreva sua dúvida Aqui"
                rows="4"
            ></b-form-textarea>
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button
                        variant="secondary"
                        class="float-right"
                        @click="limpaNovaPublicacao"
                    >
                        Cancelar
                    </b-button>
                    
                    <b-button
                        variant="primary"
                        class="float-right"
                        @click="publicarDuvida"
                    >
                        Publicar
                    </b-button>
                    </div>
            </template>
        </b-modal>
    </div>
</template>



<script>
export default {
    name: 'btnAdicionarDuvida',
    data(){
        return{
            show: false,
            nova_duvida: {
                titulo: '',
                descricao: ''
            }
        }
    },
    methods: {
        openModal: function(){
            this.show = true
        },

        limpaNovaPublicacao: function(){
            this.nova_duvida.titulo = ''
            this.nova_duvida.descricao = ''
            this.show = false
        },

        publicarDuvida: function(){
            
            // INALDO COLOCA O SERVIÇO AQUI SE CONSEGUIR COLOCA O SUCCES DO SWEETALERT
            
            this.show = false

        }

    },
}
</script>