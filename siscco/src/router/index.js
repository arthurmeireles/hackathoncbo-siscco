import Vue from "vue";
import Router from "vue-router";
import login from '../views/login';
import PaginaInicial from '../components/PaginaInicial/PaginaInicial'
import PaginaDuvida from '../components/PaginaDuvida/PaginaDuvida'
import minhasDuvidas from '../components/minhasDuvidas/minhasDuvidas'


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
            {
              path: 'PaginaDuvida', name: 'PaginaDuvida', component: PaginaDuvida,
              meta: { title: 'Página da Dúvida' }
            },
            {
              path: 'minhasDuvidas', name: 'minhasDuvidas', component: minhasDuvidas,
              meta: { title: 'Minhas Dúvidas' }
            }
        ]
    }

];


const router = new Router({ routes, mode: 'history' })
export default router;