import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Categories from './components/Categories'
import Fruits from './components/Fruits'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
//tell vue to use routers we have
Vue.use(VueRouter);

//instantiate router
const router = new VueRouter({
    routes: [
        { path: '/', component: Categories },
        { path: '/Fruits', component: Fruits }
    ],
    mode: 'history'

});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
