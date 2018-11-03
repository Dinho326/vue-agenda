import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [
  { path: '/', component: Home, title: 'Home', name:'home' , menu:true },
  { path: '/cadastro', component: Cadastro, title: 'Novo', name:'novo', menu:true },
  { path: '/cadastro/:id', component: Cadastro, title: 'Alterar', name:'alterar', menu:false },
  { path: '*', component: Home, menu:false }
];

