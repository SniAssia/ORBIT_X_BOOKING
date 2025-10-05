import { createRouter, createWebHashHistory } from 'vue-router'

import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import homepage from '../components/homepage.vue'; 
import navbar from '../components/navbar.vue';
import services from '../components/services.vue'; 
import couple from '../components/couple.vue'; 
import booking from '../components/booking.vue';
const routes = [
  {path :'/',name:'navbar',component : navbar},
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/signin', name: 'Signin', component: SignIn },
  { path: '/homepage',name: 'homepage', component : homepage }, 
  {path: '/services',name:'services',component:services},
  {path: '/couple',name:'couple',component:couple}, 
  {path: '/booking',name:'booking',component:booking},
] 


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
