Vue.component('notification-message', {
    template: '#notification-message-template',
    props: {
        type: {
            type: String,
            default: 'info'
        },
        header: {
            type: String,
            default: 'Information'
        }
    },
    data () {
        return {
            open: true
        }
    },
    methods: {
        close() {
            this.open = false;
        }
    }
})



new Vue({
    el: '#app'
});