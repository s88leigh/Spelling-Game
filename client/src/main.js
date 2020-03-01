import Vue from 'vue'
import App from './App.vue'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)



new Vue({
    render: h => h(App)
}).$mount("#app")
