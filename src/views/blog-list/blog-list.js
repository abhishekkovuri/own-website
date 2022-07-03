import { mapGetters } from 'vuex'
export default {
	name: 'blog-listing',
	data () {
		return {
			category: '',
			pageNo: 1,
			mediumLink: "https://medium.com/@abhishekkovuri25"
		}
	},
	created () {
		this.$store.dispatch('getPostsFromAPI')
	},
	computed: {
		...mapGetters(['getCategories', 'getPostsList', 'getTotalPages'])
	}
}
