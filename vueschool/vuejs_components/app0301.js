Vue.component('github-user-card', {
    template: '#github-user-card-template',
    props: {
        username: {
            type: String,
            required: true
        }
    },
    async created () {
        const response = await axios.get(`https://api.github.com/users/${this.username}`, {
            reponseType: 'json'
        })
        
        this.setUser(response.data);
    },
    // created () {
    //     axios.get(`https://api.github.com/users/${this.username}`)
    //         .then(response => {
    //             setUser(response.data)
    //         })
    // },
    data () {
        return {
            user: {}
        }
    },
    methods: {
        setUser(newUser) {
            this.user = newUser;
        }
    },
    computed: {
        joined() {
            return this.user.created_at.slice(0,4)
        }
    }
})



new Vue({
    el: '#app',
    data: {
        users: ['reelleer', 'hootlex']
    }
});