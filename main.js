const app = Vue.createApp({
    data(){
        return{
             cart: [],
             premium: true,
             reviews: []
        }
    },
    methods: {
        updatecart(id){
            this.cart.push(id)
        },
        reducecart(id){
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        },
        addreview(review){
            this.reviews.push(review)
        }
    }
})