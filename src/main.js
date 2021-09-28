import Vue from 'vue'
import ElementUI from 'element-ui'
import moment from 'moment'
import './styles.scss'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.prototype.moment = moment

Vue.config.productionTip = false

Vue.filter('stringReplace', listString => {
	return listString.replace(/,/g, ', ')
})

Vue.filter('parseHTML', (listString, id) => {
	Vue.nextTick(() => {
		const doc = document.getElementById(id)
		doc.innerHTML = listString
	})
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
