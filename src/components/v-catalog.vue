<template>
   <div class='v-catalog'>
      <h1>Catalog</h1>
      <v-catalog-item
              v-for="product in products" :key="product.article"
              :product_data="product"
      
      />
     
      
      
   
   </div>
   
</template>

<script>
  
  
 
 import VCatalogItem from './v-catalog-item'
  export default {
    name: "v-catalog",
        components: {VCatalogItem},
     data() {
       return {
          products: [
             {
                image: "1.jpg",
                name: "T-shirt 1",
                price: 2100.234234234,
                article: "T1",
                available: true,
                category: "Мужские"
             },
             {
                image: "2.jpg",
                name: "T-shirt 2",
                price: 3150.12312412,
                article: "T2",
                available: true,
                category: "Женские"
             },
             {
                image: "3.jpg",
                name: "T-shirt 3",
                price: 4200.51524,
                article: "T3",
                available: false,
                category: "Женские"
             },
             {
                image: "4.jpg",
                name: "T-shirt 4",
                price: 5300.1245512,
                article: "T4",
                available: true,
                category: "Мужские"
             },
             {
                image: "5.jpg",
                name: "T-shirt 5",
                price: 6500.3522314,
                article: "T5",
                available: false,
                category: "Женские"
             },
             {
                "image": "6.jpeg",
                "name": "T-shirt 6",
                "price": 8700.4124123,
                "article": "T6",
                "available": true,
                "category": "Женские"
             }
          ]
       }
     }
  }
</script>

<style scoped lang="scss">
   h1{
      align-self: center;
      width: 100%;
   }
   .v-catalog {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         width: 100%;
     
      
      
      
      
      &__list {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         align-items: center;
      }
      &__link_to_cart {
         position: fixed;
         top: 80px;
         right: 10px;
         padding: 16px;
         border: solid 1px #aeaeae;
         background: #ffffff;
      }
   }
   .filters {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .range-slider {
      width: 200px;
      margin: auto 16px;
      text-align: center;
      position: relative;
   }
   .range-slider svg, .range-slider input[type=range] {
      position: absolute;
      left: 0;
      bottom: 0;
   }
   input[type=range]::-webkit-slider-thumb {
      z-index: 2;
      position: relative;
      top: 2px;
      margin-top: -7px;
   }
</style>