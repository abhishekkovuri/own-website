import Vue from 'vue'
import VueRouter from 'vue-router'
const blogList = () => import('@/views/blog-list/BlogList.vue')
const homePage = () => import('@/views/home/home.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '/blogs',
		name: 'BlogListing',
		component: blogList
	},
	{
		path: '/',
		name: 'homePage',
		component: homePage
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
