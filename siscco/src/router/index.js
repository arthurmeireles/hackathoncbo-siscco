import Vue from "vue";
import Router from "vue-router";
import login from '../views/login';
import PaginaInicial from '../components/PaginaInicial/PaginaInicial'
import PaginaDuvida from '../components/PaginaDuvida/PaginaDuvida'
import minhasDuvidas from '../components/minhasDuvidas/minhasDuvidas'
import emAlta from '../components/emAlta/emAlta'
import minhasMedalhas from '../components/minhasMedalhas/minhasMedalhas'
import cursos from '../components/cursos/cursos'


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
            },
            {
              path: 'emAlta', name: 'emAlta', component: emAlta,
              meta: { title: 'Em Alta' }
            },
            {
              path: 'minhasMedalhas', name: 'minhasMedalhas', component: minhasMedalhas,
              meta: { title: 'Minhas Medalhas' }
            },
            {
              path: 'cursos', name: 'cursos', component: cursos,
              meta: { title: 'Cursos AVASUS' }
            }
        ]
    }

];


const router = new Router({ routes, mode: 'history' })
export default router;