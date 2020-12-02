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
        <div class="card text-white">
            <div class="card-body">
                <div class="row col">
                    <b-avatar size="3rem"></b-avatar>
                    <div class="ml-3">
                        <h6 class="card-title">Nome do Usuario</h6>
                        <div class="d-flex mb-2">
                            <h6 class="card-subtitle text-muted mr-1"><i class="medalha-ouro fas fa-medal"> </i> 6</h6>
                            <h6 class="card-subtitle text-muted mr-1"><i class="medalha-prata fas fa-medal"> </i> 10</h6>
                            <h6 class="card-subtitle text-muted mr-1"><i class="medalha-bronze fas fa-medal"></i> 6</h6>
                        </div>
                    </div>
                </div>


                <h4 class="card-text mt-3">
                Um exemplo de texto rápido para construir o título do card e fazer
                preencher o conteúdo do card.
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
export default {};
</script>

<style scoped>
.card {
  background-color: #18191a;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 0;
}

.medalha-ouro{
    color: #e6bc53
}
.medalha-ouro{
    
}
.medalha-ouro{
    
}
</style>
