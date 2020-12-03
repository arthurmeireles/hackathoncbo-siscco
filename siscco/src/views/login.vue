<template>
    <div class="bg-login">
            <div class="d-flex align-items-center h-100">
                <b-card class="mx-auto my-auto col-lg-4 col-md-4 col-sm-12 my-5 border-0 bg-white">
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
                        <button type="button" class="btn-outline-dark btn-block btn-lg btn-pill mt-5"  id="sabia-logout-button" >
                            <img src="@/assets/img/logo-sabia.png"  width="30" alt="" srcset="">
                            Entrar com o Sabiá
                        </button>

                    </div>

                </b-card>
                

            </div>
   
    </div>
</template>


// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
// <script src="../assets/js/settings.js"></script>
// <script src="../assets/js/js.cookie.js"></script>
// <script src="../assets/js/sabia.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.5/highlight.min.js" integrity="sha512-W8vWEBEKq60HQU2kxups8aE9ZoxO4x7YLQ+UQxbPqbO78ShB13wbXDdPF3aZDvMik4dsg/BKgvcatFU5uzk1Qw==" crossorigin="anonymous"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


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


    },
    // created: function() {
        
    //     var sabia = new SabiaClient(SABIA_URL, SABIA_CLIENT_ID, SABIA_CLIENT_REDIRECT_URI);
    //     sabia.init();


            
    //     $("#sabia-login-button").attr('href', sabia.getLoginURL());
    //     var a = $("#sabia-login-button").attr('href')
    //     console.log(a)


    //     if (sabia.isAuthenticated()) {
    //         $('div.autenticado').removeClass("hidden");
    //         $('#token').text(sabia.getToken().getValue());
    //         $('#validade_token').text(sabia.getToken().getExpirationTime());
    //         $("#escopos_autorizados").text(sabia.getToken().getScope());
    //         $("#escopos").val(sabia.getToken().getScope());
    //     } else {
    //         $('div.anonimo').removeClass("hidden");
    //     }
        
    //     $("#sabia-logout-button").click(function(){
    //         sabia.logout();
    //     });
    //     $("#sabia-resource-button").click(function(){
    //         if (sabia.isAuthenticated()) {
    //             var scope = $("#escopos").val();
    //             var callback = function (response) {
	// 				alert(response)
    //                 $("#response").text(JSON.stringify(response, null, 4));
    //                 $('pre code').each(function(i, block) {
	// 					hljs.highlightBlock(block);
	// 				});
    //             };
    //             sabia.getResource(scope, callback);
    //         }
    //     });
    // },
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
    width: 100%;
    height: 100vh;
}
.btn-pill{
    border-radius: 30em;
}
</style>