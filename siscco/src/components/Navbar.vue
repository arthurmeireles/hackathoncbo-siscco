<template>
    <div>
        <b-navbar toggleable="lg border-bottom border-dark">
            <b-navbar-brand href="#">
                <div class="h2 mb-0">
                    <b-icon-list style="color: #3086fa;" ></b-icon-list>
                </div>
            </b-navbar-brand>

            <img width="160" class="m-auto" src="@/assets/img/logo-medium.svg" alt="">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto h2 mb-0 nav-user-icon">
                <b-avatar icon="person-fill"></b-avatar>
            </b-navbar-nav>
        </b-navbar>
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
</style>
 
<script>
export default {
    name: 'Navbar'
}
</script>