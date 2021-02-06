<template>
    <div class="v-main-wrapper">
        <v-catalog/>
        <v-cart/>
    </div>
</template>

<script>
  
  import VCatalog from "./v-catalog";
  import VCart from "./v-cart";
  export default {
    name: "vMainWrapper",
    components: {VCart, VCatalog},
  }
</script>

<style lang="scss">
    .v-main-wrapper {
        margin: 0 auto;
        
        max-width: 900px;
    }
</style>