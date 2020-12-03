<template>
    <div>
        <b-navbar toggleable="lg border-bottom border-dark mybg-color justify-content-between">
            <b-button id="btn-menu-collapse" v-b-toggle class="rounded-circle d-flex align-items-center justify-content-center" href="#example-sidebar" @click.prevent><i class="fas fa-ellipsis-v"></i></b-button>


            <img width="160" class="logo-siscco" src="@/assets/img/logo-medium.svg" alt="">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="h2 mb-0 nav-user-icon">
                <b-avatar icon="person-fill"></b-avatar>
            </b-navbar-nav>
        </b-navbar>

        <b-sidebar id="example-sidebar" >
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" type="button" style="font-size: 18px"  @click="$router.push({name: 'PaginaInicial'})">Página Inicial</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" type="button" style="font-size: 18px" @click="$router.push({name: 'emAlta'})">Em Alta</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style="font-size: 18px" type="button" @click="$router.push({name: 'cursos'})">Cursos AVASUS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style="font-size: 18px" type="button" @click="$router.push({name: 'minhasDuvidas'})">Minhas Dúvidas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style="font-size: 18px" type="button" @click="$router.push({name: 'minhasMedalhas'})">Minhas Medalhas</a>
                </li>
            </ul>
        </b-sidebar>
    </div>
</template>

<style>
.navbar-dark .navbar-nav .nav-link{
    color:black!important
}

.nav-user-icon {
    border-radius: 50%;
    /* flex-shrink: 0; */
    background: var(--gray);
}
#btn-menu-collapse{
    width: 45px;
    height: 45px;
}

.logo-siscco{
    filter: invert(100%);
}

</style>
 
<script>
export default {
    name: 'Navbar'
}
</script>