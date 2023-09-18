app.component('product-detail',{
    props:{
        details:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>`
})