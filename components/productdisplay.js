app.component('product-display',{
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="instock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{shipping}}</p>

        <product-detail :details="details"></product-detail>

        <div 
          v-for="(v,i) in variants" 
          :key="v.id" 
          @mouseover="updatevariant(i)"
          class="color-circle"
          :style="{'background-color': v.color}">
        </div>

        <button 
          class="button" 
          :class="{disabledButton: !instock}"
          :disabled="!instock"
          @click="addtocart()">
          Add to Cart
        </button>

        <button 
          class="button2" 
          :class="{disabledButton: !instock}"
          :disabled="!instock"
          @click="removecart()">
          Remove from cart
        </button>

      </div>
    </div>
  </div>`,
    data(){
        return{
            product: 'Socks',
            selectedvariant: 0,
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/socks_green.jpg', quantity: 50},
                { id: 2235, color: '#324e65', image: './assets/socks_blue.jpg', quantity: 0 },
            ]
        }
        },
    methods: {
        addtocart(){
            this.$emit('add-to-cart', this.variants[this.selectedvariant].id)
        },
        updatevariant(i){
            this.selectedvariant = i
        },
        removecart(){
            this.$emit('remove-cart',this.variants[this.selectedvariant].id)
        }
    },
    computed:{
        title(){  //doubt
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedvariant].image
        },
        instock(){
            return this.variants[this.selectedvariant].quantity
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return '100 Rs'
        }
    }
})