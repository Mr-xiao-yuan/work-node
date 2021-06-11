import Vue from 'vue'
import App from './App'
import {myrequest} from 'util/request.js'
import store from './store'

Vue.prototype.request = myrequest
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
