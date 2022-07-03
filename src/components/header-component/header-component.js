import AK from '@/assets/AK.svg'

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
