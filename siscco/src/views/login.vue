<template>
    <div class="bg-login">
            <div class="d-flex align-items-center h-100">
                <b-card class="mx-auto my-auto col-lg-4 col-md-4 col-sm-12 my-5 border-0">
                    <div class="d-flex align-items-center justify-content-center mb-5">
                        <img width="160" src="@/assets/img/logo-medium.svg" alt="">
                    </div>

                    <h4 class="mb-3 text-center font-weight-bold">Bem-vindo(a) ao SISCCO!</h4>
                    
                    <div class="mb-5">
                        <form class="text-left">
                            <div class="form-group">
                                <input
                                    required
                                    v-model="usuario.username"
                                    type="text" 
                                    class="form-control rounded-pill form-control-lg border-dark" 
                                    id="inputEmailLogin" 
                                    aria-describedby="emailHelp" 
                                    placeholder="E-mail">
                            </div>
                            <div class="form-group">
                                <input
                                    required
                                    v-model="usuario.password" 
                                    type="password" 
                                    class="form-control rounded-pill form-control-lg border-dark" 
                                    id="inputEmailSenha" 
                                    placeholder="Senha">
                            </div>
                            <div class="form-group text-right">
                                <a href="http://" style="color: #4c4c4c"><small>Esqueci minha senha</small></a>
                            </div>
                            <button type="button" class="btn btn-primary btn-block btn-lg btn-pill" @click="logar">Enviar</button>
                        </form>
                        <button type="button" class="btn-outline-dark btn-block btn-lg btn-pill mt-5" @click="logar">
                            <img src="@/assets/img/logo-sabia.png"  width="30" alt="" srcset="">
                            Entrar com o Sabiá
                        </button>

                    </div>

                </b-card>
                

            </div>
   
    </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return{
            usuario:{
                username:'',
                password:''
            },
            usuarioLogado: {}
        }
    },
    methods:{
        logar: function(){
            serviceLogin.login(this.usuario).then(resposta => {
                console.log(resposta.data)
                if(resposta.status == 200){
                    console.log("Logou")
                    localStorage.setItem('token', resposta.data.token)
                    axios.defaults.headers.common['Authorization'] = 'Token '+resposta.data.token ;
                    this.$router.push({name: 'paginaInicial'})
                    this.$emit('buscaUsuario')
                }
            }).catch(
                (error) =>{
                    this.$swal.fire(
                        'Oops...',
                        'Tivemos um problema, tente novamente!',
                        'error',
                    )
                    console.log(error)
                }
            )
        }

    }
}

</script>

<style>
.btn-outline-dark{
    background-color: #fff;
}
.btn-primary{
    background-color: #3086fa;
}
.bg-login{
    height: 100%;
    width: 100%;
}
.btn-pill{
    border-radius: 30em;
}
</style>