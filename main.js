import Vue from 'vue'
import App from './App'
import {myrequest} from 'util/request.js'
import store from './store'
import uView from "uview-ui";
Vue.use(uView);


Vue.prototype.request = myrequest
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
