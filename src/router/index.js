import Vue from 'vue'
import VueRouter from 'vue-router'
const blogList = () => import('@/views/blog-list/BlogList.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'BlogListing',
		component: blogList
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
