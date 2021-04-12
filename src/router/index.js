import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Data from '../views/Alldata.vue'
import Flow from '../views/Flowpool.vue'
import Flowdata from '../views/Flowpooldata.vue'
import Personal from '../views/Personaldetails.vue'
import Indexfund from '../views/Indexfund.vue'
import Fundhistory from '../views/Fundhistory.vue'
import Buy from '../views/Buy.vue'
import Redemption from '../views/Redemption.vue'
import Indexmarket from '../views/Indexmarket.vue'
import Charts from '../views/Charts.vue'
import Index from '../views/Index.vue'
import Tradehistory from '../views/Tradehistory.vue'
import Profitandloss from '../views/Profitandloss.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/alldata',
        name: 'Data',
        component: Data
    }, {
        path: '/flow',
        name: 'Flow',
        component: Flow
    }, {
        path: '/flowdata',
        name: 'Flowdata',
        component: Flowdata
    }, {
        path: '/personal',
        name: 'Personal',
        component: Personal
    }, {
        path: '/indexfund',
        name: 'Indexfund',
        component: Indexfund
    }, {
        path: '/fundhistory',
        name: 'Fundhistory',
        component: Fundhistory
    }, {
        path: '/buy',
        name: 'Buy',
        component: Buy
    }, {
        path: '/redemption',
        name: 'Redemption',
        component: Redemption
    }, {
        path: '/indexmarket',
        name: 'Indexmarket',
        component: Indexmarket
    }, {
        path: '/charts',
        name: 'Charts',
        component: Charts
    }, {
        path: '/indexs',
        name: 'Index',
        component: Index
    }, {
        path: '/trade',
        name: 'Tradehistory',
        component: Tradehistory
    }, {
        path: '/profit-loss',
        name: 'Profitandloss',
        component: Profitandloss
    }


]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router