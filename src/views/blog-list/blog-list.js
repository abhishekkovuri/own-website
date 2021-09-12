import { mapGetters } from 'vuex'
export default {
	name: 'blog-listing',
	data () {
		return {
			category: '',
			pageNo: 1
		}
	},
	created () {
		this.$store.dispatch('getPostsFromAPI')
	},
	methods: {
		// goToDetails (slugName) {
		// 	const params = { slugName }
		// 	this.$router.push({ name: 'blogDetail', params })
		// }
	},
	computed: {
		...mapGetters(['getCategories', 'getPostsList', 'getTotalPages'])
	}
}
