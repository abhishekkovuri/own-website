import AK from '@/assets/AK-logo.png'

export default {
	name: 'HeaderComponent',
	data () {
        return {
            AK
        }
    },
    methods: {
        backToHome () {
            if (this.$route.path !== '/') {
                this.$router.push('/')
            }
        }
    }
}
