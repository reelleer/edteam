let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        }
    }
};

let PlanPickerComponet = {
    template: '#plan-picker-template',
    components: {
        plan: PlanComponent
    },
    data () {
        return { 
            plans: ['The Single', 'The Curious', 'The Addict']
        };
    }
};

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponet
    }
});