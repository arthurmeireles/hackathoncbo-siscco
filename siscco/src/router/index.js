import Vue from "vue";
import Router from "vue-router";
import login from '../views/login';
import PaginaInicial from '../components/PaginaInicial/PaginaInicial'



Vue.use(Router);

const routes = [ 
    { path: '/', redirect: '/login' },

    {
        path: '/login', name: 'login', component: login,
        meta: {
            title: 'Sejá Bem-vindo!'
        }
    },
    {
        path: '/auth/', component: () => import('../components/estrutura.vue'),
        children:[
            {
                path: '/', redirect:'/PaginaInicial'
            },
            {
                path:'PaginaInicial', name: 'PaginaInicial', component:PaginaInicial,
                meta: { title:'Página Inicial' }
            },
        ]
    }

];


const router = new Router({ routes, mode: 'history' })
export default router;