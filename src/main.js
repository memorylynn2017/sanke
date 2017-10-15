import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import verify from "vue-verify-plugin"
import axios from 'axios'


Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(verify);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
