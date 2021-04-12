import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Web3 from 'web3'
Vue.prototype.Web3 = Web3
import tp from 'tp-js-sdk'
Vue.prototype.tp = tp
import VueClipBoard from 'vue-clipboard2'

Vue.use(VueClipBoard);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')