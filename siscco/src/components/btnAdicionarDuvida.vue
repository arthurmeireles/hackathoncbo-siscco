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
                <input class="form-control mb-3" type="text" v-model="nova_duvida.titulo" placeholder="Titulo da Duvida">


                <textarea class="form-control"  v-model="nova_duvida.descricao"  placeholder="Descrição da dúvida" id="exampleFormControlTextarea1" rows="3"></textarea>

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
import serviceDuvidas from '@/service/serviceDuvidas'
export default {
    name: 'btnAdicionarDuvida',
    data(){
        return{
            show: false,
            nova_duvida: {
                autor: localStorage.getItem('usuarioId'),
                titulo: '',
                descricao: '',
                likes: 0,
                deslikes: 0
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
            
            serviceDuvidas.criarDuvida(this.nova_duvida).then(resposta =>{
                console.log(resposta.data)
            })            
            this.show = false

        }

    },
}
</script>