<template>
    <div class="v-catalog-item">
        <img src="" alt="img">
        <div class="v-catalog-item__name">{{product_data.name}}</div>
        <div class="v-catalog-item__price">price: {{product_data.price}}</div>
        <button>Add to Cart</button>
    </div>
</template>

<script>
  export default {
    name: "v-catalog-item",
    props:{
    product_data: {
      type: Object,
      default(){
        return{}
      },
    },
      }
    
  }
</script>

<style lang="scss">
    .v-catalog-item {
        flex-basis: 25%;
        border: 1px solid blanchedalmond;
        margin-bottom: 16px;
        padding: 16px;
        align-items: center;
        
        
        &:first-child {
            margin-left: 0px;
        }
        
       
        
    }
</style>