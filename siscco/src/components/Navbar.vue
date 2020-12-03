<template>
    <div>
        <b-navbar toggleable="lg border-bottom border-dark mybg-color">
            <b-button id="btn-menu-collapse" v-b-toggle class="rounded-circle d-flex align-items-center justify-content-center" href="#example-sidebar" @click.prevent><i class="fas fa-ellipsis-v"></i></b-button>


            <img width="160" class="m-auto" src="@/assets/img/logo-medium.svg" alt="">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto h2 mb-0 nav-user-icon">
                <b-avatar icon="person-fill"></b-avatar>
            </b-navbar-nav>
        </b-navbar>

        <b-sidebar id="example-sidebar" title="Sidebar" shadow>
            <div class="px-3 py-2">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </div>
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
    width: 40px;
    height: 40px;
}
</style>
 
<script>
export default {
    name: 'Navbar'
}
</script>